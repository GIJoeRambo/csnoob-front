import React from 'react'
import DashboardLayout from '../../components/layout/dashboard_layout/dashboard_layout'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Uoa from "./uoa/uoa";

const Dashboard = (props) => {
    return (
        <DashboardLayout>
            <Router>
                <Switch>
                    <Route path={`${props.match.path}/uoa`} component={Uoa}/>
                </Switch>
            </Router>
        </DashboardLayout>
    )
}

export default Dashboard
