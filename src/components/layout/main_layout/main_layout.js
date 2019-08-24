import React, { Fragment } from "react";
import Header from '../../navigation/header/Header';
import Footer from '../../navigation/footer/Footer';
import "./main_layout.css";

const MainLayout = props => {
  return (
    <Fragment>
      <Header></Header>
      <div className="MainLayout">
        {props.children}
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default MainLayout;
