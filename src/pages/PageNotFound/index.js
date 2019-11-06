/* <404 /> component by: collinoshaughnessy@gmail.com */

import React from "react";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <div id="PageNotFound">
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1 style={{marginTop: "14px"}}>Error Code: <span className="emphasis" style={{color: "darkgreen"}}>404</span>!</h1>
      <p style={{fontFamily: "Source Code Pro", paddingTop: "10px", fontSize: "13px"}}>
        It appears you've reached this page through an error. Sorry about that..
      </p>
    </div>
  );
};

export default PageNotFound;
