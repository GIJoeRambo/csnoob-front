import React from "react";
import "./Jumbotron.css";
import { withRouter } from "react-router-dom";
import { ColorButton } from "../../../shared/styledComponent/styledComponent";
import { Typography } from "@material-ui/core";

const Jumbotron = props => {
  return (
    <div className="col-12 Jumbotron text-center">
      <p className="jumbotron_title">Welcome, Noobs!</p>
      <Typography className="mt-3 jumbotron_content">
        <h4>Hello guys and welcome !!!</h4>
        <br/>
        CS Noob is a great zone for cs students 
        currently in eight unis in New Zealand ( we implement UoA first, others are coming soon ) and cs big fans.
        You can ask questions, search the courses and rate them and can meet talented friends like you!
        <br/>
        Click the button below and start your journey now.
      </Typography>
      <ColorButton
        className="mt-3"
        size="large"
        onClick={() => props.history.push("/dashboard/uoa")}
      >
        <Typography>Get Start</Typography>
      </ColorButton>
    </div>
  );
};

export default withRouter(Jumbotron);
