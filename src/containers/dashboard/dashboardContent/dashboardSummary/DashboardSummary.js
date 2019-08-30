import React, { Component } from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";

class DashboardSummary extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {this.props.match.params.uniName}
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" color="textSecondary">
            We are empirically mapping the variant prop to a range of different
            DOM element types. If you wish to change that mapping, you can
            provide your own. Alternatively, you can use the component prop.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default DashboardSummary;
