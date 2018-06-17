import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./containers/home-page/HomePage";
import SecondPage from "./containers/second-page/SecondPage";

import './app.css';

const App = ({ location }) => (
  <div className="main-wrapper">
    <Route location={location} path={`${process.env.PUBLIC_URL}/`} exact component={HomePage} />
    <Route location={location} path={`${process.env.PUBLIC_URL}/second-page`} component={SecondPage}/>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
};

export default App;
