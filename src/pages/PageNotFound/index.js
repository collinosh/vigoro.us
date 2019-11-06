/* <404 /> component by: collinoshaughnessy@gmail.com */

import React from "react";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <div id="PageNotFound">
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1> 404: Placeholder </h1>
    </div>
  );
};

export default PageNotFound;
