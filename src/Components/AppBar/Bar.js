import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
  appBar: {
    top: "auto",
    bottom: 0,
    position: "relative",
    minHeight: 50,
    backgroundColor: "#ffffff",
  },
  typography: {
      color: "#68c3a3",
      fontSize: 26,
      fontWeight: "bold",
  },
  divButton: {
    position: "absolute",
    right: 90  
  },
  button: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography  className={classes.typography}><span style={{color: "#163550"}}>I AM</span> MOHAMMAD ERFAN KARAMI</Typography>
          <div className={classes.divButton}>
          <Button className={classes.button}>HOME</Button>
          <Button className={classes.button}>ABOUT</Button>
          <Button className={classes.button}>RESUME</Button>
          <Button className={classes.button}>SKILLS</Button>
          <Button className={classes.button}>CONTACT</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
