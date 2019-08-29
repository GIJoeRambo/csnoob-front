import React, { useState } from "react";
import { TextField, Button, Typography, Select } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import "./courseComment.css";
import service from "../../../service/http";

const CourseComment = props => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const [semester, setSemester] = useState(1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [grade, setGrade] = useState("Not Sure");
  const [name, setName] = useState("");

  const semesterList = [
    { id: 1, name: "Semester One" },
    { id: 2, name: "Semester Two" },
    { id: 3, name: "Summer School" }
  ];

  const gradeList = [
    { id: 0, name: "Not Sure" },
    { id: 1, name: "C-" },
    { id: 2, name: "C" },
    { id: 3, name: "C+" },
    { id: 4, name: "B-" },
    { id: 5, name: "B" },
    { id: 6, name: "B+" },
    { id: 7, name: "A-" },
    { id: 8, name: "A" },
    { id: 9, name: "A+" }
  ];

  const prepareData = () => {
    if (!comment || !rate || !semester || !year) {
      alert("Please fill all the fields");
      return false;
    }
    return true;
  };

  const submitData = () => {
    let data = {
      comment,
      rate,
      semester,
      year,
      grade,
      name: name || "Anonymous",
      courseId: props.course._id
    };
    console.log(data);
    service.postCourseRating(
      res => console.log(res),
      err => console.log(err),
      data
    );
  };

  return (
    <div className="course_comment_container mt-3">
      <div className="row align-items-center">
        <div className="d-inline-block ml-3 mt-3 col-2">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="courseRating"
            value={rate}
            onChange={(e, newValue) => setRate(newValue)}
          />
        </div>

        <TextField
          className="col-2 mr-3 ml-3 mt-3"
          label="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <Select
          className="col-3 mr-3 ml-3 mt-3"
          native
          autoWidth
          variant="filled"
          value={semester}
          onChange={e => {
            setSemester(e.target.value);
          }}
        >
          {semesterList.map(el => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </Select>
        <Select
          className="col-3 mr-3 ml-3 mt-3"
          native
          autoWidth
          value={grade}
          onChange={e => {
            setGrade(e.target.value);
          }}
        >
          {gradeList.map(el => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          ))}
        </Select>
      </div>

      <TextField
        label="Name(Optional)"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <TextField
        label="Comment"
        multiline
        rowsMax="10"
        value={comment}
        className="my-4 justify-center d-flex"
        onChange={e => {
          setComment(e.target.value);
        }}
        variant="outlined"
      />
      <div className="justify-center d-flex my-3">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (prepareData()) {
              submitData();
            }
          }}
        >
          submit
        </Button>
      </div>
    </div>
  );
};

export default CourseComment;
