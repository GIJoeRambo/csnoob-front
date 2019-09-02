import React, { Component, Fragment } from "react";
import { CommentDots } from "styled-icons/boxicons-regular/CommentDots";
import Rating from "@material-ui/lab/Rating";
import {
  TextField,
  Select as Selection,
  OutlinedInput,
  MenuItem,
  InputLabel,
  FormControl
} from "@material-ui/core";
import "./TeachersModal.css";

class TeachersModal extends Component {
  state = {
    year: new Date().getFullYear(),
    semester: 1,
    rate: 0
  };

  semesterList = [
    { id: 1, name: "Semester One" },
    { id: 2, name: "Semester Two" },
    { id: 3, name: "Summer School" }
  ];

  componentWillReceiveProps = () => {
    this.setState(() => {
      return { rate: 0 };
    });
  };

  render = () => {
    return (
      <Fragment>
        <CommentDots
          size="26"
          className="cs_td_icon_comment"
          title="new comment"
          data-toggle="modal"
          data-target="#exampleModal"
        ></CommentDots>

        <div className="modal" tabIndex="-1" role="dialog" id="exampleModal">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Make a new comment</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body cs_tm_input">
                <div className="row">
                  <TextField
                    className="col-3 cs_tm_input_item"
                    label="Name"
                    autoComplete="Name"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    className="col-3 cs_tm_input_item"
                    label="Year"
                    autoComplete="Name"
                    margin="normal"
                    variant="outlined"
                    value={this.state.year}
                  />
                  <FormControl
                    variant="outlined"
                    className="col-4 cs_tm_input_item"
                  >
                    <InputLabel htmlFor="comment-semester">Semester</InputLabel>
                    <Selection
                      name="semester"
                      value={this.state.semester}
                      input={
                        <OutlinedInput
                          labelWidth={70}
                          name="semester"
                          id="comment-semester"
                        />
                      }
                      onChange={e => {
                        this.setState(e.target.value);
                      }}
                    >
                      {this.semesterList.map(el => {
                        return (
                          <MenuItem key={el.id} value={el.id}>
                            {el.name}
                          </MenuItem>
                        );
                      })}
                    </Selection>
                  </FormControl>
                </div>

                <div className="row cs_tm_rate_group">
                  <div className="col-2 cs_tm_rate_label">Rating:</div>
                  <div className="col-1"></div>
                  <div className="col-4 cs_tm_rate">
                    <Rating
                      className="cs_tm_rate_star"
                      value={this.state.rate}
                      precision={1}
                      onChange={(e, newValue) => {
                        return this.setState({ rate: newValue });
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <textarea
                    name=""
                    id=""
                    rows="6"
                    className="cs_tm_comment_area"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
}

export default TeachersModal;
