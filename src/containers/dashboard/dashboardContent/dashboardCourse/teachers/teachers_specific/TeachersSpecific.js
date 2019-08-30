import React, { Component } from 'react';
import TeachersDescription from './teachers_description/TeachersDescription';
import TeachersComments from './teachers_comments/TeachersComments';
import './TeachersSpecific.css'

class TeachersSpecific extends Component {
    render = () => {
        return (
            <div className='row TeachersSpecific'>
                <div className='col-12 cs_tsp_description'>
                    <TeachersDescription {...this.props}></TeachersDescription>
                </div>
                <div className='col-12 cs_tsp_comments'>
                    <TeachersComments 
                        {...this.props}
                    ></TeachersComments>
                </div>
            </div>
        )
    }

    clickHandler = () => {
        console.log('click')
    }
}

export default TeachersSpecific;
