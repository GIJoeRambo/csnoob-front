import React from "react";
import DashboardCourse from "./dashboardCourse/DashboardCourse";
import DashboardDescription from "./dashboardSummary/DashboardSummary";
import DashboardForum from "./dashboardForum/DashboardForum";
import "./DashboardContent.css";

const DashboardContent = props => {
  return (
    <div className="dashboard_content_container">
      <DashboardDescription {...props} />
      <DashboardCourse />
      <DashboardForum />
    </div>
  );
};

export default DashboardContent;
