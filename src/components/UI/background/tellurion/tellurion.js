import React from 'react'
import './tellurion.css'
const Tellurion = (props) =>{
    return (
        <div className='tellurion'>
            <div className='tellurion_bg'>
                {props.children}
            </div>
        </div>
    )
};

export default Tellurion
