import React from "react";
import { List } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends React.Component {
  imgPath = '../../../assets/images/university/';
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

  render() {
    return (
      <List component="nav" className="col-3 SideBar">
        {
          this.univisityList.map((item, index) =>
            (
              <div key={index} className='row cs_sidebar_item'>
                <div className='col-12 cs_sidebar_uniName'>{item.name}</div>
              </div>
            )
          )
        }





        {/* {this.univisityList.map((el, index) => (
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
        ))} */}
      </List>
    );
  }
}

export default withRouter(Sidebar);
