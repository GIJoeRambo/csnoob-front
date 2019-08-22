import React from "react";
import DashboardLayout from "../../components/layout/dashboard_layout/dashboard_layout";
import { Switch, Route } from "react-router-dom";
import UoA from "./uoa/uoa";
import Aut from "./aut/aut";
import Massey from "./massey/massey";
import Lincoln from "./lincoln/lincoln";
import Otago from "./otago/otago";
import Uc from "./uc/uc";
import Victoria from "./victoria/victoria";
import Waikato from "./waikato/waikato";

const Dashboard = props => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${props.match.path}/uoa`} component={UoA} />
        <Route path={`${props.match.path}/aut`} component={Aut} />
        <Route path={`${props.match.path}/massey`} component={Massey} />
        <Route path={`${props.match.path}/lincoln`} component={Lincoln} />
        <Route path={`${props.match.path}/otago`} component={Otago} />
        <Route path={`${props.match.path}/uc`} component={Uc} />
        <Route path={`${props.match.path}/victoria`} component={Victoria} />
        <Route path={`${props.match.path}/waikato`} component={Waikato} />
      </Switch>
    </DashboardLayout>
  );
};

export default Dashboard;
