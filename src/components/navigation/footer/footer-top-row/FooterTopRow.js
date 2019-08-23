import React from "react";
import "./FooterTopRow.css";

const FooterTopRow = () => {
  return (
    <div className="col-12 FooterTopRow">
      <div className="row">
        <div className='col-2'></div>
        <div className='col-8 cs_footer_top_lable_group'>
          <div className='row'>
            <a href="/" className='col-md-3 col-sm-6 cs_footer_top_label'>OUR TEAM</a>
            <a href="/" className='col-md-3 col-sm-6 cs_footer_top_label'>ABOUT</a>
            <a href="/" className='col-md-3 col-sm-6 cs_footer_top_label'>CONTACT</a>
            <a href="/" className='col-md-3 col-sm-6 cs_footer_top_label'>JOIN US</a>
          </div>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
};

export default FooterTopRow;
