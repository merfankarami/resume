import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Link, Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

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
    right: 90,
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    "&:hover": {
      color: "#68c3a3"
    }
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.typography}>
              <span style={{ color: "#163550" }}>I AM</span> MOHAMMAD ERFAN
              KARAMI
            </Typography>
            <div className={classes.divButton}>
              <Link to="/"><Button className={classes.button}>HOME</Button></Link>
              <Link to="/about"><Button className={classes.button}>ABOUT</Button></Link>
              <Button className={classes.button}>RESUME</Button>
              <Button className={classes.button}>SKILLS</Button>
              <Button className={classes.button}>CONTACT</Button>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}