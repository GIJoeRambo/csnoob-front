import React from "react";
import "./Jumbotron.css";
import { withRouter } from "react-router-dom";
import { ColorButton } from "../../../shared/styledComponent/styledComponent";
import { Typography } from "@material-ui/core";

const Jumbotron = props => {
  console.log(props);
  return (
    <div className="col-12 Jumbotron text-center">
      <p className="jumbotron_title">Welcome, Noobs!</p>
      <Typography className="mt-3 jumbotron_content">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information. It uses
        utility classes for typography and spacing to space content out within
        the larger container.
      </Typography>
      <ColorButton
        className="mt-3"
        size="large"
        onClick={() => props.history.push("/dashboard")}
      >
        <Typography>Get Start</Typography>
      </ColorButton>
    </div>
  );
};

export default withRouter(Jumbotron);
