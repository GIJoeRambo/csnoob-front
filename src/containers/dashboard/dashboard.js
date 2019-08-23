import React from "react";
import DashboardLayout from "../../components/layout/dashboard_layout/dashboard_layout";
import { Switch, Route } from "react-router-dom";
import Content from './content/content'
import SchoolHoc from '../../hoc/SchoolHoc'

const Dashboard = props => {
  const schools = [
    {
      name: 'uoa',
    },
    {
      name: 'aut',
    },
    {
      name: 'massey',
    },
    {
      name: 'lincoln',
    },
    {
      name: 'otago',
    },
    {
      name: 'uc',
    },
    {
      name: 'victoria',
    },
    {
      name: 'waikato',
    }
  ]
  return (
    <DashboardLayout>
      <Switch>
        {schools.map((school,index)=>(
            <Route
                key={index}
                path={`${props.match.path}/${school.name}`}
                component={SchoolHoc({name: school.name})(Content)}
            />
        ))}
      </Switch>
    </DashboardLayout>
  );
};

export default Dashboard;
