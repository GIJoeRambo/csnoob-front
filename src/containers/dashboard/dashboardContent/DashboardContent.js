import React from "react";
import DashboardCourse from "./dashboardCourse/DashboardCourse";
import DashboardDescription from "./dashboardSummary/DashboardSummary";
import DashboardTeachers from "./dashboardTeachers/DashboardTeachers";
import "./DashboardContent.css";
import { univisityList } from "../../../shared/sharedData";

class DashboardContent extends React.Component {
  state = {
    uni: univisityList.find(el => el.path === this.props.match.params.uniName)
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

  render() {
    return (
      <div className="dashboard_content_container">
        <DashboardDescription {...this.props} uni={this.state.uni} />
        <DashboardCourse uni={this.state.uni} />
        <DashboardTeachers uni={this.state.uni} />
      </div>
    );
  }
}

export default DashboardContent;
