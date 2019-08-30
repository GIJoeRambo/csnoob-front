import React, { Component } from 'react';
import TeachersList from './teachers_list/TeachersList';
import TeachersSearch from './teachers_search/TeachersSearch';
import TeachersSpecific from './teachers_specific/TeachersSpecific';
import service from '../../../../../service/http';
import { Switch, Route } from "react-router-dom";
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
                //console.log(res.Data)
                this.teachersList = res.Data;
                this.setState({ teachersList: res.Data });
            },
            (err) => {
                // console.log(err)
                this.setState({ hasTeacher: false })
            }
        );
    }

    render() {
        return (
            <div className='row Teacher'>
                <div className='col-md-5 col-sm-12'>
                    <TeachersSearch getSpecificTeacher={this.getSpecificTeacher}></TeachersSearch>
                    <TeachersList
                        {...this.props}
                        teachersList={this.state.teachersList}
                        hasTeacher={this.state.hasTeacher}
                    ></TeachersList>
                </div>

                <div className='col-md-7 col-sm-12'>
                    <Switch>
                        <Route
                            path={this.props.match.path + "/:teacherId"}
                            component={TeachersSpecific}
                        />
                    </Switch>
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
