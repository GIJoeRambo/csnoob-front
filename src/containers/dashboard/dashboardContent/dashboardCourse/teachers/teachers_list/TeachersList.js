import React from "react";
import { NavLink } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import "./TeachersList.css";

const TeachersList = props => {
  // console.log(props.TeachersList);
  // console.log(props)
  return (
    <div className="row TeachersList">
      {props.hasTeacher ? (
        props.teachersList.map(item => {
          let path = {
            pathname: props.match.path + "/" + item._id,
            state: {
              teacherId: item._id,
              teacherName: item.name,
              teacherTitle: item.title,
              teacherRating: item.rate
            }
          };
          return (
            <NavLink
              className="col-12 cs_teacher_item"
              key={item._id}
              to={path}
            >
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-12 cs_teacher_title">{item.title}</div>
                    <div className="col-12 cs_teacher_name">{item.name}</div>
                  </div>
                </div>
                <div className="col-6 cs_teacher_rating">
                  <div className="row">
                    <div className="col-3"></div>
                    <Rating value={item.rate} precision={0.5} readOnly />
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })
      ) : (
        <div className="col-12 cs_teacher_notfound">
          Sorry, no such teacher founded.
        </div>
      )}
    </div>
  );
};

export default TeachersList;
