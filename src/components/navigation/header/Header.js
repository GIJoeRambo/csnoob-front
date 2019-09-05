import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Header.css";

class Header extends React.Component {
  state = {
    displayFlag: false
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ displayFlag: !this.state.displayFlag });
    }, 1000);
  };

  handleLogoclick = () => {
    this.props.history.push("/");
  };

  handleForumClick = () => {
    this.props.history.push("/forum");
  };

  render() {
    return (
      <Fragment>
        <div className="d-flex justify-content-between Header">
          <span>
            <span
              className="cs_header_title"
              onClick={() => this.handleLogoclick()}
            >
              cs noob
            </span>
            <span
              className={
                this.state.displayFlag ? "cs_header_bar" : "cs_header_white_bar"
              }
            >
              |
            </span>
          </span>
          <Button
            style={{
              color: "white"
            }}
            className="mr-5"
            onClick={() => {
              this.handleForumClick();
            }}
          >
            Forum
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Header);
