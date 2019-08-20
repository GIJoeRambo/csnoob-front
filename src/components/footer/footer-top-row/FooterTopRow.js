import React, { Fragment } from 'react';
import './FooterTopRow.css';

const FooterTopRow = () => {
    return (
        <div className='row'>
            <div className='col-12 py-2 cs_footer_top'>
                <span className='cs_footer_top_label'><a>OUR TEAM</a></span>
                <span className='cs_footer_top_label'><a>ABOUT</a></span>
                <span className='cs_footer_top_label'><a>CONTACT</a></span>
                <span className='cs_footer_top_label'><a>JOIN US</a></span>
            </div>
        </div>
    );
}

export default FooterTopRow;
