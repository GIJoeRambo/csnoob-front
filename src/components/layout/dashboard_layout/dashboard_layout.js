import React from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";

const DashboardLayout = props => {
  return (
    <div>
      <div className="row">
        <Sidebar className="col-4" />
        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
