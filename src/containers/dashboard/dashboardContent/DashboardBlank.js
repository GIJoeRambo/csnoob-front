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
        <img
          src="https://media.giphy.com/media/oHTONps3xBNlu/giphy.gif"
          alt=""
          className="mt-3"
        ></img>
      </CardContent>
    </Card>
  );
};

export default DashboardBlank;
