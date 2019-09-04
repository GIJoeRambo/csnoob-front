import React from "react";
import { Card, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Decoder from "../../../util/Decoder";
import moment from "moment";

const TeachersCommentsList = (props) => {
  return (
    <div>
      {props.commentsList.map(el => (
        <Card key={el._id} className="m-3">
          <div className="row mx-3">
            <Typography
              component="span"
              variant="h6"
              className="col-md-3 col-6 mt-3"
            >
              {el.name}
            </Typography>
            {el.semester === 3 ? (
              <Typography
                component="span"
                variant="h6"
                className="col-md-3 col-6 mt-3"
              >
                {/* {el.year + " Summer School "} */}
                ssss
              </Typography>
            ) : (
                <Typography
                  component="span"
                  variant="h6"
                  className="col-md-3 col-6 mt-3"
                >
                  {/* {el.year + " Semester " + el.semester} */}
                  ssss
              </Typography>
              )}
            <Rating
              name="teacherRating"
              value={el.rate}
              readOnly
              className="mt-3"
            />
          </div>
          <Typography className="m-3">{el.comment}</Typography>
          <Typography className="m-3" color="textSecondary">
            {"posted at " +
              moment(Decoder(el._id)).format("Do MMMM YYYY, h:mm:ss a")}
          </Typography>
        </Card>
      ))}
    </div>
  );
};

export default TeachersCommentsList;
