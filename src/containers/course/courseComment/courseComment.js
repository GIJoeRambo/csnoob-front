import React, { useState } from "react";
import {
  TextField,
  Typography,
  Select,
  Card,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import CommentConfirmDialog from "./CommentConfirmDialog";
import service from "../../../service/http";
import { ColorButton } from "../../../shared/styledComponent/styledComponent";
import Swal from "sweetalert2";

const CourseComment = props => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const [semester, setSemester] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());
  const [grade, setGrade] = useState("N/A");
  const [name, setName] = useState("");
  const [dialog, setDialog] = useState(false);

  const semesterList = [
    { id: 0, name: "" },
    { id: 1, name: "Semester One" },
    { id: 2, name: "Semester Two" },
    { id: 3, name: "Summer School" }
  ];

  const gradeList = [
    { id: 0, name: "N/A" },
    { id: 1, name: "C-" },
    { id: 2, name: "C" },
    { id: 3, name: "C+" },
    { id: 4, name: "B-" },
    { id: 5, name: "B" },
    { id: 6, name: "B+" },
    { id: 7, name: "A-" },
    { id: 8, name: "A" },
    { id: 9, name: "A+" },
    { id: 10, name: "D-" },
    { id: 11, name: "D" },
    { id: 12, name: "D+" }
  ];

  const prepareData = () => {
    if (!comment || !rate || !semester || !year) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Please fill all the fields"
      });
      return false;
    }
    return true;
  };

  const clearData = () => {
    setComment("");
    setGrade("N/A");
    setRate(0);
    setSemester(0);
    setYear(new Date().getFullYear());
    setName("");
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
    // console.log(data);
    service.postCourseRating(
      res => {
        setDialog(true);
        props.refreshcommentList();
        clearData();
      },
      err => console.log(err),
      data
    );
  };

  return (
    <Card className="mx-3">
      <div className="row align-items-center">
        <div className="d-inline-block ml-2 mt-3 col-md-2">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="courseRating"
            value={rate}
            onChange={(e, newValue) => setRate(newValue)}
          />
        </div>
        <TextField
          className="col-md-2 mr-3 ml-3 mt-3"
          label="Year"
          variant="outlined"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <FormControl variant="outlined" className="col-md-3 mr-3 ml-3 mt-3">
          <InputLabel htmlFor="comment-semester">Semester</InputLabel>
          <Select
            name="semester"
            value={semester}
            input={
              <OutlinedInput
                labelWidth={70}
                name="semester"
                id="comment-semester"
              />
            }
            onChange={e => {
              setSemester(e.target.value);
            }}
          >
            {semesterList.map(el => (
              <MenuItem key={el.id} value={el.id}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="col-md-3 mr-3 ml-3 mt-3">
          <InputLabel htmlFor="comment-grade">Grade(optional)</InputLabel>
          <Select
            name="grade"
            value={grade}
            input={
              <OutlinedInput labelWidth={120} name="grade" id="comment-grade" />
            }
            onChange={e => {
              setGrade(e.target.value);
            }}
          >
            {gradeList.map(el => (
              <MenuItem key={el.id} value={el.name}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TextField
        label="Name(Optional)"
        value={name}
        variant="outlined"
        className="m-3"
        onChange={e => setName(e.target.value)}
      />

      <TextField
        variant="outlined"
        label="Comment"
        multiline
        rowsMax="100"
        value={comment}
        className="m-3 justify-center d-flex"
        onChange={e => {
          setComment(e.target.value);
        }}
      />
      <div className="justify-center d-flex mb-3 mt-5">
        <ColorButton
          variant="contained"
          onClick={() => {
            if (prepareData()) {
              submitData();
            }
          }}
        >
          submit
        </ColorButton>
      </div>
      <CommentConfirmDialog dialog={dialog} setDialog={setDialog} />
    </Card>
  );
};

export default CourseComment;
