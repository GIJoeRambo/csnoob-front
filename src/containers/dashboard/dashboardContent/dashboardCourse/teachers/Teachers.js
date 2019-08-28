import React, { Component } from 'react';
import TeachersList from './teachers_list/TeachersList';
import service from '../../../../../service/http';
import './Teachers.css';

class Teachers extends Component {
    state = {
        teachersList: []
    };

    componentDidMount() {
        service.getTeachers(
            (res) => {
                console.log(res.Data);
                this.setState({ teachersList: res.Data })
            },
            err => console.log(err)
        );
    }

    render() {
        return (
            <div className='row Teacher'>
                <div className='col-5'>
                    <TeachersList teachersList={this.state.teachersList}></TeachersList>
                </div>
                <div className='col-7'>
                    333
                </div>
            </div>
        )
    }
}

export default Teachers;
