import React from 'react';
import HomePage from './containers/HomePage/HomePage'
import Test from './containers/test/test'
import Layout from './components/layout/layout'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

const App = () => {
  return (
      <Layout>
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/test" component={Test}/>
            </Switch>
        </Router>
      </Layout>
  );
}

export default App;
