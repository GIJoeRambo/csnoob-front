import React from "react";
import DashboardLayout from "../../components/layout/dashboard_layout/dashboard_layout";
import { Switch, Route } from "react-router-dom";
import Content from "./content/content";
import SchoolHoc from "../../hoc/SchoolHoc";

const Dashboard = props => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={props.match.path + "/:uniName"} component={Content} />
      </Switch>
    </DashboardLayout>
  );
};

export default Dashboard;
