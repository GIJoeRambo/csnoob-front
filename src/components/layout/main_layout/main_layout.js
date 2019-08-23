import React, { Fragment } from "react";
import "./main_layout.css";

const MainLayout = props => {
  return (
    <Fragment>
      <div className="MainLayout">
        {props.children}
      </div>
    </Fragment>
  );
};

export default MainLayout;
