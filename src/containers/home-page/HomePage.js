import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLink } from "../../actions/link";
import "./home-page.css";

class HomePage extends React.Component {
  
  componentDidMount(){
    this.nameInput.focus();
  }
  
  constructor(props) {
    super(props)
    
  }
  
  render () {
    
    const {
      getLink
    } = this.props;

    return (
      <div className="home-page" onClick={() => {
          getLink('http://google.com');
        }}>
        <input
          ref={(input) => {this.nameInput = input; }}
          type="text"
          className="link-input"
          placeholder="Enter Link Address"/>
          <button className="btn action">
              get short link
          </button>
      </div>
    ); 
  }

}

HomePage.propTypes = {
  getLink: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { getLink })(HomePage);
