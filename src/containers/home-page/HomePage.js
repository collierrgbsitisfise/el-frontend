import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLink } from "../../actions/link";
import CONGIF from "../../config";

import "./home-page.css";

const LINK_REG_EXP = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

class HomePage extends React.Component {
  
  componentDidMount(){
    // this.nameInput.focus();
  }
  
  constructor(props) {
    super(props)
    this.state = {
      link: '',
    }
  }
  
  formatShortLink = hash => {
    return `${CONGIF.API_ENDPOINT}/${hash}`
  }
  
  handleChange = e => this.setState({
    link: e.target.value
  });

  copyTextToClipboard = selector => {
    let cpoyText = document.getElementsByTagName("h4")[0];
    let range = document.createRange();
    range.selectNode(cpoyText);
    window.getSelection().addRange(range);
    try {
      let res = document.execCommand('copy');
    } catch (err) {
    }
  }
  
  render () {
    
    const {
      getLink,
      shortLink
    } = this.props;

    
    return (
      <div className="home-page">
        {
          (shortLink.status === "FINISHED" &&
           shortLink.error === false) && 
          (
            <div id="top">
              <h4 className="result-link">{this.formatShortLink(shortLink.data.shortLinkHash)}</h4>
            </div>
          )
        }
        <input
          value={this.state.link}
          onChange={this.handleChange}
          ref={(input) => {this.nameInput = input; }}
          type="text"
          className="link-input"
          placeholder="Enter Link Address"/>
          {
            LINK_REG_EXP.test(this.state.link) ? 
              (
                <button
                  onClick={() => {
                    getLink(this.state.link);
                  }}
                  className={"btn action " + (!this.state.link ? 'not-visible' : '')}>
                    get short link
                </button>
              ) :
              (
                <button
                  onClick={() => {
                    console.log('it is state');
                    console.log(this.state.link);
                  }}
                  className={"btn incorrect " + (!this.state.link ? 'not-visible' : '')}>
                    Incorrect Link
                </button>
              )
          }
          {
            (shortLink.status === "FINISHED" &&
            shortLink.error === false) && 
            (
              <div id="bottom" onClick={ () => this.copyTextToClipboard('.result-link')}>
                <h4>COPPY TO CLI BORD</h4>
              </div>
            )
          }
      </div>
    ); 
  }

}

HomePage.propTypes = {
  getLink: PropTypes.func.isRequired,
  shortLink: PropTypes.any
};

function mapStateToProps(state) {
  return {
    shortLink: state.link
  };
}

export default connect(mapStateToProps, { getLink })(HomePage);
