import React, { Fragment } from "react";
import "./Header.css";

class Header extends React.Component {
  state = {
    displayFlag: false
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ displayFlag: !this.state.displayFlag });
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <div className="cs_header">
          <span
            className="cs_header_title"
            onClick={() => (window.location.href = "/")}
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
        </div>
      </Fragment>
    );
  }
}

export default Header;
