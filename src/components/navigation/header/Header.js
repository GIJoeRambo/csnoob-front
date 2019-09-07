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
    isDashboard: false
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ displayFlag: !this.state.displayFlag });
    }, 1000);
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
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={this.props.handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Fragment>
    );
  }
}

const mapStatetoProps = state => ({ drawerOpen: state.sidebarReducer.open });
const mapDispatchToProps = dispatch => ({
  handleDrawerOpen: () => dispatch(sidebarOpen())
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Header)
);
