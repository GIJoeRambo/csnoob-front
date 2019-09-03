import React, { Component } from "react";
import {
  Typography,
  Divider,
  Tab,
  Tabs,
  TablePagination
} from "@material-ui/core";
import { ColorButton } from "../../shared/styledComponent/styledComponent";
import { withRouter, Redirect } from "react-router-dom";
import TeachersComment from './teachersComment/TeachersComment'
import "./Teachers.css";

class Teachers extends Component {

  teacherId =
    this.props.location.search &&
    this.props.location.search
      .split("?")[1]
      .split("&")[0]
      .split("=")[1];

  rowsPerPage = 10;

  handleReturnClick = () => {
    this.props.history.push("/dashboard/" + this.props.match.params.uniName);
  };

  render = () => {
    console.log(this.teacherId)
    return (
      <div className="m-3">
        <div className="mb-3">
          <Typography variant="h4" className="d-flex justify-content-between">
            {this.props.match.params.teacherName}
            <ColorButton
              variant="outlined"
              onClick={() => this.handleReturnClick()}
            >
              Return
            </ColorButton>
          </Typography>
        </div>
        <Divider className="mb-3"></Divider>
        <TeachersComment
           
          />
        <div className="course_comment_panel">
          <div>wafds</div>
          <div className="d-flex justify-content-center">
            {/* <TablePagination

            /> */}
          </div>
        </div>
      </div>
    );
  }

};

export default withRouter(Teachers);
