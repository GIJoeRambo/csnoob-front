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
import { withRouter } from "react-router-dom";
import { ColorButton } from "../../shared/styledComponent/styledComponent";

class CourseView extends React.Component {
  state = {
    tabIndex: 0,
    commentList: [],
    page: 1,
    total: 0,
    course: {}
  };

  courseId = this.props.location.search.split("=")[1];
  rowsPerPage = 10;

  componentDidMount = () => {
    this.getCourse();
    this.getData(1);
  };

  refreshcommentList = () => {
    this.getData(1);
  };

  handleChangePage = index => {
    this.getData(index);
  };

  getCourse = () => {
    service.getCourseById(
      res => {
        this.setState({ course: res.Data });
      },
      err => {
        console.log(err);
      },
      this.courseId
    );
  };

  getData = page => {
    service.getCourseRating(
      res => {
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

  handleReturnClick = () => {
    this.props.history.push("/dashboard/" + this.props.match.params.uniName);
  };

  render() {
    const { course, tabIndex, commentList } = this.state;

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
              onChangePage={(e, newIndex) =>
                this.handleChangePage(newIndex + 1)
              }
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
