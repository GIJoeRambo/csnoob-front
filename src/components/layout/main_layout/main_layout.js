import React, { Fragment } from "react";
import Header from "../../navigation/header/Header";
import Footer from "../../navigation/footer/Footer";
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
