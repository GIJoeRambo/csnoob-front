import React from "react";
import DashboardLayout from "../../components/layout/dashboard_layout/dashboard_layout";
import { Switch, Route } from "react-router-dom";
import Content from './content/content'
import SchoolHoc from '../../hoc/SchoolHoc'

const Dashboard = props => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${props.match.path}/uoa`} component={SchoolHoc({name:'uoa'})(Content)} />
        <Route path={`${props.match.path}/aut`} component={SchoolHoc({name:'aut'})(Content)} />
        <Route path={`${props.match.path}/massey`} component={SchoolHoc({name:'massey'})(Content)} />
        <Route path={`${props.match.path}/lincoln`} component={SchoolHoc({name:'lincoln'})(Content)} />
        <Route path={`${props.match.path}/otago`} component={SchoolHoc({name:'otago'})(Content)} />
        <Route path={`${props.match.path}/uc`} component={SchoolHoc({name:'uc'})(Content)} />
        <Route path={`${props.match.path}/victoria`} component={SchoolHoc({name:'victoria'})(Content)} />
        <Route path={`${props.match.path}/waikato`} component={SchoolHoc({name:'waikato'})(Content)} />
      </Switch>
    </DashboardLayout>
  );
};

export default Dashboard;
