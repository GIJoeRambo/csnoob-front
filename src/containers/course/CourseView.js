import React from "react";
import { Typography, Divider, Tab, Tabs } from "@material-ui/core";
import CourseComment from "./courseComment/courseComment";
import CourseCommentList from "./courseCommentList/courseCommentList";
import service from "../../service/http";
import "./courseView.css";

class CourseView extends React.Component {
  state = {
    tabIndex: 0,
    commentList: []
  };

  componentDidMount = () => {
    service.getCourseRating(
      res => {
        console.log(res);
        this.setState({ commentList: res.Data });
      },
      err => {
        console.log(err);
      },
      this.props.location.state.course._id
    );
  };

  render() {
    const { course } = this.props.location.state;

    return (
      <div className="m-3">
        <div className="mb-3">
          <Typography component="span" variant="h4">
            {course.code}
          </Typography>
          <Typography component="span" variant="h4" className="ml-5">
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
          <CourseComment course={course} />
          <CourseCommentList commentList={this.state.commentList} />
        </div>
        <div hidden={this.state.tabIndex !== 1}>
          <Typography>Resource</Typography>
        </div>
      </div>
    );
  }
}

export default CourseView;
