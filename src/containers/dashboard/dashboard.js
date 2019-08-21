import React from "react";
import DashboardLayout from "../../components/layout/dashboard_layout/dashboard_layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UoA from "./uoa/uoa";
import Aut from "./aut/aut";
import Massey from "./massey/massey";

class Dashboard extends React.Component {
  state = {
    oldUrl: this.props.location.pathname
  };

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname !== state.oldUrl) {
      console.log(1);
      setTimeout(() => {
        window.location.reload();
      }, 0);
      // return {
      //   oldUrl: props.location.pathname
      // };
    }
    return null;
  }

  render() {
    console.log(this.state);
    return (
      <DashboardLayout>
        <Router>
          <Switch>
            <Route path={`${this.props.match.path}/uoa`} component={UoA} />
            <Route path={`${this.props.match.path}/aut`} component={Aut} />
            <Route
              path={`${this.props.match.path}/massey`}
              component={Massey}
            />
          </Switch>
        </Router>
      </DashboardLayout>
    );
  }
}

export default Dashboard;
