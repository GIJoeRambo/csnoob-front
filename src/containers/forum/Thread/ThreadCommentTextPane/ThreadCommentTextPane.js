import React, { Component } from "react";
import FormHoc from "../../../../hoc/FormHoc";
import service from "../../../../service/http";
import Swal from "sweetalert2";
import { IsPostedHandler } from "../../../../redux/actions/ThreadCommentIsPostedAction";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";

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
        <div className="post">
          <TextField
            className="m-3"
            name="name"
            label="Name(Optional)"
            variant="outlined"
            onChange={this.props.onChange}
            value={this.props.fields.name}
          ></TextField>
          <TextField
            className="mx-3"
            fullWidth
            multiline
            rowsMax={100}
            name="comment"
            label="Comment"
            variant="outlined"
            onChange={this.props.onChange}
            value={this.props.fields.comment}
          ></TextField>
          <Button
            color="primary"
            onClick={this.handleSubmit}
            variant="contained"
            className="my-3 ml-3"
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
)(FormHoc({ name: "", comment: "" })(ThreadCommentTextPane));
