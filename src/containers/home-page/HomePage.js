import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLink } from "../../actions/link";
import CONGIF from "../../config";

import "./home-page.css";

const LINK_REG_EXP = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

class HomePage extends React.Component {
  
  componentDidMount(){
    this.nameInput.focus();
  }
  
  constructor(props) {
    super(props)
    this.state = {
      link: '',
      isPrivateOnly: false,
      isOnceAvailable: false,
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

    const privateMode = (
      <div className="container">
        <label htmlFor="private-checkbox">
          <input
            value={this.state.isPrivateOnly} 
            id="private-checkbox"
            type="checkbox"
            name="checkbox"
            onChange={() => {
              this.setState({
                ...this.state,
                isPrivateOnly: !this.state.isPrivateOnly
              });
            }}/>
          <span className="label-text">For private only</span>
        </label>
      </div>
    )

    const onceAvailable = (
      <div className="container">
        <label htmlFor="once-availabel-checkbox" className="once-available-label">
          <input
            value={this.state.isOnceAvailable}
            id="once-availabel-checkbox"
            type="checkbox"
            name="checkbox"
            onChange={() => {
              this.setState({
                ...this.state,
                isOnceAvailable: !this.state.isOnceAvailable
              });
            }}/>
          <span className="label-text">Once available</span>
        </label>
      </div>
    ); 
    
    return (
      <div className="home-page">
        {
          (shortLink.status === "FINISHED" &&
           shortLink.error === false) && 
          (
            <div id="top">
              <a href={this.formatShortLink(shortLink.data.shortLinkHash)} target="_blank">
                <h3 className="result-link">{this.formatShortLink(shortLink.data.shortLinkHash)}</h3>
              </a>
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
          <div className="actions-container">
            {privateMode}
            {onceAvailable}
          </div>
          {
            LINK_REG_EXP.test(this.state.link) ? 
              (
                <button
                  onClick={() => {
                    getLink(this.state.link, this.state.isPrivateOnly, this.state.isOnceAvailable);
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
          {/* {
            (shortLink.status === "FINISHED" &&
            shortLink.error === false) && 
            (
              <div id="bottom" onClick={ () => this.copyTextToClipboard('.result-link')}>
                <h4>COPPY TO CLI BORD</h4>
              </div>
            )
          } */}
          <div  className="modal-window">
            <div>
                <a href="#modal-close" title="Close" className="modal-close">Close</a>
                <h1>Voilà!</h1>
                <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful. <a href="https://twitter.com/timothylong" target="_blank">Say hello on Twitter.</a></div>
            </div>
          </div>
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
