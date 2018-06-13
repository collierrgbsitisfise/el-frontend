import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import "./home-page.css";

class HomePage extends React.Component {
  
  componentDidMount(){
    this.nameInput.focus();
  }
  
  render () {
    return (
      <div className="home-page">
        <input
          ref={(input) => { this.nameInput = input; }}
          type="text"
          className="link-input"
          placeholder="Enter Link Address"/>
      </div>
    ); 
  }

}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
