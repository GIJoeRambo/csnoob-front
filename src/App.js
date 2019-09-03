import React from "react";
import Home from "./containers/home/Home";
import Dashboard from "./containers/dashboard/dashboard";
import NotFound from "./containers/NotFound/NotFound";
import MainLayout from "./components/layout/main_layout/main_layout";
import CourseView from "./containers/course/CourseView";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Forum from "./containers/forum/forum";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2a2a2a"
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/404" component={NotFound} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/forum" component={Forum} />
            <Route path="/course/:uniName/:courseName" component={CourseView} />
            <Route path="/" exact component={Home} />
            <Redirect from={"*"} to={"/404"} />
          </Switch>
        </MainLayout>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
