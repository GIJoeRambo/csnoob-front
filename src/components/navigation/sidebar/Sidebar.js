import React from "react";
import { List, ListItem } from "@material-ui/core";
import { withRouter, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { univisityList } from "../../../shared/sharedData";

class Sidebar extends React.Component {
  imgPath = "../../../assets/images/university/";

  state = {
    selectedId: -1
  };

  handleClick = item => {
    this.setState({ selectedId: item.id });
  };

  componentDidMount = () => {
    const uniName = this.props.location.pathname.split("/")[2];
    const uni = univisityList.find(el => el.path === uniName);
    if (uni) {
      this.setState({ selectedId: uni.id });
    }
  };

  render() {
    return (
      <List component="nav" className="row col-12 col-md-3 SideBar">
        {univisityList.map(item => {
          let path = {
            pathname: this.props.match.path + "/" + item.path
          };
          return (
            <NavLink
              to={path}
              key={item.id}
              className="cs_sidebar_link col-6 col-md-12"
              onClick={() => this.handleClick(item)}
            >
              <ListItem
                className={`row cs_sidebar_item ${
                  this.state.selectedId === item.id
                    ? "cs_sidebar_item_selected"
                    : ""
                }`}
              >
                <h5 className="cs_sidebar_uniName">{item.name}</h5>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    );
  }
}

export default withRouter(Sidebar);
