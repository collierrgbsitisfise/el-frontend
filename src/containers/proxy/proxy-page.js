import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./proxy-page.css";


class ProxyPage extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
       <div className="proxy-table">
           <div className="header">
               <div>Ip</div>
               <div>Port</div>
               <div>country</div>
           </div>
       </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(ProxyPage);
