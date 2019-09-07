import React from "react";
import {
  Typography,
  Divider,
  Tab,
  Tabs,
  TablePagination
} from "@material-ui/core";
import CourseComment from "./courseComment/courseComment";
import CourseCommentList from "./courseCommentList/courseCommentList";
import service from "../../service/http";
import "./courseView.css";
import { withRouter, Redirect } from "react-router-dom";
import { ColorButton } from "../../shared/styledComponent/styledComponent";

class CourseView extends React.Component {
  state = {
    tabIndex: 0,
    commentList: [],
    total: 0,
    course: {},
    shouldRedirect: false,
    page:
      this.props.location.search &&
      +this.props.location.search
        .split("?")[1]
        .split("&")[1]
        .split("=")[1]
  };

  courseId =
    this.props.location.search &&
    this.props.location.search
      .split("?")[1]
      .split("&")[0]
      .split("=")[1];
  rowsPerPage = 10;

  componentDidMount = () => {
    this.getCourse();
    this.getData(this.state.page);
  };

  refreshcommentList = () => {
    this.getData(this.state.page);
  };

  handleChangePage = index => {
    this.getData(index, () => {
      window.scrollTo(0, 0);
      this.props.history.push(
        this.props.location.pathname +
          this.props.location.search.split("&")[0] +
          "&page=" +
          index
      );
    });
  };

  getCourse = () => {
    service.getCourseById(
      res => {
        if (res.Data) {
          this.setState({ course: res.Data });
        } else {
          this.setState({ shouldRedirect: true });
        }
      },
      err => {
        console.log(err);
      },
      this.courseId
    );
  };

  getData = (page, callback) => {
    service.getCourseRating(
      res => {
        if (res.Data.details.length) {
          this.setState(
            {
              commentList: res.Data.details,
              total: res.Data.total,
              page: page
            },
            callback
          );
        } else {
          this.handleChangePage(1);
        }
      },
      err => {
        console.log(err);
      },
      this.courseId,
      page
    );
  };

  handleReturnClick = () => {
    this.props.history.push("/dashboard/" + this.props.match.params.uniName);
  };

  render() {
    const { course, tabIndex, commentList } = this.state;
    if (this.state.shouldRedirect) {
      return (
        <Redirect
          to={"/dashboard/" + this.props.match.params.uniName}
        ></Redirect>
      );
    }

    return (
      <div className="m-3">
        <div className="mb-3">
          <Typography variant="h4" className="d-flex justify-content-between">
            {course.code}
            <ColorButton
              variant="outlined"
              onClick={() => this.handleReturnClick()}
            >
              Return
            </ColorButton>
          </Typography>

          <Typography variant="h4" className="mt-3">
            {course.name}
          </Typography>
        </div>

        <Typography className="my-3">{course.description}</Typography>
        <Divider className="mb-5"></Divider>
        <Tabs
          value={tabIndex}
          onChange={(e, newValue) => {
            this.setState({ tabIndex: newValue });
          }}
          variant="fullWidth"
          indicatorColor="primary"
        >
          <Tab label={"Comment"}></Tab>
          <Tab label={"Resource"}></Tab>
        </Tabs>
        <div hidden={tabIndex !== 0} className="course_comment_panel">
          <CourseComment
            course={course}
            refreshcommentList={this.refreshcommentList}
          />
          <CourseCommentList commentList={commentList} />
          <div className="d-flex justify-content-center">
            <TablePagination
              className="course_comment_pagination"
              rowsPerPageOptions={[]}
              component="div"
              count={this.state.total}
              rowsPerPage={this.rowsPerPage}
              page={this.state.page - 1}
              onChangePage={(e, newIndex) => {
                this.handleChangePage(newIndex + 1);
              }}
            />
          </div>
        </div>
        <div hidden={tabIndex !== 1}>
          <Typography>Resource</Typography>
        </div>
      </div>
    );
  }
}

export default withRouter(CourseView);
