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
  isInputValid = true;
  currentYear = new Date().getFullYear();

  state = {
    semester: '',
    year: 2019,
    name: '',
    rate: 0,
    comment: ''
  }

  semesterList = [
    { id: 0, name: "Semester One" },
    { id: 1, name: "Semester Two" },
    { id: 2, name: "Summer School" }
  ];

  changeSemester = (event) => {
    this.setState(() => {
      return (
        { semester: event.target.value }
      )
    }
    )
  }

  changeYear = (event) => {
    const year = event.target.value;
    this.setState(
      () => {
        return { year: year }

      }
    )
  }

  changeName = (event) => {
    const name = event.target.value
    this.setState({ name: event.target.value })
  }

  changeRate = (event, newValue) => {
    this.setState(
      () => {
        return { rate: newValue }
      }
    )
  }

  changeComment = (event) => {
    const comment = event.target.value;
    this.setState(
      () => {
        return { comment: comment }
      }
    )
  }

  checkInputValid = (e) => {
    const value = this.state.year;
    console.log(Number(value))
    if (Number(value)) {
      this.isInputValid = false;
    }
    else {
      this.isInputValid = true;
    }
  }

  render = () => {
    return (
      <Card>
        <div className='row'>
          <div className='col-md-3'></div>
          {
            this.isInputValid ?
              null
              :
              (<div className='col-md-2 cs_tc_error_message'>
                Year must be a number
        </div>)
          }
        </div>

        <div className="row align-items-center align-center TeacherComment">
          <Typography component="legend" className="col-md-1 mt2">Rating</Typography>
          <Rating
            className='col-md-2 mt-2'
            name="courseRating"
            value={this.state.rate}
            onChange={(e, newValue) => this.changeRate(e, newValue)}
          />

          <div className='col-md-2 mt-3'>
            <TextField
              className="row"
              label="Year"
              variant="outlined"
              value={this.state.year}
              onChange={e => this.changeYear(e)}
              onBlur={e => this.checkInputValid()}
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
                onChange={e => this.changeSemester(e)}
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
              value={this.state.name}
              variant="outlined"
              className="col-md-12"
              onChange={e => this.changeName(e)}
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
              value={this.state.comment}
              className="col-md-12"
              onChange={e => { this.changeComment(e) }}
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