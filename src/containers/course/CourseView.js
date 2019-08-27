import React, { useState } from "react";
import { Typography, Divider, Tab, Tabs } from "@material-ui/core";
import CourseComment from "./courseComment/courseComment";

const CourseView = props => {
  const [tabIndex, setTabIndex] = useState(0);
  let course = props.location.state.course;

  return (
    <div className="m-3">
      <div className="mb-3">
        <Typography component="span" variant="h4">
          {course.code}
        </Typography>
        <Typography component="span" variant="h4" className="ml-5">
          {course.name}
        </Typography>
      </div>
      <Typography>{course.description}</Typography>
      <Divider className="my-3"></Divider>
      <Tabs
        value={tabIndex}
        onChange={(e, newValue) => {
          setTabIndex(newValue);
        }}
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label={"Comment"}></Tab>
        <Tab label={"Resource"}></Tab>
      </Tabs>
      <div hidden={tabIndex !== 0}>
        <CourseComment />
      </div>
      <div hidden={tabIndex !== 1}>
        <Typography>Resource</Typography>
      </div>
    </div>
  );
};

export default CourseView;
