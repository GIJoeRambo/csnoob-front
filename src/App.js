import React from "react";
import Home from "./containers/home/Home";
import Dashboard from "./containers/dashboard/dashboard";
import NotFound from "./containers/NotFound/NotFound";
import MainLayout from "./components/layout/main_layout/main_layout";
import Header from './components/navigation/header/Header';
import Footer from './components/navigation/footer/Footer';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <MainLayout>
      <Header />
      {/* <div className='App'> */}
        <Router>
          <Switch>
            <Route exact path="/404" component={NotFound} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" exact component={Home} />
            <Redirect from={"*"} to={"/404"} />
          </Switch>
        </Router>
      {/* </div> */}
      <Footer />
    </MainLayout>
  );
};

export default App;
