import React from "react";

const Content = props => {
  return <h1>{props.location.state.university.name}</h1>;
};

export default Content;
