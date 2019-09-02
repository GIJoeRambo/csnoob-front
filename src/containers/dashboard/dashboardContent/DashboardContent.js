import React from "react";
import DashboardCourse from "./dashboardCourse/DashboardCourse";
import DashboardDescription from "./dashboardSummary/DashboardSummary";
import DashboardTeachers from "./dashboardTeachers/DashboardTeachers";
import "./DashboardContent.css";
import { univisityList } from "../../../shared/sharedData";
import { Redirect } from "react-router-dom";

class DashboardContent extends React.Component {
  state = {
    uni: {},
    shouldRedirect: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.uniName !== prevState.uni) {
      return {
        uni: univisityList.find(
          el => el.path === nextProps.match.params.uniName
        )
      };
    }
    return null;
  }

  componentDidMount = () => {
    let uni = univisityList.find(
      el => el.path === this.props.match.params.uniName
    );
    if (uni) {
      this.setState({
        uni: uni
      });
    } else {
      this.setState({
        shouldRedirect: true
      });
    }
  };

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <React.Fragment>
        {this.state.uni ? (
          <div className="dashboard_content_container">
            <DashboardDescription uni={this.state.uni} />
            <DashboardCourse uni={this.state.uni} />
            <DashboardForum uni={this.state.uni} />
          </div>
        ) : (
          <Redirect to="/"></Redirect>
        )}
      </React.Fragment>
    );
  }
}

export default DashboardContent;
