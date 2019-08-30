import React, { Component } from 'react';
import TeachersDescription from './teachers_description/TeachersDescription';
import './TeachersSpecific.css'

class TeachersSpecific extends Component {


    render = () => {
        console.log(this.props)
        return (
            <div className='row TeachersSpecific'>
                <div className='col-12 cs_tsp_description'>
                    <TeachersDescription {...this.props}></TeachersDescription>
                </div>
                <div className='col-12 cs_tsp_comments'>
                    Let's listen others voice.
                    <div className='btn btn-outline-success cs_tsp_comment_btn'>comment</div>
                </div>
            </div>
        )
    }

    clickHandler = () => {
        console.log('click')
    }
}

export default TeachersSpecific;
