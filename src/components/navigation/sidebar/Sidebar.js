import React from "react";
import {
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "./Sidebar.css";
import { univisityList } from "../../../shared/sharedData";
import { sidebarClose } from "../../../redux/actions/sidebarAction";
import { connect } from "react-redux";

class Sidebar extends React.Component {
  state = {
    selectedId: 1
  };

  handleClick = item => {
    this.setState({ selectedId: item.id });
  };

  componentDidMount = () => {
    const uniName = this.props.location.pathname.split("/")[2];
    const uni = uniName && univisityList.find(el => el.path === uniName);
    if (uni) {
      this.setState({ selectedId: uni.id });
    }
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
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

const mapStatetoProps = state => ({ drawerOpen: state.sidebarReducer });
const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(sidebarClose())
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Sidebar)
);
