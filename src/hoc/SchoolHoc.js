import React, { Component } from "react";

const SchoolHoc = fields => {
  return WrappedComponent => {
    return class extends Component {
      render() {
        return <WrappedComponent {...this.props} school={{ ...fields }} />;
      }
    };
  };
};

export default SchoolHoc;
