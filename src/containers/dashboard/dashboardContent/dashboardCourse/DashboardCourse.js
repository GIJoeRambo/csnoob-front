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
    searchText: "",
    uniId: this.props.uni.id
  };

  componentDidMount = () => {
    this.getData(this.props.uni.id);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.uni.id !== prevState.uniId) {
      return { uniId: nextProps.uni.id, courseList: [] };
    }
    return null;
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!this.state.courseList) {
      this.getData(this.state.uniId);
    }
  };

  getData = id => {
    service.getCoursesByUniId(
      res => {
        this.setState({ courseList: res.Data });
      },
      err => console.log(err),
      id
    );
  };

  handleClick = () => {
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
        search: "?id=" + course._id
      };
      history.push(path);
    } else {
      alert("No course found");
    }
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
