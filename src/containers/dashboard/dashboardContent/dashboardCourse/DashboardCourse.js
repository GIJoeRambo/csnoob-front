import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Divider
} from "@material-ui/core";
import service from "../../../../service/http";

class DashboardCourse extends Component {
  state = {
    tabIndex: 0,
    courseList: []
  };

  // stageList = [{name:"Stage One"}, "Stage Two", "Stage Three", "Postgraduate"];
  stageList = [
    { id: 1, name: "Stage One", stage: 1 },
    { id: 2, name: "Stage Two", stage: 2 },
    { id: 3, name: "Stage Three", stage: 3 },
    { id: 4, name: "Postgraduate", stage: 7 }
  ];

  componentDidMount = () => {
    service.getCourse(
      res => {
        console.log(res);
        this.setState({ courseList: res.Data });
      },
      err => console.log(err)
    );
  };

  handleChange = (e, newValue) => {
    this.setState({ tabIndex: newValue });
  };

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Course List
          </Typography>
          <Divider></Divider>

          {this.stageList.map(stage => {
            return (
              <Typography
                component={"div"}
                hidden={this.state.tabIndex !== stage.id - 1}
                index={stage.id - 1}
                key={stage.id}
              >
                <Tabs
                  value={this.state.tabIndex}
                  onChange={(e, newValue) => this.handleChange(e, newValue)}
                  indicatorColor="primary"
                  variant="fullWidth"
                  className="dashboard_course_tabs"
                >
                  {this.stageList.map((el, index) => {
                    return <Tab label={el.name} key={index}></Tab>;
                  })}
                </Tabs>
                {this.state.courseList
                  .filter(course => course.stage === stage.stage)
                  .map(course => {
                    return (
                      <Typography key={course._id} className="col-3">
                        {course.code}
                      </Typography>
                    );
                  })}
              </Typography>
            );
          })}
        </CardContent>
      </Card>
    );
  }
}

export default DashboardCourse;
