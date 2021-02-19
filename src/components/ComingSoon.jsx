import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cityPaper: {
    borderRadius: 0,
    padding: 20,
    margin: 20,
    marginTop: 0,
    backgroundColor: "#eff1f5",
    height:'40vh',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  title : {
    textAlign: 'center'

  }
}));

export default function ComingSoon() {
  const classes = useStyles();
  const { city } = useParams();

  return (
    <div className="mainBody" className={classes.cityPaper}>
      <Typography variant="h4" className={classes.title}>
        We're still working on information for {city}. Stay Tuned!
      </Typography>
    </div>
  );
}
