import React, { Component } from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import service from "../../../../service/http";
import DashboardCourseTab from "./DashboardCourseTab";

class DashboardCourse extends Component {
  state = {
    courseList: []
  };

  componentDidMount = () => {
    service.getCourse(
      res => {
        this.setState({ courseList: res.Data });
      },
      err => console.log(err)
    );
  };

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Course List
          </Typography>
          <Divider></Divider>
          <DashboardCourseTab courseList={this.state.courseList} />
        </CardContent>
      </Card>
    );
  }
}

export default DashboardCourse;
