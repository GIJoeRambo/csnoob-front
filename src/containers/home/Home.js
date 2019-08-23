import React, { Fragment } from "react";
import Jumbotron from "../../components/UI/jumbotron/Jumbotron";
import './Home.css'

const HomePage = () => {
  return (
    <Fragment>
      <div className='row HomePage'>
        <Jumbotron />
      </div>
    </Fragment>
  );
};

export default HomePage;
