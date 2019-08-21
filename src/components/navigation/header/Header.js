import React, { Fragment } from "react";
import "./Header.css";

class Header extends React.Component {
  state = {
    counter: 0
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
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
              this.state.counter % 2 === 0
                ? "cs_header_bar"
                : "cs_header_white_bar"
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
