import React, { useEffect } from "react";
import DashboardCourse from "./dashboardCourse/DashboardCourse";
import DashboardDescription from "./dashboardSummary/DashboardSummary";
import DashboardForum from "./dashboardForum/DashboardForum";
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
        <DashboardForum uni={this.state.uni} />
      </div>
    );
  }
}

export default DashboardContent;
