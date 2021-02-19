import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import Container from '@material-ui/core/Container';
import HubCard from './HubCard';
import { format, startOfWeek } from 'date-fns';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import './City.scss';

const useStyles = makeStyles(theme => ({
  cityPaper: {
    borderRadius: 0,
    padding: 20,
    marginTop: 0,
    backgroundColor: '#eff1f5',
  },
  weeklyAlloc: {
    textAlign: 'center',
    padding: 20,
  },
  horizontalLine: {
    borderWidth: 1,
    color: '#000',
  },
  hubTitle: {
    textAlign: 'left',
    padding: 30,
  },
}));

export default function City() {
  const classes = useStyles();
  const { city } = useParams();

  const [major, setMajor] = useState([]);
  const [minor, setMinor] = useState([]);

  const getHubData = async () => {
    const res = await axios.get(`${process.env.API_URL}/getHubs`, { timeout: 4000 }).catch(err => console.error(err));
    let hubArr = res.data.hubs;
    setMajor(hubArr.filter(entry => entry.hubType === 'major'));
    setMinor(hubArr.filter(entry => entry.hubType === 'minor'));
  };

  useEffect(() => {
    getHubData();
  }, []);
  const begOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });

  return (
    <Paper className={classes.cityPaper}>
      {city === 'Austin' ? (
        <Container maxWidth="lg">
          <Typography variant="h3" className={classes.weeklyAlloc}>
            {city} Weekly allocations [{format(begOfWeek, 'MMM do')}]
          </Typography>
          <hr className={classes.horizontalLine} />
          <Typography variant="h2" className={classes.hubTitle}>
            Regional Hubs
          </Typography>
          <hr className={classes.horizontalLine} />
          <Grid container spacing={5}>
            {major.map((cityObj, index) => (
              <HubCard cityObj={cityObj} key={`grid-major-${index}-${cityObj.name}`} />
            ))}
          </Grid>
          <hr className={classes.horizontalLine} />
          <Typography variant="h2" className={classes.hubTitle}>
            Additional Providers
          </Typography>
          <hr className={classes.horizontalLine} />
          <Grid container spacing={3}>
            {minor.map((cityObj, index) => (
              <HubCard cityObj={cityObj} key={`grid-minor-${index}-${cityObj.name}`} />
            ))}
          </Grid>
          <hr className={classes.horizontalLine} />
        </Container>
      ) : (
        <ComingSoon />
      )}
    </Paper>
  );
}
