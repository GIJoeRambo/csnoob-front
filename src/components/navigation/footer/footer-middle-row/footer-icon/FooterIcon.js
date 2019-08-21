import React, { Fragment } from "react";
import "./FooterIcon.css";

const FooterIcon = props => {
  return (
    <Fragment>
      {props.uniAbbrList.map((item, index) => {
        return (
          <div key={item.uniId} className="cs_footer_icon">
            <a href={item.uniHref} target="_blank" rel="noopener noreferrer">
              <img
                alt="circle"
                src={require("../../../../../assets/images/uni_icons/" +
                  item.uniName)}
                title={item.uniName}
              />
            </a>
          </div>
        );
      })}
    </Fragment>
  );
};

export default FooterIcon;
