import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink, Link } from 'react-router-dom';
import ButtonAppBarCollapse from './ButtonAppBarCollapse';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 20,
  },
  toolbar: {
    paddingLeft: 30,
    paddingRight: 30,
    flexFlow: 'row wrap',
  },
  cityButton: {
    marginLeft: 5,
    fontSize: 'calc((2.9 - 1) * 1.3vw + 1rem)',
  },
  navLinkRow: {
    textDecorationLine: 'None',
  },
  titleLink: {
    flexGrow: 1,
    fontSize: 'calc((2.9 - 1) * 1.3vw + 1rem)',
    textDecorationLine: 'None',
  },
  navBarButtonRow: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  dropDownMenuItem: {
    fontSize: '5vmin',
  },
}));

export default function TopNavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Link exact to="/" className={classes.titleLink}>
          <Button className={classes.titleLink} color="secondary">
            Texas Covid Vaccine Finder
          </Button>
        </Link>
        <ButtonAppBarCollapse>
          <MenuItem>
            {' '}
            <NavLink to="/city/Austin">
              <Button className={classes.dropDownMenuItem} color="secondary">
                Austin
              </Button>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/city/Dallas">
              <Button className={classes.dropDownMenuItem} color="secondary">
                Dallas
              </Button>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/city/Houston">
              <Button className={classes.dropDownMenuItem} color="secondary">
                Houston
              </Button>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/city/San Antonio">
              <Button className={classes.dropDownMenuItem} color="secondary">
                San Antonio
              </Button>
            </NavLink>
          </MenuItem>
        </ButtonAppBarCollapse>
        <div className={classes.navBarButtonRow}>
          <NavLink to="/city/Austin" className={classes.navLinkRow}>
            <Button className={classes.cityButton} color="secondary">
              Austin
            </Button>
          </NavLink>
          <NavLink to="/city/Dallas" className={classes.navLinkRow}>
            <Button className={classes.cityButton} color="secondary">
              Dallas
            </Button>
          </NavLink>
          <NavLink to="/city/Houston" className={classes.navLinkRow}>
            <Button className={classes.cityButton} color="secondary">
              Houston
            </Button>
          </NavLink>
          <NavLink to="/city/San Antonio" className={classes.navLinkRow}>
            <Button className={classes.cityButton} color="secondary">
              San Antonio
            </Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}
