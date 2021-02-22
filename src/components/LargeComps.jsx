import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const largeCompData = [
  { title: 'HEB Pharmacy', imagesrc: '/static/hebpic.png', url: 'https://vaccine.heb.com/' },
  {
    title: 'CVS Pharmacy',
    imagesrc: '/static/cvspic.png',
    url: 'https://www.cvs.com/vaccine/intake/store/covid-screener/covid-qns',
  },
  {
    title: 'Randalls Grocery',
    imagesrc: '/static/randallspic.png',
    url: 'https://www.mhealthappointments.com/covidappt',
  },
  { title: 'Walmart', imagesrc: '/static/walmartpic.png', url: 'https://www.walmart.com/cp/1228302' },
  { title: 'Sams Club', imagesrc: '/static/samsclubpic.png', url: 'https://www.samsclub.com/pharmacy' },
  {
    title: 'Walgreens',
    imagesrc: '/static/walgreenspic.png',
    url: 'https://www.walgreens.com/findcare/vaccination/covid-19/location-screening',
  },
];

const useStyles = makeStyles(theme => ({
  largCompPaper: {
    borderRadius: 0,
    padding: 20,
    marginTop: 0,
    backgroundColor: '#eff1f5',
  },
  hubTitle: {
    textAlign: 'left',
    padding: 30,
  },
  name: {
    marginBottom: 10,
    fontSize: '2rem',
  },
  cardroot: {
    maxWidth: 345,
  },
  cardmedia: {
    height: 140,
  },
  cardActionArea: {
    padding: 20,
  },
}));
export default function LargeComps() {
  const [data, setData] = useState(largeCompData || []);
  const classes = useStyles();

  return (
    <Paper className={classes.largCompPaper}>
      <Typography variant='h2' className={classes.hubTitle}>
        Pharmacies + Grocery Chains
      </Typography>
      <Grid container spacing={3}>
        {data.map(({ title, imagesrc, url }) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={`${title}-bigComps`}>
              <Card className={classes.cardroot}>
                <Link
                  href={url}
                  target='_blank'
                  rel='noopener'
                  color='secondary'
                  style={{ textDecoration: 'underline', wordWrap: 'break-word' }}>
                  <CardActionArea className={classes.cardActionArea}>
                    <CardMedia className={classes.cardmedia} image={imagesrc} title={title} component='img' />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h4'>
                        {title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions>
                  {/* <Button size='medium' color='secondary'>
                  {url ? 'Check Availability' : 'Coming Soon'}
                </Button> */}
                  <Link
                    href={url}
                    target='_blank'
                    rel='noopener'
                    color='secondary'
                    style={{ textDecoration: 'underline', wordWrap: 'break-word' }}>
                    {url ? 'Check Availability' : 'Coming Soon'}
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}
