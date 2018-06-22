import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLink } from "../../actions/link";
import CONGIF from "../../config";

import "./home-page.css";

const LINK_REG_EXP = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

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

    const toogler = (
      <div className="toggle">
        <input type="checkbox" className="check" />
        <b className="b switch"></b>
        <b className="b track"></b>
      </div>
    )
    
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
          <h3>Enbled only in private mode</h3>
          {toogler}
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
