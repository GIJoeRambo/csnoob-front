import React, { Component } from "react";
import { Typography, Divider, Tab, Tabs } from "@material-ui/core";

class CourseView extends Component {
  state = {
    tabIndex: 0
  };

  handleChange = (e, newValue) => {
    this.setState({ tabIndex: newValue });
  };

  componentDidMount = () => {
    console.log(this.props.location.state.course);
  };

  render() {
    let course = this.props.location.state.course;
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
          onChange={(e, newValue) => this.handleChange(e, newValue)}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label={"Resource"}></Tab>
          <Tab label={"Comment"}></Tab>
        </Tabs>
        <Typography hidden={this.state.tabIndex !== 0}>Resource</Typography>
        <Typography hidden={this.state.tabIndex !== 1}>Comment</Typography>
      </div>
    );
  }
}

export default CourseView;
