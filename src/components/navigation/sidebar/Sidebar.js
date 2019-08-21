import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink, withRouter } from "react-router-dom";

const Sidebar = props => {
  return (
    <List component="nav">
      <ListItem button>
        <NavLink to={props.match.path + "/uoa"}>
          <ListItemText primary="UoA" />
        </NavLink>
      </ListItem>
      <ListItem button>
        <NavLink to={props.match.path + "/aut"}>
          <ListItemText primary="AUT" />
        </NavLink>
      </ListItem>
      <ListItem button>
        <NavLink to={props.match.path + "/massey"}>
          <ListItemText primary="Massey" />
        </NavLink>
      </ListItem>
    </List>
  );
};

export default withRouter(Sidebar);
