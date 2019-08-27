import React, { Component } from 'react';
import service from '../../../../../service/http';
import './Teachers.css';

class Teachers extends Component {

    state = {};

    componentDidMount() {
        service.getTeachers(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        )
    }

    render() {
        return (
            <div className='row'>
                <div className='col-3'>
                    111
                </div>
                <div className='col-9'>
                    333
                </div>
            </div>
        )
    }
}

export default Teachers;
