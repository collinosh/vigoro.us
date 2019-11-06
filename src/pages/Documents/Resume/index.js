/* <Landing /> component by: collinoshaughnessy@gmail.com */

import React from "react";
import { Helmet } from "react-helmet";

export default props => {
  return (
    <div style={{paddingRight: "15%"}}>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <br/>
      <code>
        {/* Top of Page Comment */}
        <span className="comment">/* Resume by collinoshaughnessy@gmail.com */</span> <br/>
        <br />
        <h3>Notice</h3>
        <p style={{paddingTop: "2px"}}>Because I'm publishing this to the public, I have temporarily removed my resume. For business inquiries, please contact me at collinoshaughnessy@gmail.com</p>
      </code>
    </div>
  )
}