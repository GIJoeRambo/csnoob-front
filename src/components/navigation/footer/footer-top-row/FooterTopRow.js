import React from "react";
import "./FooterTopRow.css";

const FooterTopRow = () => {
  return (
    <div className="row FooterTopRow cs_footer_top_lable_group">
      <a href="/" className='col-3 col-md-3 cs_footer_top_label'>OUR TEAM</a>
      <a href="/" className='col-3 col-md-3 cs_footer_top_label'>ABOUT</a>
      <a href="/" className='col-3 col-md-3 cs_footer_top_label'>CONTACT</a>
      <a href="/" className='col-3 col-md-3 cs_footer_top_label'>JOIN US</a>
      <div className='col-2'></div>
    </div>
  );
};

export default FooterTopRow;
