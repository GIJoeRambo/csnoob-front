import React from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./dashboard_layout.css";

const DashboardLayout = props => {
  return (
    <div className="row cs_dashboard_panel">
      <Sidebar className="col-4" />
      {props.children}
    </div>
  );
};

export default DashboardLayout;