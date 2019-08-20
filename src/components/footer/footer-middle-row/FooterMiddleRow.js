import React, { Fragment } from 'react';
import FooterIcon from './footer-icon/FooterIcon';
import './FooterMiddleRow.css';

const FooterMiddleRow = () => {
    const uniAbbrList = ['uoa', 'aut', 'messay', 'waikato', 'uc', 'victoria', 'otago', 'lincoln'];
    return (
        <div class='FooterMiddleRow'>
            <div className='row'>
                <div className='py-3 cs_footer_icon_group'>
                    <FooterIcon uniAbbrList={uniAbbrList}></FooterIcon>
                </div>
            </div>
            <div className='row'>
                <h4 className='col-12 cs_footer_slogan'>We're based in Auckland, New Zealand.</h4>
                <h5 className='col-12 cs_footer_slogan'>We work with students from universities of NZ. Get in touch with us.</h5>
            </div>
            <div className='row cs_footer_contact'>
                <div className='col-12'>
                    <span><span></span>info@xxxxxxxx.com</span>
                    <span><span></span>xxxxxxxxx</span>
                    <span><span></span>xxxxxxxxxxxxxxxxx</span>
                </div>
            </div>
        </div>
    );
}

export default FooterMiddleRow;