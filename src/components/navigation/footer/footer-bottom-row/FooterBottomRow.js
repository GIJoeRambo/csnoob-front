import React from "react";
import "./FooterBottomRow.css";

const FooterBottomRow = () => {
  return (
    <div className="FooterBottomRow">
      <div className="cs_footer_copyright">
        © {new Date().getFullYear()} CS Noob. All Rights Reserved.
      </div>
    </div>
  );
};

export default FooterBottomRow;
