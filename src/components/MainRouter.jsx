import React from 'react';

import TopNavBar from './NavBar';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import City from './City';
import NewEntryForm from './NewEntryForm';
import EditEntries from './EditEntries';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import common from '@material-ui/core/colors/common';
let { black, white } = common;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: white,
    },
    secondary: {
      main: black,
    },
  },
  typography: {
    fontFamily: ['Bebas Neue', 'cursive'].join(','),
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function MainRouter() {
  return (
    <ThemeProvider theme={theme}>
      <TopNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/city/:city" component={City} />
        <Route exact path="/newEntry" component={NewEntryForm} />
        <Route exact path="/editEntries" component={EditEntries} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}
