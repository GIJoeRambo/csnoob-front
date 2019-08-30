import { withStyles, Button } from "@material-ui/core";

export const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText("#2a2a2a"),
    backgroundColor: "#2a2a2a",
    "&:hover": {
      backgroundColor: "#2a2a2a"
    }
  }
}))(Button);
