import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  InputBase
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TeachersList from "../../../teachers/teachersList/TeachersList";
import httpService from '../../../../service/http';
import './DashboardTeachers.css';

class DashboardTeachers extends Component {
  isTeachersListDisplayed = false;
  teachersList = [];
  state = {
    teachersListByRow: [],
    searchText: '',
  }

  componentDidMount = () => {
    httpService.getTeachers(
      (res) => {
        this.isTeachersListDisplayed = true;
        this.teachersList =  res.Data;
        this.setState(() => {
          return (
            {
              teachersListByRow: this.teachersList.slice(0,10),
              rowsPerPage: 10,
              count: res.Data.length,
              page: 0,
            }
          )
        });
      },
      (err) => {
        console.log(err)
      }
    )
  }

  render() {
    return (
      <Card className='DashboardTeachers'>
        <CardContent>
          <div className="d-flex justify-content-between">
            <Typography variant="h5" component="span" gutterBottom>
              Teachers List
            </Typography>
            <span>
              <InputBase
                placeholder="Search Teacher"
                value={this.state.searchText}
                onChange={e => this.handleChange(e)}
              />
              <IconButton >
                <SearchIcon />
              </IconButton>
            </span>
          </div>
          <Divider></Divider>
          {
            this.isTeachersListDisplayed ?
              (
                <TeachersList
                  teachersList={this.state.teachersListByRow}
                  rowsPerPage={this.state.rowsPerPage}
                  count={this.state.count}
                  page={this.state.page}
                  changePage={this.changePage}
                ></TeachersList>
              ) : null
          }
        </CardContent>
      </Card>
    );
  }

  handleChange = (event) => {
    const searchText = event.target.value;
    this.setState(() => {
      return (
        { searchText: searchText }
      )
    })
  }

  changePage = () => {
    console.log('aaa')
  }
}

export default DashboardTeachers;
