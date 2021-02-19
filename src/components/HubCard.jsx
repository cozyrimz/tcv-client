import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import parsePhoneNumber from 'libphonenumber-js';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  name: {
    marginBottom: 10,
    fontSize: '2rem',
  },
  gridItem: {
    marginTop: 30,
  },
  hubLineItem: {
    margin: 5,
    fontSize: 'calc((1.6 - 1) * 1.1vh + 1rem)',
  },
}));

export default function HubCard(props) {
  const classes = useStyles();

  const { id, city, name, address, zipcode, loc, phone, url, doses } = props.cityObj;

  const formatGoogleSearch = (address, zipcode) => {
    const queryParams = address.split(' ');
    queryParams.push(zipcode);
    let plusFormatted = queryParams.join('+');
    return `https://www.google.com/maps/search/?api=1&query=${plusFormatted}`;
  };

  const formatNum = numStr => {
    if (!numStr) return '';

    let num = parsePhoneNumber(numStr + '', 'US');
    if (numStr.length === 11) return num.formatInternational();
    else return num.formatNational();
  };
  const phoneFormatted = formatNum(phone);
  const googleSerachQueryStr = formatGoogleSearch(address, zipcode);

  return (
    <Grid item xs={12} sm={6} md={4} key={id} className={classes.gridItem}>
      <Typography className={classes.name}>{name}</Typography>
      <Typography className={classes.hubLineItem}>Doses: {doses}</Typography>
      <Typography className={classes.hubLineItem}>
        <a href={googleSerachQueryStr} target="_blank">{`${address}\n${zipcode}`}</a>
      </Typography>
      <Typography className={classes.hubLineItem}>{phoneFormatted}</Typography>
      {url.map(({ url, key }, index) => {
        return (
          <Typography className={classes.hubLineItem} key={`${url}-${name}-${index}`}>
            {key ? `${key}:  ` : ''}
            <Link
              href={url}
              target="_blank"
              rel="noopener"
              color="secondary"
              style={{ textDecoration: 'underline', wordWrap: 'break-word' }}
            >
              {url}
            </Link>
          </Typography>
        );
      })}
    </Grid>
  );
}
