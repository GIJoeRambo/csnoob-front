import React from "react";
import FooterIcon from "./footer-icon/FooterIcon";
import "./FooterMiddleRow.css";

const FooterMiddleRow = () => {
  const uniAbbrList = [
    { uniId: 0, uniName: "uoa", uniHref: "https://www.auckland.ac.nz/" },
    { uniId: 1, uniName: "aut", uniHref: "https://www.aut.ac.nz/" },
    { uniId: 2, uniName: "massey", uniHref: "http://www.massey.ac.nz/" },
    { uniId: 3, uniName: "waikato", uniHref: "https://www.waikato.ac.nz/" },
    { uniId: 4, uniName: "uc", uniHref: "https://www.canterbury.ac.nz/" },
    { uniId: 5, uniName: "victoria", uniHref: "https://www.victoria.ac.nz/" },
    { uniId: 6, uniName: "otago", uniHref: "https://www.otago.ac.nz/" },
    { uniId: 7, uniName: "lincoln", uniHref: "http://www.lincoln.ac.nz/" }
  ];
  return (
    <div className="row FooterMiddleRow">
      <div className='col-12'>
        <FooterIcon uniAbbrList={uniAbbrList} />
      </div>
      <div className="col-12 cs_footer_contact_group">
        <div className='row'>
          <div className='col-3'></div>
          <div className="col-6">
            <div className='row'>
              <span className='col-md-4 col-sm-12 cs_footer_contact'>oliverdeng1005@gmail.com</span>
              <span className='col-md-4 col-sm-12 cs_footer_contact'>02108736339</span>
              <span className='col-md-4 col-sm-12 cs_footer_contact'>Oliver Deng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddleRow;
