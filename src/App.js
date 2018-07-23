import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./containers/home-page/HomePage";
import SecondPage from "./containers/second-page/SecondPage";
import ProxyPage from "./containers/proxy/proxy-page";

import './app.css';

const App = ({ location }) => (
  <div className="main-wrapper">
    <Route location={location} path={`/`} exact component={HomePage} />
    <Route location={location} path={`/second-page`} component={SecondPage}/>
    <Route location={location} path={`/proxy`} component={ProxyPage}/>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
};

export default App;
