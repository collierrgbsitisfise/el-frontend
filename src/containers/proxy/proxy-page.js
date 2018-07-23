import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProxy } from "./../../actions/proxy";
import Preloader from "./../../components/preloader/preloader"
import "./proxy-page.css";


class ProxyPage extends React.Component {
  constructor(props) {
      super(props)
  }

  componentDidMount() {
    const {
        getProxy
    } = this.props;

    getProxy();
  }
  render() {
    const {
        proxyList
    } = this.props;

    return (
       <div className="proxy-table">
           {proxyList.status === 'PENDING' && <Preloader/>}
           <div className="header">
               <div>Ip</div>
               <div>Port</div>
               <div>country</div>
           </div>
           <div className="content">
               {
                proxyList.status === 'FINISHED' && proxyList.data.map((item) => {
                    return (
                        <div className="proxy-row" key={item._id}>
                            <div>{String(item.ip).trim()}</div>
                            <div>{String(item.port).trim()}</div>
                            <div>{String(item.country).trim()}</div>
                        </div>
                    )
                })
               }
           </div>
       </div>
    )
  }
}


ProxyPage.propTypes = {
    getProxy: PropTypes.func.isRequired
};
  
function mapStateToProps(state) {
  return {
    proxyList: state.proxy
  };
}

export default connect(mapStateToProps, { getProxy })(ProxyPage);
