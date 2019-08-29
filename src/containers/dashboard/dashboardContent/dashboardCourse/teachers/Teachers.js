import React, { Component } from 'react';
import TeachersList from './teachers_list/TeachersList';
import TeachersSearch from './teachers_search/TeachersSearch';
import service from '../../../../../service/http';
import './Teachers.css';

class Teachers extends Component {

    teachersList = [];

    state = {
        teachersList: [],
        hasTeacher: true
    };

    componentDidMount() {
        service.getTeachers(
            (res) => {
                this.teachersList = res.Data;
                this.setState({ teachersList: res.Data });
            },
            err => console.log(err)
        );
    }

    render() {
        return (
            <div className='row Teacher'>
                <div className='col-5'>
                    <TeachersSearch getSpecificTeacher={this.getSpecificTeacher}></TeachersSearch>
                    <TeachersList
                        teachersList={this.state.teachersList}
                        hasTeacher={this.state.hasTeacher}
                    ></TeachersList>
                </div>
                <div className='col-7'>
                    333
                </div>
            </div>
        )
    }

    getSpecificTeacher = (teacherName) => {
        if (teacherName.length === 0) {
            this.setState({ 
                teachersList: this.teachersList,
                hasTeacher: true 
            })
        }
        else {
            service.getSpecificTeacher(
                (res) => {
                    this.processSpecificTeacher(res.Data)
                },
                (err) => {

                },
                teacherName
            )
        }
    }

    processSpecificTeacher = (teachersList) => {
        if (teachersList.length === 0) {
            this.setState({
                hasTeacher: false,
                teachersList: []
            })
        }
        else {
            this.setState({
                teachersList: teachersList,
                hasTeacher: true
            })
        }
    }
}

export default Teachers;
