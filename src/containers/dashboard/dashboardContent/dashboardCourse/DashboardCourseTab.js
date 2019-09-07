import React from "react";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { ColorButton } from "../../../../shared/styledComponent/styledComponent";

class DashboardCourseTab extends React.Component {
  stageList = [
    { id: 1, name: "Stage 1", stage: 1 },
    { id: 2, name: "Stage 2", stage: 2 },
    { id: 3, name: "Stage 3", stage: 3 },
    { id: 4, name: "Postgraduate", stage: 7 }
  ];

  state = {
    tabIndex: 0
  };

  componentDidMount = () => {
    if (this.props.location.state.stage) {
      this.setState({
        tabIndex:
          this.stageList.find(
            el => el.stage === this.props.location.state.stage
          ).id - 1
      });
    }
  };

  handleChange = (e, newValue) => {
    this.setState({ tabIndex: newValue });
  };

  handleClick = course => {
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
                  return (
                    <Tab
                      label={el.name}
                      style={{ wordBreak: "break-all" }}
                      key={index}
                    ></Tab>
                  );
                })}
              </Tabs>

              <div className="row">
                {this.props.courseList
                  .filter(course => course.stage === stage.stage)
                  .map(course => {
                    return (
                      <div
                        key={course._id}
                        className="col-sm-3 col-4 mt-3 text-center"
                      >
                        <ColorButton
                          variant="contained"
                          onClick={() => this.handleClick(course)}
                        >
                          {course.code}
                        </ColorButton>
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
