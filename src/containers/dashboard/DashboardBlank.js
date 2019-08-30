import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./DashboardBlank.css";

class DashboardBlank extends Component {
  render() {
    return (
      <div className="dashboard_blank_container">
        <Typography variant="h3">Please select a university</Typography>
      </div>
    );
  }
}

export default DashboardBlank;
