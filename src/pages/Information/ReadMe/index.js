/* <ReadMe /> component by: collinoshaughnessy@gmail.com */

import React from "react";
import { Helmet } from "react-helmet";

export default props => {
  return (
    <div style={{paddingRight: "15%"}}>
      <Helmet>
        <title>README</title>
      </Helmet>
      <br/>
      <code>    
            Hello, and thank you for viewing my website repository! <br/><br/>

            Vigoro.us is a project that I've been excited about for quite a while. I love working with user interfaces, and my intention for this project was to showcase my attention to detail using my favorite IDE, Microsoft VSCode, as a design template. The color scheme is derived from the VSCode Dark+ theme, with some alterations based off personal preference. I do not monetize this site, nor was it built in a manner intended to infringe on Microsoft or any their products. <br/> <br/>

            For questions or concerns, please feel free to contact me at collinoshaughnessy@gmail.com
      </code>
    </div>
  )
}