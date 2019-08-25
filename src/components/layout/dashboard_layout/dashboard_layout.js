import React from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./dashboard_layout.css";

const DashboardLayout = props => {
  return (
    <div className="row DashboardLayout">
      <Sidebar className="col-md-4 col-12" />
      <div className="pl-4 col-md-8 col-12">{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
