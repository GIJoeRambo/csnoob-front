import React from "react";
import { List, ListItem } from "@material-ui/core";
import { withRouter, NavLink } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends React.Component {
  imgPath = "../../../assets/images/university/";
  univisityList = [
    { id: 1, name: "University of Auckland", path: "uoa" },
    { id: 2, name: "Auckland University of Technology", path: "aut" },
    { id: 3, name: "Massey University", path: "massey" },
    { id: 4, name: "Lincoln University", path: "lincoln" },
    { id: 5, name: "University of Otago", path: "otago" },
    { id: 6, name: "University of Canterbury", path: "uc" },
    { id: 7, name: "Victoria University of Wellington", path: "victoria" },
    { id: 8, name: "University of Waikato", path: "waikato" }
  ];

  state = {
    selectedId: -1
  };

  handleClick = item => {
    this.setState({ selectedId: item.id });
  };

  componentDidMount = () => {
    if (this.props.location.state && this.props.location.state.university) {
      this.setState({ selectedId: this.props.location.state.university.id });
    }
  };

  render() {
    console.log(this.props)
    return (
      <List component="nav" className="row col-12 col-md-3 SideBar">
        {this.univisityList.map(item => {
          let path = {
            pathname: this.props.match.path + "/" + item.path,
            state: {
              university: item
            }
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
