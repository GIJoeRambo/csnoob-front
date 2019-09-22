import React, { Component } from "react";
import FormHoc from "../../../../hoc/FormHoc";
import service from "../../../../service/http";
import Swal from "sweetalert2";
import { TextField, Button } from "@material-ui/core";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import ImageUploader from "../../../../shared/ImageUploader";

class NewThreadForm extends Component {
  state = {
    buttonDisabled: false
  };
  handleSubmit = event => {
    if (!this.ValidatedHandler()) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "The title and content cannot be empty."
      });
    } else {
      let regu = "^[ ]+$";
      let re = new RegExp(regu);
      this.props.onSubmit(event, () => {
        const model = {
          author:
            this.props.fields.author === ""
              ? "Anonymous"
              : re.test(this.props.fields.author)
              ? "Anonymous"
              : this.props.fields.author,
          title: this.props.fields.title,
          content: this.props.fields.content,
          forumId: this.props.forumId
        };
        this.setState({ buttonDisabled: true });
        service.postNewThread(
          model,
          res => {
            Swal.fire({
              type: "success",
              title: res.Data,
              showConfirmButton: true
            }).then(result => {
              if (result.value) {
                this.props.goBack();
              }
            });
          },
          err => {
            alert("Something Error");
            this.setState({ buttonDisabled: false });
          }
        );
      });
    }
  };

  ValidatedHandler = () => {
    if (this.props.fields.title === "" || this.props.fields.content === "") {
      return false;
    }
    let regu = "^[ ]+$";
    let re = new RegExp(regu);
    if (
      re.test(this.props.fields.title) ||
      re.test(this.props.fields.content)
    ) {
      return false;
    }
    return true;
  };

  CancelHandler = () => {
    Swal.fire({
      title: "Are you sure to exit?",
      text: "You have not filled out your form yet.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33"
    }).then(result => {
      if (result.value) {
        this.props.goBack();
      }
    });
  };

  render() {
    return (
      <div className="col-full push-top">
        {this.props.children}

        <form>
          <div className="row">
            <div className="col-md-5 col-11">
              <div className="form-group">
                <TextField
                  name="title"
                  label="Title"
                  variant="outlined"
                  onChange={this.props.onChange}
                  value={this.props.fields.title}
                ></TextField>
              </div>
            </div>
            <div className="col-md-5 col-11">
              <div className="form-group">
                <TextField
                  name="author"
                  label="Author(Optional)"
                  variant="outlined"
                  onChange={this.props.onChange}
                  value={this.props.fields.author}
                ></TextField>
              </div>
            </div>
          </div>

          <div className="form-group">
            {/* <TextField
              name="content"
              multiline
              rowsMax="100"
              fullWidth
              label="Content"
              variant="outlined"
              onChange={this.props.onChange}
              value={this.props.fields.content}
            /> */}
            <CKEditor
              style={{ minHeight: "400px" }}
              name="comment"
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
          </div>
          <div className="btn-group">
            <Button
              name="Publish"
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
              disabled={this.state.buttonDisabled}
              className="mr-5"
            >
              Publish
            </Button>
            <Button
              name="cancel"
              color="secondary"
              onClick={this.CancelHandler}
              disabled={this.state.buttonDisabled}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormHoc({ title: "", content: "", author: "" })(NewThreadForm);
