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

  stageList = ["Stage One", "Stage Two", "Stage Three", "Postgraduate"];

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

  createComponent = () => {
    return <h1>1</h1>;
  };

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Course List
          </Typography>
          <Divider></Divider>
          <Tabs
            value={this.state.tabIndex}
            onChange={(e, newValue) => this.handleChange(e, newValue)}
            indicatorColor="primary"
            variant="fullWidth"
            className="dashboard_course_tabs"
          >
            {this.stageList.map((el, index) => {
              return <Tab label={el} key={index}></Tab>;
            })}
          </Tabs>
          <Typography
            component="div"
            hidden={this.state.tabIndex !== 0}
            index={0}
          >
            {this.state.courseList.map((el, index) => {
              return (
                <Typography key={index} className="col-3">
                  {el.code}
                </Typography>
              );
            })}
          </Typography>
          <Typography
            component="div"
            hidden={this.state.tabIndex !== 1}
            index={1}
          ></Typography>
          <Typography
            component="div"
            hidden={this.state.tabIndex !== 2}
            index={2}
          ></Typography>
          <Typography
            component="div"
            hidden={this.state.tabIndex !== 3}
            index={3}
          ></Typography>
        </CardContent>
      </Card>
    );
  }
}

export default DashboardCourse;
