import React, { Component } from "react";
import { Typography, Divider, TablePagination } from "@material-ui/core";
import { ColorButton } from "../../shared/styledComponent/styledComponent";
import { withRouter } from "react-router-dom";
import TeachersComment from "./teachersComment/TeachersComment";
import TeachersCommentsList from "./teachersCommentsList/TeachersCommentsList";
import httpService from "../../service/http";
import Swal from "sweetalert2";
import "./Teachers.css";

class Teachers extends Component {
  state = {
    comments: [],
    total: 0,
    currentPage: 0
  };

  teacherId =
    this.props.location.search &&
    this.props.location.search
      .split("?")[1]
      .split("&")[0]
      .split("=")[1];

  rowsPerPage = 10;

  handleReturnClick = () => {
    this.props.history.push("/dashboard/" + this.props.match.params.uniName);
  };

  changePage = newIndex => {
    this.getTeacherRating(newIndex);
  };

  getTeacherRating = currentPage => {
    httpService.getTeacherRating(
      res => {
        this.setState(() => {
          return {
            comments: res.Data.details,
            total: res.Data.total,
            currentPage: currentPage
          };
        });
      },
      err => {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Server went to an error, please try later."
        });
      },
      this.teacherId,
      currentPage + 1
    );
  };

  refreshPage = () => {
    console.log("rrr");
    if (this.state.currentPage === 0) {
      this.getTeacherRating(0);
    } else {
      return;
    }
  };

  componentDidMount = () => {
    this.getTeacherRating(0);
  };

  render = () => {
    return (
      <div className="m-3">
        <div className="mb-3">
          <Typography variant="h4" className="d-flex justify-content-between">
            {this.props.match.params.teacherName}
            <ColorButton
              variant="outlined"
              onClick={() => this.handleReturnClick()}
            >
              Return
            </ColorButton>
          </Typography>
        </div>
        <Divider className="mb-3"></Divider>
        <TeachersComment
          teacherId={this.teacherId}
          refreshPage={this.refreshPage}
        />

        <div className="cs_t_teacher_comment_panel">
          <TeachersCommentsList
            commentsList={this.state.comments}
          ></TeachersCommentsList>
          <div className="d-flex justify-content-center">
            <TablePagination
              className="course_comment_pagination"
              component="div"
              count={this.state.total}
              rowsPerPageOptions={[]}
              rowsPerPage={this.rowsPerPage}
              page={this.state.currentPage}
              onChangePage={(e, newIndex) => this.changePage(newIndex)}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default withRouter(Teachers);
