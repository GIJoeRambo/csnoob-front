import React, { useState } from "react";
import { TextField, Button, Card } from "@material-ui/core";
import "./courseComment.css";

const CourseComment = props => {
  const [comment, setComment] = useState("");
  return (
    <div className="course_comment_container mt-3">
      <TextField
        label="Multiline"
        multiline
        rowsMax="4"
        onChange={e => {
          setComment(e.target.value);
        }}
        margin="normal"
        variant="outlined"
      />
      <Button>click</Button>
    </div>
  );
};

export default CourseComment;
