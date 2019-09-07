import React from "react";
import DashboardCourse from "./dashboardCourse/DashboardCourse";
import DashboardDescription from "./dashboardSummary/DashboardSummary";
import DashboardTeachers from "./dashboardTeachers/DashboardTeachers";
import DashboardBlank from "./DashboardBlank";
import "./DashboardContent.css";
import { univisityList } from "../../../shared/sharedData";
import { Redirect } from "react-router-dom";
import {
  sidebarOpen,
  setFirstTime
} from "../../../redux/actions/sidebarAction";
import { connect } from "react-redux";

class DashboardContent extends React.Component {
  state = {
    uni: {},
    shouldRedirect: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.uniName !== prevState.uni) {
      return {
        uni: univisityList.find(
          el => el.path === nextProps.match.params.uniName
        )
      };
    }
    return null;
  }

  componentDidMount = () => {
    let uni = univisityList.find(
      el => el.path === this.props.match.params.uniName
    );
    if (uni) {
      this.setState({
        uni: uni
      });
    } else {
      this.setState({
        shouldRedirect: true
      });
    }
    if (!this.props.firstTime) {
      this.props.openDrawer();
      this.props.setFirstTime();
    }
  };

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/"></Redirect>;
    }
    let uni = this.state.uni;
    return (
      <React.Fragment>
        {uni ? (
          uni.id === 1 ? (
            <div className="dashboard_content_container">
              <DashboardDescription uni={uni} />
              <DashboardCourse uni={uni} />
              <DashboardTeachers uni={uni} />
            </div>
          ) : (
            <div className="dashboard_content_container">
              <DashboardDescription uni={uni} />
              <DashboardBlank />
            </div>
          )
        ) : (
          <Redirect to="/"></Redirect>
        )}
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => ({
  drawerOpen: state.sidebarReducer.open,
  firstTime: state.sidebarReducer.firstTime
});
const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(sidebarOpen()),
  setFirstTime: () => dispatch(setFirstTime())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(DashboardContent);
