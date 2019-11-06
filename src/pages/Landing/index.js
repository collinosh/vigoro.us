/* <Landing /> component by: collinoshaughnessy@gmail.com */

import React from "react";
import { Helmet } from "react-helmet";

export default props => {
  return (
    <div style={{paddingRight: "15%"}}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <br/>
      <code>
        {/* Top of Page Comment */}
        <span className="comment">/* Vigoro.us - A project by collinoshaughnessy@gmail.com */</span>
        <br />
        <br />
        {/* Imports */}
        <span className="return">import </span><span className="component">React</span><span className="return"> from </span><span className="source">"react"</span>;
        <br />
        <br />
        {/* Default Export */}
        <span className="return">export default </span> <span className="unused">props </span><span className="code">=> </span>{"{"}
        <div style={{borderLeft: "1px solid grey"}}>
          {/* Return Statement */}
          <span className="return" style={{paddingLeft: "24px"}}>return </span>{"("}
          <br />
          <div style={{marginLeft: "24px", display: "inline-block", borderLeft: "1px solid grey", paddingLeft: "16px"}}>
          {/* Wrapper */}
          <span className="tag" style={{marginLeft: "8px"}}>{"<"}</span><span className="code">div</span><span className="component"> id</span>{"="}<span className="source">{'"'}HomePageWrapper{'"'}</span><span className="tag">></span>
          <div style={{marginLeft: "8px", display: "inline-block", borderLeft: "1px solid grey", paddingLeft: "16px"}}>
            <span className="tag" style={{marginLeft: "8px"}}>{'<'}</span><span className="code">h3</span><span className="tag">{'> '}</span>Hello, my name is Collin O'Shaughnessy.<span className="tag">{' </'}</span><span className="code">h3</span><span className="tag">{'>'}</span>
            <br />
            <span className="tag" style={{marginLeft: "8px"}}>{'<'}</span><span className="code">br </span><span className="tag">{'/>'}</span>
            <br />
            <br />
            {/* Profile Section */}
            <span className="tag" style={{marginLeft: "8px"}}>{'<'}</span><span className="code">profile</span><span className="tag">{'>'}</span>
            <br />
            <div style={{marginLeft: "8px", display: "inline-block", borderLeft: "1px solid grey", paddingLeft: "24px"}}>
              I'm a front end web developer from Los Angeles, California, currently residing in the beautiful Silicon Valley.
              <br />
              <br />
              My career began in 2019 with an Irvine based startup company called Auxidus Technologies, LLC. Since then, I've had the pleasure of working 
              on numerous projects ranging from Mom and Pop business websites, to larger scale user management platforms. I have a passion 
              for developing everything from static webpages to fully interactive web applications.
              <br />
              <br />
              I love working with User Interfaces, and my skillset includes : 
              <ol>
                <li><span className="tag">[Development]</span> HTML, Javascript and CSS.</li>
                <li><span className="tag">[State Management]</span> Function based ReactJS.</li>
                <li><span className="tag">[Styling]</span> Styled-Components, Sass and Bootstrap.</li>
                <li><span className="tag">[Misc]</span> NPM, Yarn, Git and Jira.</li>
              </ol>
              Outside of programming I enjoy lifting weights, playing computer games with my friends and bartending. I even have my own drink, the Collinoscopy!
            </div>
            <br />
            <span className="tag" style={{marginLeft: "8px"}}>{'</'}</span><span className="code">profile</span><span className="tag">{'>'}</span>
          </div>
          <br />
          <span className="tag" style={{marginLeft: "8px"}}>{"</"}</span><span className="code">div</span><span className="tag">></span>
          </div>
          
          <span style={{paddingLeft: "24px"}}>{")"}</span>
      </div>
      {"}"}
      </code>
    </div>
  )
}