import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink, withRouter } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends React.Component {
  univisityList = [
    { id: 1, name: "UoA", path: "uoa" },
    { id: 2, name: "AUT", path: "aut" },
    { id: 3, name: "Massey", path: "massey" },
    { id: 4, name: "Lincoln", path: "lincoln" },
    { id: 5, name: "Otago", path: "otago" },
    { id: 6, name: "Uc", path: "uc" },
    { id: 7, name: "Victoria", path: "victoria" },
    { id: 8, name: "Waikato", path: "waikato" }
  ];

  render() {
    return (
      <List component="nav" className="cs_sidebar_container">
        {this.univisityList.map((el, index) => (
          <NavLink
            to={this.props.match.path + "/" + el.path}
            key={el.id}
            className="cs_sidebar_link"
          >
            <ListItem button divider className="cs_sidebar_item" dense>
              <ListItemText
                primary={el.name}
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    );
  }
}

export default withRouter(Sidebar);
