import React, { Fragment } from 'react';
import Tellurion from '../../components/UI/background/tellurion/tellurion';
import Jumbotron from '../../components/UI/jumbotron/Jumbotron';
const HomePage = () => {
    return (
        <Fragment>
            <Tellurion>
                <div className='container'>
                    <Jumbotron></Jumbotron>
                </div>
            </Tellurion>
        </Fragment>
    )
}

export default HomePage
