import React, { Component } from "react";
import FormHoc from "../../../../hoc/FormHoc";
import service from "../../../../service/http";
import Swal from "sweetalert2";
import { IsPostedHandler } from "../../../../redux/actions/ThreadCommentIsPostedAction";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import ImageUploader from "../../../../shared/ImageUploader";
import "../../../../shared/css/richTextEditor.css";
class ThreadCommentTextPane extends Component {
  IsPostedHandler = () => {
    this.props.IsPostedHandler();
  };

  handleSubmit = event => {
    if (!this.ValidatedHandler()) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "The comment cannot be empty."
      });
      return;
    }
    this.props.onSubmit(event, () => {
      let regu = "^[ ]+$";
      let re = new RegExp(regu);
      const model = {
        name:
          this.props.fields.name === ""
            ? "Anonymous"
            : re.test(this.props.fields.name)
            ? "Anonymous"
            : this.props.fields.name,
        comment: this.props.fields.comment,
        threadId: this.props.threadId
      };
      service.PostThreadComment(
        model,
        res => {
          Swal.fire({
            type: "success",
            title: res.Data,
            showConfirmButton: true
          }).then(result => {
            if (result.value) {
              this.IsPostedHandler();
              this.props.reset();
            }
          });
        },
        err => {
          alert("Something Error");
        }
      );
    });
  };

  ValidatedHandler = () => {
    if (this.props.fields.comment === "") {
      return false;
    }
    let regu = "^[ ]+$";
    let re = new RegExp(regu);
    if (re.test(this.props.fields.comment)) {
      return false;
    }
    return true;
  };

  render() {
    return (
      <div>
        <div className="post d-flex flex-column">
          <TextField
            className="m-3"
            name="name"
            label="Name(Optional)"
            variant="outlined"
            onChange={this.props.onChange}
            value={this.props.fields.name}
          />
          <CKEditor
            id="threadComment"
            editor={ClassicEditor}
            onInit={editor => {
              editor.plugins.get(
                "FileRepository"
              ).createUploadAdapter = loader => {
                return new ImageUploader(loader);
              };
            }}
            onChange={(event, editor) =>
              this.props.editorOnChange(event, editor)
            }
            config={{
              toolbar: [
                "heading",
                "|",
                "bold",
                "italic",
                "|",
                "link",
                "imageUpload",
                "|",
                "bulletedList",
                "numberedList",
                "blockQuote",
                "|",
                "undo",
                "redo"
              ]
            }}
          />
          <Button
            color="primary"
            onClick={this.handleSubmit}
            variant="contained"
            className="m-3"
          >
            Post
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  IsPosted: state.ThreadCommentIsPosted
});

const mapDispatchToProps = dispatch => {
  return {
    IsPostedHandler: () => {
      dispatch(IsPostedHandler());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormHoc({ name: "", content: "" })(ThreadCommentTextPane));
