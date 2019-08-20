import React from 'react';
import Home from './containers/home/Home';
import Test from './containers/test/test';
import NotFound from './containers/NotFound/NotFound'
import MainLayout from './components/layout/main_layout/main_layout';
import {BrowserRouter as Router, Switch,Route,Redirect} from "react-router-dom";

const App = () => {
  return (
      <MainLayout>
        <Router>
            <Switch>
                <Route path="/404" component={NotFound}/>
                <Route path="/test" component={Test}/>
                <Route path="/" exact component={Home}/>
                <Redirect from={"*"} to={'/404'} />
            </Switch>
        </Router>
      </MainLayout>
  );
}

export default App;
