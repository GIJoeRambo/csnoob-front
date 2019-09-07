import React, { Component } from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";

class DashboardSummary extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {this.props.uni.name}
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" color="textSecondary" className="mt-3">
            {this.props.uni.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default DashboardSummary;
