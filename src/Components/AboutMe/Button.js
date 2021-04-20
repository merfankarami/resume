import React from "react";
import { Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button1: {
    margin: theme.spacing(1),
    padding: "10px",
    marginRight: "1cm"
  },
  button2: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#68c3a3",
    padding: "10px",
    
  },
  icon: {
    width: "7mm",
    height: "7mm",
    margin: "1px",
    padding: "1px",
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button1}
        startIcon={<Icon className={classes.icon}>send</Icon>}>
        SEND ME MESSAGES
      </Button>
      <Button
        variant="contained"
        className={classes.button2}
        startIcon={<Icon className={classes.icon}>download</Icon>}>
        DOWNLOAD MY CV
      </Button>
    </div>
  );
}
