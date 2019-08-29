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
    page: 0,
    rowsPerPage: 5
  };

  componentDidMount = () => {
    service.getCourseRating(
      res => {
        this.setState({ commentList: res.Data });
      },
      err => {
        console.log(err);
      },
      this.props.location.state.course._id
    );
  };

  refreshcommentList = () => {
    service.getCourseRating(
      res => {
        this.setState({ commentList: res.Data });
      },
      err => {
        console.log(err);
      },
      this.props.location.state.course._id
    );
  };

  handleChangePage = index => {
    this.setState({ page: index });
  };

  handleChangeRowsPerPage = e => {
    this.setState({ rowsPerPage: +e.target.value, page: 0 });
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
        <Typography>{course.description}</Typography>
        <Divider className="my-3"></Divider>
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
          <CourseCommentList
            commentList={this.state.commentList}
            page={this.state.page}
            rowsPerPage={this.state.rowsPerPage}
          />
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={this.state.commentList.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onChangePage={(e, newIndex) => this.handleChangePage(newIndex)}
            onChangeRowsPerPage={e => this.handleChangeRowsPerPage(e)}
          />
        </div>
        <div hidden={this.state.tabIndex !== 1}>
          <Typography>Resource</Typography>
        </div>
      </div>
    );
  }
}

export default CourseView;
