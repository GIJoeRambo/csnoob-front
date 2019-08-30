import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

const CommentConfirmDialog = props => {
  return (
    <Dialog
      open={props.dialog}
      onClose={() => props.setDialog(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Confirmed</DialogTitle>
      <DialogContent>
        <DialogContentText>Thanks for you comment!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => props.setDialog(false)}
          color="primary"
          variant="outlined"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentConfirmDialog;
