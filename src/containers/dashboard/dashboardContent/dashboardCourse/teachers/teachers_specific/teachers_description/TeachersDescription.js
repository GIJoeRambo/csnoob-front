import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TeachersModal from "../../teachers_modal/TeachersModal";
import "./TeachersDescription.css";

class TeachersDescription extends Component {
  state = {
    isLike: false
  };

  componentWillReceiveProps = () => {
    this.setState(() => {
      return { isLike: false };
    });
  };

  StyledRating = withStyles({
    iconFilled: {
      color: "#ff6d75"
    },
    iconHover: {
      color: "#ff3d47"
    }
  })(Rating);

  likeThisTeacher = () => {
    this.setState(
      () => {
        return { isLike: !this.state.isLike };
      },
      () => {
        console.log(this.state.isLike);
      }
    );
  };

  render() {
    return (
      <div className="row TeachersDescription">
        <div className="col-12 cs_td_teacher_title">
          <div className="row">
            <div className="col-4">
              {this.props.location.state.teacherTitle}
            </div>
            <div className="col-8 cs_td_teacher_icons">
              <Rating
                className="cs_td_teacher_rating"
                value={this.props.location.state.teacherRating}
                precision={0.5}
                readOnly
              />
              <this.StyledRating
                onMouseDown={this.likeThisTeacher}
                className="cs_td_teacher_like"
                name="customized-color"
                value={this.state.isLike ? 1 : 0}
                max={1}
                title="like"
                icon={<FavoriteIcon fontSize="inherit" />}
              />
              <TeachersModal {...this.props}></TeachersModal>
            </div>
          </div>
        </div>

        <div className="col-12 cs_td_teacher_name">
          {this.props.location.state.teacherName}
        </div>

        <div className="col-6">
          This area is reserved for teacher's description and courses.
        </div>
        <div className="col-1"></div>
      </div>
    );
  }
}

export default TeachersDescription;
