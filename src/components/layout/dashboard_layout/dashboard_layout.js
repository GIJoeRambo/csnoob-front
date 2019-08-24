import React from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./dashboard_layout.css";

const DashboardLayout = props => {
  return (
    <div className="row DashboardLayout">
      <Sidebar className="col-4" />
      <div className="pl-4">
          {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
