import React, { Component } from 'react';
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
import service from "../../../service/http";
import { ColorButton } from "../../../shared/styledComponent/styledComponent";
import Swal from "sweetalert2";
import './TeachersComment.css'

class TeacherComment extends Component {

  state = {
    semester: '',
    year: 2019,
  }

  semesterList = [
    { id: 0, name: "Semester One" },
    { id: 1, name: "Semester Two" },
    { id: 2, name: "Summer School" }
  ];


  changeSemester = (event) => {
    this.setState(
      () => {
        return (
          { semester: event.target.value }
        )
      }
    )
  }

  render = () => {
    return (
      <Card>
        <div className="row align-items-center align-center TeacherComment">
          <Typography component="legend" className="col-md-1 mt-2">Rating</Typography>
          <Rating
            className='col-md-2 mt-2'
            name="courseRating"
            value={1}
          // onChange={(e, newValue) => setRate(newValue)}
          />

          <div className='col-md-2 mt-3'>
            <TextField
              className="row"
              label="Year"
              variant="outlined"
              value={this.state.year}
            // onChange={e => setYear(e.target.value)}
            />
          </div>

          <div className='col-md-2 mt-3'>
            <FormControl variant="outlined" className="col-12">
              <InputLabel htmlFor="comment-semester">Semester</InputLabel>
              <Select
                name="semester"
                value={this.state.semester}
                input={
                  <OutlinedInput
                    labelWidth={70}
                    name="semester"
                    id="comment-semester"
                  />
                }
                onChange={e => { this.changeSemester(e) }}
              >
                {this.semesterList.map(el => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className='col-md-5 mt-3'>
            <TextField
              label="Name(Optional)"
              value={1}
              variant="outlined"
              className="col-md-12"
            // onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className='row mt-3 align-items-center align-center cs_tc_comment'>
          <div className="col-md-12">
            <TextField
              variant="outlined"
              label="Comment"
              multiline
              rows='5'
              value={''}
              className="col-md-12"
            // onChange={e => {
            //   setComment(e.target.value);
            // }}
            />
          </div>
        </div>

        <div className="justify-center d-flex mb-3 mt-5">
          <ColorButton
            variant="contained"
          // onClick={() => {
          //   if (prepareData()) {
          //     submitData();
          //   }
          // }}
          >
            submit
        </ColorButton>
        </div>
        {/* <CommentConfirmDialog dialog={dialog} setDialog={setDialog} /> */}
      </Card>
    )
  }
}

export default TeacherComment;