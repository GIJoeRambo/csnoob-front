import React from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";

const DashboardBlank = () => {
  return (
    <Card>
      <CardContent>
        <div className="d-flex justify-content-between">
          <Typography variant="h5" component="span" gutterBottom>
            Comming soon...
          </Typography>
        </div>
        <Divider></Divider>
      </CardContent>
    </Card>
  );
};

export default DashboardBlank;
