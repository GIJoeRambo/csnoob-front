import React, { useState } from "react";
import { TablePagination, Paper, makeStyles, withStyles } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { withRouter } from "react-router-dom";
import './TeachersList.css';


const TeachersList = (props) => {

    const [likeWhichTeacher, setLikeWitchTeacher] = useState({});

    //全是material-ui的东西
    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(3, 2),
        },
    }));

    const StyledRating = withStyles({
        iconFilled: {
            color: '#ff6d75',
        },
        iconHover: {
            color: '#ff3d47',
        },
    })(Rating);

    const classes = useStyles();
    //////////////////////////////////////////////////////////////////////////////////////

    const likeATeacher = (teacherId) => {
        let obj = {...likeWhichTeacher}
        console.log(obj)
        if(obj[teacherId] === true){
            delete obj[teacherId];
        }
        else{
            obj[teacherId] = true;
        }
        setLikeWitchTeacher(obj);
    }

    const openTeacherModal = (teacherName, teacherId) => {
        console.log(props)
        let { history, match } = props;
        let path = {
            pathname:
                "/teacher/" +
                match.params.uniName +
                "/" +
                teacherName,
            search: '?id=' + teacherId + "&page=1"
        };
        history.push(path);
    }

    //return
    return (
        <div className='row TeachersList'>
            <div className='col-12 cs_tl_teachers_lists'>
                {
                    props.teachersList.map(
                        (item) => {
                            return (
                                <div className='cs_tl_teachers_lists_item' key={item._id}
                                    onClick={() => {
                                        openTeacherModal(item.name, item._id)
                                    }
                                    }>
                                    <Paper className={classes.root}>
                                        <div className='col-sm-12 cs_tl_teachers_title cs_tl_teachers_hover'>
                                            {item.title}
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6 col-sm-12 cs_tl_teachers_name cs_tl_teachers_hover'>
                                                {item.name}
                                            </div>

                                            <div className='col-md-3 col-sm-12'>
                                                <Rating value={item.rate} readOnly />
                                            </div>
                                            <div className='col-md-2 col-sm-12'>
                                                <div className='row'>
                                                    <div className='col-4'>
                                                        <StyledRating
                                                            onMouseDown={()=>{likeATeacher(item._id)}}
                                                            value={likeWhichTeacher[item._id]?1:0}
                                                            precision={1}
                                                            max={1}
                                                            icon={<FavoriteIcon fontSize="inherit" />}
                                                        />
                                                    </div>
                                                    <div className='col-6'>
                                                        XXXXX&nbsp;&nbsp;
                                                        <span className='cs_tl_teachers_like'>Like</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Paper>
                                </div>
                            )
                        }
                    )
                }
            </div>

            <div className="col-12">
                <TablePagination
                    className="cs_tl_pagination"
                    rowsPerPageOptions={[]}
                    component="div"
                    count={props.count}
                    rowsPerPage={props.rowsPerPage}
                    page={props.page}
                    onChangePage={(e, newIndex) =>
                        props.changePage(newIndex)
                    }
                />
            </div>
        </div>
    )


}

export default withRouter(TeachersList);