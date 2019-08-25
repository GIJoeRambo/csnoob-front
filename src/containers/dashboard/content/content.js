import React from "react";

const Content = props => {
  return <h1>{props.location.state.school.name}</h1>;
};

export default Content;
