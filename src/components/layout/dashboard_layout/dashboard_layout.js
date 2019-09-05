import React from "react";
import "./dashboard_layout.css";

const DashboardLayout = props => {
  return (
    <div className="row DashboardLayout">
      <div className="px-3 col-md col-12">{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
