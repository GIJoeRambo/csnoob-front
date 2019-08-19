import React, { Fragment } from 'react';
import './HomeSearch.css';

const HomeSearch = () => {
    return (
        <Fragment>
            <div className='HomeSearch'>
                <div className='row'>
                    <span className='col-12 cs_hs_title'>you can search whichever course enrolled here</span>
                    <input className='cs_hs_input'></input>
                </div>
            </div>
        </Fragment>
    );
}

export default HomeSearch;
