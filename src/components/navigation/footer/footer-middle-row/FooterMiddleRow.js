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
    <div className="FooterMiddleRow">
      <div className="row">
        <div className="py-3 cs_footer_icon_group">
          <FooterIcon uniAbbrList={uniAbbrList} />
        </div>
      </div>
      <div className="row">
        {/* <h5 className='col-12 cs_footer_slogan'>We're based in Auckland, New Zealand.</h5> */}
        {/* <h6 className="col-12 cs_footer_slogan">
          We work with students from universities of NZ. Get in touch with us.
        </h6> */}
      </div>
      <div className="row cs_footer_contact">
        <div className="col-12">
          <span>
            <span />
            info@xxxxxxxx.com
          </span>
          <span>
            <span />
            xxxxxxxxx
          </span>
          <span>
            <span />
            xxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddleRow;
