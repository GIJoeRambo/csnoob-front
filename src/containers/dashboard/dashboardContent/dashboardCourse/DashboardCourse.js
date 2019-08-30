import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  InputBase
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import service from "../../../../service/http";
import DashboardCourseTab from "./DashboardCourseTab";

class DashboardCourse extends Component {
  state = {
    courseList: [],
    searchText: ""
  };

  componentDidMount = () => {
    service.getCourse(
      res => {
        this.setState({ courseList: res.Data }, () => {
          console.log(this.state);
        });
      },
      err => console.log(err)
    );
  };

  handleClick = () => {
    let course = this.state.courseList.find(el =>
      el.code.includes(this.state.searchText)
    );
    let { history, match } = this.props;
    let path = {
      pathname: "/course/" + match.params.uniName + "/" + course._id,
      state: {
        course: course
      }
    };
    history.push(path);
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <Card>
        <CardContent>
          <div className="d-flex justify-content-between">
            <Typography variant="h5" component="span" gutterBottom>
              Course List
            </Typography>
            <span>
              <InputBase
                placeholder="Search Course"
                value={this.state.searchText}
                onChange={e => this.handleChange(e)}
              />
              <IconButton onClick={() => this.handleClick()}>
                <SearchIcon />
              </IconButton>
            </span>
          </div>
          <Divider></Divider>
          <DashboardCourseTab courseList={this.state.courseList} />
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(DashboardCourse);
