import React from "react";
import DashboardLayout from "../../components/layout/dashboard_layout/dashboard_layout";
import { Switch, Route } from "react-router-dom";
import UoA from "./uoa/uoa";
import Aut from "./aut/aut";
import Massey from "./massey/massey";

const Dashboard = props => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${props.match.path}/uoa`} component={UoA} />
        <Route path={`${props.match.path}/aut`} component={Aut} />
        <Route path={`${props.match.path}/massey`} component={Massey} />
      </Switch>
    </DashboardLayout>
  );
};

export default Dashboard;
