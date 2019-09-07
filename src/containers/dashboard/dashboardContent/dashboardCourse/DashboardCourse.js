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
import Swal from "sweetalert2";
import sessionstorage from "sessionstorage";

class DashboardCourse extends Component {
  state = {
    courseList: [],
    searchText: "",
    uniId: this.props.uni.id,
    shouldUpdate: false
  };

  componentDidMount = () => {
    this.getData(this.props.uni.id);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.uni.id !== prevState.uniId) {
      return { uniId: nextProps.uni.id, shouldUpdate: true, courseList: [] };
    }
    return null;
  }

  componentDidUpdate = () => {
    if (this.state.courseList.length === 0 && this.state.shouldUpdate) {
      this.getData(this.state.uniId);
      this.setState({ shouldUpdate: false });
    }
  };

  getData = id => {
    if (sessionstorage.getItem(id)) {
      const data = JSON.parse(sessionstorage.getItem(id));
      this.setState({ courseList: data });
    } else {
      service.getCoursesByUniId(
        res => {
          this.setState({ courseList: res.Data }, () => {
            sessionstorage.setItem(id, JSON.stringify(res.Data));
          });
        },
        err => console.log(err),
        id
      );
    }
  };

  handleClick = () => {
    if (this.state.searchText.length < 3) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Please enter at least three number"
      });
    } else {
      let course = this.state.courseList.find(el =>
        el.code.includes(this.state.searchText)
      );
      if (course) {
        let { history, match } = this.props;
        let path = {
          pathname:
            "/course/" +
            match.params.uniName +
            "/" +
            course.code.split(" ").join(""),
          search: "?id=" + course._id + "&page=1"
        };
        history.push(path);
      } else {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "No course found"
        });
      }
    }
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <Card className="mt-3">
        <CardContent>
          <div className="d-flex justify-content-between">
            <Typography variant="h5" component="span" gutterBottom>
              Course List
            </Typography>
            <span>
              <InputBase
                placeholder="Enter Number eg. 120"
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
