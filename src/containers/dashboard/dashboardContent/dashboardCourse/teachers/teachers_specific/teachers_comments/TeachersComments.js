import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import service from '../../../../../../../service/http';
import './TeachersComments.css'

class TeachersComments extends Component {
    commentsList = [];

    state = {
        currentPage: 1,
        commentsList: [],
        teacherId: null
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const teacherId = nextProps.location.state.teacherId;
        service.getTeacherRating(
            res => {
                this.setState(() => {
                        return (
                            {
                                commentsList: res.Data.details,
                                teacherId: teacherId
                            }
                        )
                    },
                    () => {
                        console.log(this.state.commentsList)
                        this.commentsList = res.Data.details
                    }
                )
            },
            err => {
                console.log(err);
            },
            teacherId, this.state.currentPage
        )
    }

    shouldComponentUpdate = (nextProps) => {
        const teacherId = nextProps.location.state.teacherId;
        if (teacherId !== this.props.location.state.teacherId) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (
            <div className='col-12 TeachersComments' >
                <ExpansionPanel className='col-12'>
                    <ExpansionPanelSummary className='col-12'>
                        <div className='col-4'>ss</div>
                        <div className='col-8'>
                            <Rating
                                className='cs_td_teacher_rating'
                                // value={props.location.state.teacherRating}
                                precision={0.5}
                                readOnly
                            />
                        </div>

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>

                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default TeachersComments;
