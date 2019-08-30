import React from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";

const CommentConfirmDialog = props => {
  return (
    <Dialog open={props.dialog} onClose={() => props.setDialog(false)}>
      <DialogTitle>Thanks for you comment</DialogTitle>
      <DialogActions>
        <Button color="primary" onClick={() => props.setDialog(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentConfirmDialog;
