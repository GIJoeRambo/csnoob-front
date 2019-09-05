import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { sidebarOpen } from "../../../redux/actions/sidebarAction";
import { connect } from "react-redux";
import "./Header.css";

class Header extends React.Component {
  state = {
    displayFlag: false,
    isHomepage: false
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ displayFlag: !this.state.displayFlag });
    }, 1000);
    this.setState({ isHomepage: this.props.location.pathname === "/" });
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    let flag = nextProps.location.pathname === "/";
    if (flag !== prevState.isHomepage) {
      return { isHomepage: flag };
    }
    return null;
  };

  handleLogoclick = () => {
    this.props.history.push("/");
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
          {this.state.isHomepage ? null : (
            <IconButton
              color="secondary"
              aria-label="open drawer"
              onClick={this.props.handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStatetoProps = state => ({ drawerOpen: state.sidebarReducer });
const mapDispatchToProps = dispatch => ({
  handleDrawerOpen: () => dispatch(sidebarOpen())
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Header)
);
