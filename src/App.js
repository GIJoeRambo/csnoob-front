import React from 'react';
import Home from './containers/home/Home';
import Test from './containers/test/test';
import NotFound from './containers/NotFound/NotFound'
import Layout from './components/layout/layout';
import {BrowserRouter as Router, Switch,Route,Redirect} from "react-router-dom";

const App = () => {
  return (
      <Layout>
        <Router>
            <Switch>
                <Route path="/404" component={NotFound}/>
                <Route path="/test" component={Test}/>
                <Route path="/" exact component={Home}/>
                <Redirect from={"*"} to={'/404'} />
            </Switch>
        </Router>
      </Layout>
  );
}

export default App;
