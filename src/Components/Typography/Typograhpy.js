import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "./Typography.css";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop: 70,
  },
});

export default function Title(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.root} variant="h2">
        {props.children}
      </Typography>
      <div class="wrapper">
        <div class="divider div-transparent div-arrow-down"></div>
      </div>
    </div>
  );
}
