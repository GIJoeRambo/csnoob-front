import React, { Fragment } from 'react';
import HomeSearch from './home_search/HomeSearch';
import HomeTitle from './home_title/HomeTitle';
import HomeCarousel from './home_carousel/HomeCarousel';
import './Home.css';

const Home = () => {
    return (
        <Fragment>
            <div className='Home'>
                <div className='cs_home_bg_filter'>
                </div>
                <div className='cs_home_content'>
                    <HomeTitle></HomeTitle>
                    <HomeSearch></HomeSearch>
                    <HomeCarousel></HomeCarousel>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
