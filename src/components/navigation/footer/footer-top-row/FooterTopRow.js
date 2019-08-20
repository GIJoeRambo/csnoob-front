import React from 'react';
import './FooterTopRow.css';

const FooterTopRow = () => {
    return (
        <div className='row'>
            <div className='col-12 py-2 cs_footer_top'>
                <span className='cs_footer_top_label'><a href="/">OUR TEAM</a></span>
                <span className='cs_footer_top_label'><a href="/">ABOUT</a></span>
                <span className='cs_footer_top_label'><a href="/">CONTACT</a></span>
                <span className='cs_footer_top_label'><a href="/">JOIN US</a></span>
            </div>
        </div>
    );
}

export default FooterTopRow;
