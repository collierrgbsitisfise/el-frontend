import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SecondPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Second page</h1>
        <Link to="/">Home Page</Link>
      </div>
    );
  }
}

export default SecondPage;
