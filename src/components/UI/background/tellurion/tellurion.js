import React from "react";
import "./tellurion.css";
const Tellurion = props => {
  return (
    <div className="Tellurion">
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Tellurion;
