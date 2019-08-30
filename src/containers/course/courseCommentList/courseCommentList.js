import React from "react";
import { Card, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const CourseCommentList = props => {
  return (
    <div>
      {props.commentList.map(el => (
        <Card key={el._id} className="m-3">
          <div className="row mx-3">
            <Typography component="span" className="col-md-2 col-6 mt-3">
              {el.name}
            </Typography>
            <Typography component="span" className="col-md-2 col-6 mt-3">
              {"Grade: " + el.grade}
            </Typography>
            <Typography component="span" className="col-md-2 col-6 mt-3">
              {el.year + " Semester " + el.semester}
            </Typography>
            <Rating
              name="courseRating"
              value={el.rate}
              readOnly
              className="mt-1"
            />
          </div>
          <Typography className="m-3">{el.comment}</Typography>
        </Card>
      ))}
    </div>
  );
};

export default CourseCommentList;
