import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const courseList = [
  { id: 1, courseName: "101", courseFullName: "101 safafsc" },
  { id: 2, courseName: "102", courseFullName: "102 ascfasv" },
  { id: 3, courseName: "103", courseFullName: "103 vax zc" },
  { id: 4, courseName: "104", courseFullName: "104 safascfaswdfsc" },
  { id: 5, courseName: "105", courseFullName: "105 fac" },
  { id: 6, courseName: "106", courseFullName: "106 scd" },
  { id: 7, courseName: "107", courseFullName: "107 safcsacafsc" },
  { id: 8, courseName: "108", courseFullName: "108 vascsac" }
];

class DashboardCourse extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Course List
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default DashboardCourse;
