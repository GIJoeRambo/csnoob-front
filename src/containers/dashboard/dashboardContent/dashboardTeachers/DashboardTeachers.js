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
  isReSearch = true;
  teachersList = [];

  state = {
    teachersListByRow: [],
    searchText: '',
    rowsPerPage: 10,
    count: 0,
    page: 0
  }

  componentDidMount = () => {
    const uniNum = this.props.uni.id;
    this.getTeachersListFromServer(uniNum);
  }

  getTeachersListFromServer = (uniNum) => {
    if (sessionStorage.getItem('teachersList')) {
      this.isTeachersListDisplayed = true;
      this.teachersList = JSON.parse(sessionStorage.getItem('teachersList'));
      this.setState(
          {
            teachersListByRow:this.teachersList.slice(0, 10),
            count: this.teachersList.length,
            page: 0,
          })
    }
    else {
      httpService.getTeachersBySchoolNum(
        (res) => {
          // console.log(res)
          this.isTeachersListDisplayed = true;
          this.teachersList = res.Data;
          sessionStorage.setItem('teachersList', JSON.stringify(this.teachersList));
          this.setState(() => {
            return (
              {
                teachersListByRow: this.teachersList.slice(0, 10),
                count: res.Data.length,
                page: 0,
              }
            )
          });
        },
        (err) => {
          console.log(err)
        },
        uniNum
      )
    }
  }

  render() {
    return (
      <Card className='DashboardTeachers'>
        <CardContent className='cs_dt_content'>
          <div className="d-flex justify-content-between">
            <Typography variant="h5" component="span" gutterBottom>
              Teachers List
            </Typography>
            <span>
              <InputBase
                placeholder="Search Teacher by name"
                value={this.state.searchText}
                onChange={e => this.handleChange(e)}
              />
              <IconButton onClick={this.searchTeacher}>
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
    if (this.state.searchText === searchText) {
      this.isReSearch = false;
      return;
    }
    this.setState(() => {
      return (
        { searchText: searchText }
      )
    })
  }

  searchTeacher = () => {
    if (!this.isReSearch) {
      return
    }
    const searchText = this.state.searchText;
    httpService.getSpecificTeacher(
      (res) => {
        this.teachersListAfterSearch = res.Data;
        this.setState(() => {
          return (
            {
              teachersListByRow: res.Data.slice(0, this.state.rowsPerPage),
              count: res.Data.length
            }
          )
        })
      },
      (err) => {

      },
      searchText
    )
  }

  changePage = (nextPage) => {
    const startIndex = this.state.rowsPerPage * nextPage;
    const endInde = startIndex + this.state.rowsPerPage;
    this.setState(() => {
      return (
        {
          page: nextPage,
          teachersListByRow: this.teachersList.slice(startIndex, endInde)
        }
      )
    })
  }
}

export default DashboardTeachers;
