import React from "react";
import FooterTopRow from "./footer-top-row/FooterTopRow";
import FooterMiddleRow from "./footer-middle-row/FooterMiddleRow";
import FooterBottomRow from "./footer-bottom-row/FooterBottomRow";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <FooterTopRow />
      <FooterMiddleRow />
      <FooterBottomRow />
    </div>
  );
};

export default Footer;
