import React from "react";
import {
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemText,
  ListSubheader,
  ListItemIcon
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "./Sidebar.css";
import { univisityList } from "../../../shared/sharedData";
import { sidebarClose } from "../../../redux/actions/sidebarAction";
import { connect } from "react-redux";
import MailIcon from "@material-ui/icons/Mail";
class Sidebar extends React.Component {
  state = {
    tempUrl: this.props.location.pathname.split("/")[1]
  };

  uniOnClick = path => {
    this.props.history.push("/dashboard/" + path);
  };

  fourmOnClick = () => {
    this.props.history.push("/forum");
  };

  render() {
    return (
      <Drawer
        variant="temporary"
        open={this.props.drawerOpen}
        anchor="right"
        onClose={() => this.props.handleClose()}
      >
        <Divider />
        <List>
          <ListSubheader>University Lists</ListSubheader>
          {univisityList.map(el => (
            <ListItem
              button
              key={el.id}
              onClick={() => this.uniOnClick(el.path)}
            >
              <ListItemText primary={el.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => this.fourmOnClick()}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Fourm"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListSubheader>Our Friends</ListSubheader>
          <ListItem button>
            <a
              href="http://gradspace.org/en/home"
              rel="noopener noreferrer"
              target="_blank"
              className="cs_sidebar_link"
            >
              Gradspace
            </a>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

const mapStatetoProps = state => ({
  drawerOpen: state.sidebarReducer.open,
  firstTime: state.sidebarReducer.firstTime
});
const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(sidebarClose())
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Sidebar)
);
