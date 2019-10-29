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
import CommentConfirmDialog from "../../course/courseComment/CommentConfirmDialog";
import Swal from "sweetalert2";
import './TeachersComment.css'

class TeacherComment extends Component {
  currentYear = new Date().getFullYear();

  state = {
    semester: '',
    year: 2019,
    name: '',
    rate: 0,
    comment: '',
    isInputValid: true,
    isSubmitSuccess: false
  }

  semesterList = [
    { id: 1, name: "Semester One" },
    { id: 2, name: "Semester Two" },
    { id: 3, name: "Summer School" }
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
    // eslint-disable-next-line
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
    if (isNaN(Number(value)) ||
      !(Number(value) >= 2000 && Number(value) <= this.currentYear)) {
      this.setState(
        () => {
          return { isInputValid: false }
        }
      )
    }
    else {
      this.setState(
        () => {
          return { isInputValid: true }
        }
      )
    }
  }

  clearData = () => {
    this.setState(
      () => {
        return ({
          semester: '',
          year: 2019,
          name: '',
          rate: 0,
          comment: '',
          isSubmitSuccess: true
        })
      }
    )
  }

  setDialog = (e) => {
    this.setState(
      () => {
        return (
          { isSubmitSuccess: e }
        )
      }
    )
  }

  prepareData = () => {
    if (!this.state.comment || !this.state.rate || !this.state.semester || !this.state.year) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Please fill all the fields"
      });
      return;
    }
    else {
      this.submitToServer();
    }
  };

  submitToServer = () => {
    // console.log(this.props)
    let data = {
      comment: this.state.comment,
      rate: this.state.rate,
      semester: this.state.semester,
      year: this.state.year,
      name: this.state.name || "Anonymous",
      teacherId: this.props.teacherId
    };
    service.postTeacherRating(
      res => {
        this.clearData();
        this.props.refreshPage();
      },
      err => console.log(err),
      data
    );
  }

  render = () => {
    return (
      <Card>
        <div className='row'>
          <div className='col-md-3'></div>
          {
            this.state.isInputValid ?
              null
              :
              (<div className='col-md-2 cs_tc_error_message'>
                Year is not valid.
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
              className="col-12"
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

        <div className="justify-center d-flex mb-3 mt-3">
          <ColorButton
            variant="contained"
            onClick={() => { this.prepareData() }}
          >
            submit
        </ColorButton>
        </div>
        <CommentConfirmDialog dialog={this.state.isSubmitSuccess} setDialog={(e)=>{this.setDialog(e)}} />
      </Card>
    )
  }
}
export default TeacherComment;