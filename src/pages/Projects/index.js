/* <Landing /> component by: collinoshaughnessy@gmail.com */

import React from "react";
import { Helmet } from "react-helmet";

export default props => {
  return (
    <div style={{paddingRight: "15%"}}>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <br/>
      <code>
        {/* Top of Page Comment */}
        <span className="comment">/* Projects by collinoshaughnessy@gmail.com */</span>
        <br />
        <br />
        {/* Imports */}
        <span className="return">import </span><span className="component">React</span><span className="return"> from </span><span className="source">"react"</span>; <br/>
        <span className="return">import </span>{"{"}<span className="component">{" AuxidusProjects"}</span>{", "}<span className="component">{" ConsultingProjects "}</span> {"}"}<span className="return"> from </span><span className="source">"work-experience"</span>;
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
          <span className="tag" style={{marginLeft: "8px"}}>{"<"}</span><span className="code">div</span><span className="component"> id</span>{"="}<span className="source">{'"'}ProjectsWrapper{'"'}</span><span className="tag">></span>
          <div style={{marginLeft: "8px", display: "inline-block", borderLeft: "1px solid grey", paddingLeft: "16px"}}>
            {/* Auxidus Section */}
            <span className="tag" style={{marginLeft: "8px"}}>{'<'}</span><span className="code">AuxidusProjects</span><span className="tag">{'>'}</span>
            <br />
            <div style={{marginLeft: "8px", display: "inline-block", borderLeft: "1px solid grey", paddingLeft: "24px"}}>
              Working with an expanding startup has been an incredible learning opportunity for me.
              <br />
              <br />
              We have built the foundation for a growing company that has been profitable since only several months of it launching. Since joining, I have: 
              <ol style={{marginBottom: "0px"}}>
                  <li>Solely designed and developed <a target="_blank" rel="noopener noreferrer" href="https://collinosh.github.io/auxidus/" style={{cursor: "pointer"}} className="emphasis comment">the initial Auxidus Website. </a></li>
                  <li>Contributed to <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/auxidus-components" style={{cursor: "pointer"}} className="emphasis comment">a reusable components library</a> that utilizes TypeScript and Styled-Components.</li>
                  <li>Assisted in converting class based React projects with Redux to function based projects utilizing Hooks and Context APIs.</li> 
              </ol>
            </div>
            <br/>
            <span className="tag" style={{marginLeft: "8px"}}>{'</'}</span><span className="code">AuxidusProjects</span><span className="tag">{'>'}</span>
            <br />
            {/* Consulting Section */}
            <span className="tag" style={{marginLeft: "8px"}}>{'<'}</span><span className="code">ConsultingProjects</span><span className="tag">{'>'}</span>
            <br />
            <div style={{marginLeft: "8px", display: "inline-block", borderLeft: "1px solid grey", paddingLeft: "24px"}}>
              I have also had the pleasure of working on numerous contracts for companies of various sizes, such as:
              <ol style={{marginBottom: "0px"}}>
                  <li>Mount Shasta Ranch B&amp;B</li>
                  <ul>
                      <li><a target="_blank" rel="noopener noreferrer" href="http://mountshastabedandbreakfast.com/" style={{cursor: "pointer"}} className="emphasis comment">Temporary site overhaul using their former technology</a>.</li>
                      <li>Current contract for from-scratch website on React and Gatsby.</li>
                  </ul>
                  <li>Taft Electric</li>
                  <ul>
                      <li>Contributed to front-end development of internal authorization UI.</li>
                  </ul>
              </ol>
            </div>
            <br />
            <span className="tag" style={{marginLeft: "8px"}}>{'</'}</span><span className="code">ConsultingProjects</span><span className="tag">{'>'}</span>
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