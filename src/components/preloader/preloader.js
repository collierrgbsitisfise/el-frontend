import React from "react";
import "./preloader.css";


class Preloader extends React.Component {

  render() {
    return (
        <div id="loader-wrap" className="loader-wrap">
            <div className="cssload-loader">
                <div className="cssload-side"></div>
                <div className="cssload-side"></div>
                <div className="cssload-side"></div>
                <div className="cssload-side"></div>
                <div className="cssload-side"></div>
                <div className="cssload-side"></div>
                <div className="cssload-side"></div>
                <div className="cssload-side"></div>
            </div>
        </div>
    )
  }
}


export default Preloader
