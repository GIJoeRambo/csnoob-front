import React from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";

const Jumbotron = props => {
  return (
    <div className="col-12 Jumbotron">
      <h1 className="display-4 jumbotron_title">Welcome, Noobs!</h1>
      <p className="lead jumbotron_content">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p className="jumbotron_content">
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead jumbtron_btn">
        <Link className="btn btn-primary btn-lg" to="/dashboard">
          Get Start
        </Link>
      </p>
    </div>
  );
};

export default Jumbotron;
