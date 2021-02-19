import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "left",
    backgroundColor: "#000",
    color: "#fff",
    padding: 40,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.footer}>
      This site is not affiliated with or endorsed by the State of Texas.
      <br />
      This site is for informational purposes only.
      <br />
      Not all vaccination locations are tracked and the information may not be
      complete or accurate.
      <br />
      Copyright © 2021 Stand Up Texas. All rights reserved.
    </Typography>
  );
}
