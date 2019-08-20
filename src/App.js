import React from 'react';
import Home from './containers/home/Home';
import Test from './containers/test/test';
import Layout from './components/layout/layout';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

const App = () => {
  return (
      <Layout>
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/test" component={Test}/>
            </Switch>
        </Router>
      </Layout>
  );
}

export default App;
