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

class CourseView extends React.Component {
  state = {
    tabIndex: 0,
    commentList: [],
    page: 1,
    total: 0
  };

  courseId = this.props.match.params.courseId;
  rowsPerPage = 10;

  componentDidMount = () => {
    this.getData(1);
  };

  refreshcommentList = () => {
    this.getData(1);
  };

  handleChangePage = index => {
    this.getData(index);
  };

  getData = page => {
    service.getCourseRating(
      res => {
        console.log(res);
        this.setState({
          commentList: res.Data.details,
          total: res.Data.total,
          page: page
        });
      },
      err => {
        console.log(err);
      },
      this.courseId,
      page
    );
  };

  render() {
    const { course } = this.props.location.state;

    return (
      <div className="m-3">
        <div className="mb-3">
          <Typography variant="h4">{course.code}</Typography>
          <Typography variant="h4" className="mt-3">
            {course.name}
          </Typography>
        </div>
        <Typography className="my-3">{course.description}</Typography>
        <Divider className="mb-5"></Divider>
        <Tabs
          value={this.state.tabIndex}
          onChange={(e, newValue) => {
            this.setState({ tabIndex: newValue });
          }}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label={"Comment"}></Tab>
          <Tab label={"Resource"}></Tab>
        </Tabs>
        <div
          hidden={this.state.tabIndex !== 0}
          className="course_comment_panel"
        >
          <CourseComment
            course={course}
            refreshcommentList={this.refreshcommentList}
          />
          <CourseCommentList commentList={this.state.commentList} />
          <div className="d-flex justify-content-center">
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={this.state.total}
              rowsPerPage={this.rowsPerPage}
              page={this.state.page - 1}
              onChangePage={(e, newIndex) =>
                this.handleChangePage(newIndex + 1)
              }
            />
          </div>
        </div>
        <div hidden={this.state.tabIndex !== 1}>
          <Typography>Resource</Typography>
        </div>
      </div>
    );
  }
}

export default CourseView;
