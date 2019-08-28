import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './TeachersList.css';

const TeachersList = (props) => {
    // console.log(props.TeachersList);
    return (
        <div className='row TeachersList'>
            {
                props.hasTeacher ?
                    props.teachersList.map(
                        (item) => {
                            return (
                                <div className='col-12 cs_teacher_item' key={item._id}>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='row'>
                                                <div className='col-12 cs_teacher_title'>{item.title}</div>
                                                <div className='col-12 cs_teacher_name'>{item.name}</div>
                                            </div>
                                        </div>
                                        <div className='col-6 cs_teacher_rating'>
                                            <div className='row'>
                                                <div className='col-3'></div>
                                                <Rating value={1.4} precision={0.5} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                    :
                    (
                        <div className='col-12 cs_teacher_notfound'>
                            Sorry, no such teacher founded.
                        </div>
                    )

            }
        </div>
    )
}

export default TeachersList;
