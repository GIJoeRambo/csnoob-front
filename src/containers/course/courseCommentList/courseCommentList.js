import React from "react";
import { Card } from "@material-ui/core";

const CourseCommentList = props => {
  console.log(props);
  return (
    <div>
      {props.commentList.map(el => (
        <Card key={el._id} className="m-3">
          <p>{el.comment}</p>
        </Card>
      ))}
    </div>
  );
};

export default CourseCommentList;
