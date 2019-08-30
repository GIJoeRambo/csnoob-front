import React, { Component, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './TeachersDescription.css'

const TeachersDescription = (props) => {
    const [isLike, setLike] = useState(false);

    const StyledRating = withStyles({
        iconFilled: {
            color: '#ff6d75',
        },
        iconHover: {
            color: '#ff3d47',
        },
    })(Rating);

    let likeThisTeacher = () => {
        setLike(!isLike);
    }

    return (
        <div className='row TeachersDescription'>
            <div className='col-12 cs_td_teacher_title'>
                <div className='row'>
                    <div className='col-4'>
                        {props.location.state.teacherTitle}
                    </div>
                    <div className='col-8 cs_td_teacher_icons'>
                        <Rating
                            className='cs_td_teacher_rating'
                            value={props.location.state.teacherRating}
                            precision={0.5}
                            readOnly
                        />
                        <StyledRating
                            onClick={likeThisTeacher}
                            className='cs_td_teacher_like'
                            name="customized-color"
                            value={isLike?1:0}
                            max={1}
                            icon={<FavoriteIcon fontSize="inherit" />}
                        />
                    </div>
                </div>
            </div>

            <div className='col-12 cs_td_teacher_name'>
                {props.location.state.teacherName}
            </div>

            <div className='col-6'>
                This area is reserved for teacher's description and courses. 
            </div>
            <div className='col-1'>
            </div>
        </div>
    )
}

export default TeachersDescription;