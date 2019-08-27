import React from "react";
import { Tabs, Tab, Button, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class DashboardCourseTab extends React.Component {
  stageList = [
    { id: 1, name: "Stage One", stage: 1 },
    { id: 2, name: "Stage Two", stage: 2 },
    { id: 3, name: "Stage Three", stage: 3 },
    { id: 4, name: "Postgraduate", stage: 7 }
  ];

  state = {
    tabIndex: 0
  };

  handleChange = (e, newValue) => {
    this.setState({ tabIndex: newValue });
  };

  handleClick = course => {
    let { history, match } = this.props;
    console.log(this.props);
    let path = {
      pathname:
        "/course/" +
        match.params.uniName +
        "/" +
        course.code.split(" ").join(""),
      state: {
        course: course
      }
    };
    history.push(path);
  };

  render() {
    return (
      <React.Fragment>
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
              >
                {this.stageList.map((el, index) => {
                  return <Tab label={el.name} key={index}></Tab>;
                })}
              </Tabs>

              <div className="row">
                {this.props.courseList
                  .filter(course => course.stage === stage.stage)
                  .map(course => {
                    return (
                      <div key={course._id} className="col-3 mt-3 text-center">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => this.handleClick(course)}
                        >
                          {course.code}
                        </Button>
                      </div>
                    );
                  })}
              </div>
            </Typography>
          );
        })}
      </React.Fragment>
    );
  }
}

export default withRouter(DashboardCourseTab);
