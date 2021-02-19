import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import './HomePage.scss';

const useStyles = makeStyles(theme => ({
  mainBody: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
  },
  mainBodyPaper: {
    borderRadius: 0,
    padding: 20,
    margin: 0,
  },
  firstHeading: {
    textAlign: 'left',
    padding: 40,
  },
  secondTitle: {
    fontSize: 'calc((6.5 - 1) * 1.2vw + 1rem)',
    textAlign: 'Left',
    backgroundColor: '#000',
    color: '#fff',
    padding: 60,
    lineHeight: 0.858,
  },
  numberedItem: {},
  horizontalLine: {
    borderWidth: 1,
    width: '95%',
    color: '#000',
  },
  eligbility: {
    backgroundColor: '#eff1f5',
    padding: 20,
    borderRadius: 0,
  },
  whoIsEligible: {
    fontSize: 'calc((4.2 - 1) * 1.2vw + 1rem)',
    padding: 20,
  },
  classificationsText: {
    padding: 20,
    paddingTop: 0,
    fontSize: 'calc((1.6 - 1) * 1.2vw + 1rem)',
    letterSpacing: '0.035em',
    lineHeight: '1.3em',
  },
}));

export default function homepage() {
  const classes = useStyles();

  return (
    <div className={classes.mainBody}>
      <Typography variant="h1" className={classes.secondTitle}>
        Where to find the Covid-19 vaccine in Texas
      </Typography>
      <Paper className={classes.eligbility}>
        <Typography variant="h2" className={classes.whoIsEligible}>
          Who is eligible right now?
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={12} md={3}>
            <Typography className={classes.classificationsText}>
              <Link
                color="secondary"
                href="https://www.dshs.texas.gov/coronavirus/immunize/vaccine/EVAP-Phase1A.pdf"
                target="_blank"
                rel="noopener"
                style={{ wordWrap: 'break-word' }}
              >
                <span style={{ textDecoration: 'underline' }}>
                  <strong>Phase 1A:</strong>
                </span>
              </Link>
              <br />
              Front-line healthcare workers and residents at long-term care facilities
            </Typography>
            <Typography className={classes.classificationsText}>
              <Link
                href="https://www.dshs.texas.gov/coronavirus/immunize/vaccine/EVAP-Phase1B.pdf"
                target="_blank"
                color="secondary"
                rel="noopener"
                style={{ wordWrap: 'break-word' }}
              >
                <span style={{ textDecoration: 'underline' }}>
                  <strong>Phase 1B:</strong>
                </span>
              </Link>
              <br />
              People 65+ or people 16+ with a health condition that increases risk of severe COVID‑19 illness, including
              but not limited to:
            </Typography>
          </Grid>
          <Grid item sm={12} md={9}>
            <Typography variant="h4">Qualifying High Risk Factors:</Typography>
            <ul>
              <li>Cancer</li>
              <li>Chronic kidney disease</li>
              <li>COPD (chronic obstructive pulmonary disease)</li>
              <li>Down Syndrome</li>
              <li>Heart conditions, such as heart failure, coronary artery disease, or cardiomyopathies</li>
              <li>Organ transplantation</li>
              <li>Obesity</li>
              <li>Pregnancy</li>
              <li>Sickle cell disease</li>
              <li>Type 2 diabetes</li>
              <li>
                <Link
                  href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html#asthma"
                  target="_blank"
                  rel="noopener"
                  color="secondary"
                  style={{ textDecoration: 'underline', wordWrap: 'break-word' }}
                >
                  Asthma (moderate-to-severe)
                </Link>
              </li>
              <li>Cerebrovascular disease (affects blood vessels and blood supply to the brain)</li>
              <li>Cystic fibrosis</li>
              <li>Hypertension or high blood pressure</li>
              <li>
                Immunocompromised state (weakened immune system) from blood or bone marrow transplant, immune
                deficiencies, HIV, use of corticosteroids, or use of other immune weakening medicines
              </li>
              <li>Neurologic conditions, such as dementia</li>
              <li>Liver disease</li>
              <li>{'Overweight (BMI > 25 kg/m2, but < 30 kg/m2)'}</li>
              <li>Pulmonary fibrosis (having damaged or scarred lung tissues)</li>
              <li>Thalassemia (a type of blood disorder)</li>
              <li>Type 1 diabetes mellitus</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.mainBodyPaper}>
        <div className="mainBody">
          <Typography variant="h2" className={classes.firstHeading}>
            Tips for finding a covid-19 vaccine:
          </Typography>
          <hr className={classes.horizontalLine} />
          <ol>
            <li className={classes.numberedItem}>
              Check the weekly allocation list.
              <ul>
                <li>
                  Every Sunday, Texas Department of Health Services uploads a PDF document with a list of all the
                  providers and facilities that will receive the vaccine that week.{' '}
                </li>
                <li>
                  Link here:{' '}
                  <Link
                    href="https://dshs.texas.gov/coronavirus/immunize/vaccineallocations.aspx"
                    target="_blank"
                    rel="noopener"
                    color="secondary"
                    style={{ textDecoration: 'underline', wordWrap: 'break-word' }}
                  >
                    https://dshs.texas.gov/coronavirus/immunize/vaccineallocations
                  </Link>
                </li>
                <li>
                  Pro-tip: call every place on the list and ask when they expect to receive the vaccine and how to
                  sign-up.{' '}
                </li>
              </ul>
            </li>
            <li className={classes.numberedItem}>
              Try Different locations to see if the vaccine is available.
              <ul>
                <li>
                  Check with your primary care physicians office, local pharmacies, grocery stores, local health
                  department, and state health departments.{' '}
                </li>
              </ul>
            </li>
            <li className={classes.numberedItem}>
              Follow providers on social media.
              <ul>
                <li> Many providers make announcements about their allocation, delays, sign ups on social media. </li>
                <li>Follow providers on Facebook and Twitter especially.</li>
                <li>Pro-tip: Turn on notifications so you know when they post an update.</li>
              </ul>
            </li>
            <li className={classes.numberedItem}>
              Sign up everywhere you qualify.
              <ul>
                <li>
                  Cast a wide net because you never know which provider might not receive their weekly allocation. Once
                  you receive your vaccine, be a good neighbor and make sure you call and cancel any duplicate
                  appointments so others can sign up.
                </li>
              </ul>
            </li>
            <li className={classes.numberedItem}>
              Have all your information readily available.
              <ul>
                <li>
                  When appointment bookings open, they are usually booked within 30 minutes. You have to act fast and
                  you don’t want to waste time looking up your medical history or insurance information or locating your
                  ID.
                </li>
              </ul>
            </li>
            <li className={classes.numberedItem}>
              {' '}
              Help others.
              <ul>
                <li>
                  Share information with friends, families and neighbors, and let people know if there are vaccine
                  openings. Ask around for how people got appointments and share accurate information in your own
                  community.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </Paper>
    </div>
  );
}
