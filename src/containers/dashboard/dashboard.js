import React from "react";
import DashboardLayout from "../../components/layout/dashboard_layout/dashboard_layout";
import { Switch, Route } from "react-router-dom";
import DashboardContent from "./dashboardContent/DashboardContent";
import DashboardBlank from "./DashboardBlank";

const Dashboard = props => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={props.match.path} exact component={DashboardBlank} />
        <Route
          path={props.match.path + "/:uniName"}
          component={DashboardContent}
        />
      </Switch>
    </DashboardLayout>
  );
};

export default Dashboard;
