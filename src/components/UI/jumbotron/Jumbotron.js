import React from 'react'
import './Jumbotron.css'

const Jumbotron = (props) => {
    return (
        <div className='jumbotron'>
            <h1 class="display-4 jumbotron_title">Welcome, Noobs!</h1>
            <p class="lead jumbotron_content">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p className='jumbotron_content'>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead jumbtron_btn">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Get Start</a>
                </p>
            
        </div>
    )
};

export default Jumbotron;
