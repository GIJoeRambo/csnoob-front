import React, { Fragment } from 'react';
import './Header.css';

const Header = () => {
  return (
      <Fragment>
        <div className='cs_header'>
            <span onClick={()=>window.location.href="/"} className='cs_header_title'>cs noob</span>
        </div>
      </Fragment>
  );
}

export default Header;
