
import React from "react";
import "./MU1.scss";

import {useState} from "react";

export default props => {
    const [issue, setIssue] = useState(true);
    return(
        <>
            <div id="sidebar">                
                <div id="user">
                    <img src={"http://www.fillmurray.com/100/100"} />
                    <span id="name">Bill Murray</span>
                    <span id="email">Los Angeles County</span>
                </div>
                <div id="userCP">
                    <i class="fas fa-cog fa-lg"/>
                    <i class={`fas fa-exclamation-triangle fa-lg ${issue ? "problem" : null}`} />
                    <i class="fas fa-door-open fa-lg"/>
                </div>
                <div id="navComponents">
                    <div className="navItem">
                        <div className="navLeft"><i class="fas fa-globe"/> </div>
                        <div className="navCenter">Site Locations</div>
                        <div className="navRight"><i class="fa fa-caret-right" /></div>
                    </div>
                    <div className="navItem">
                        <div className="navLeft"><i class="fas fa-route"/> </div>
                        <div className="navCenter">Floorplan</div>
                        <div className="navRight"><i class="fa fa-caret-right" /></div>
                    </div>
                </div>
                <div id="logoContainer">
                    <div id="logo">
                        <img 
                            src={require("../dist/IMSlogo.png")} 
                            style={{height: "50px"}}
                        />
                    </div>
                </div>
            </div>
            <div id="page">
                <div id="header">
                    Villa Savona
                </div>
            </div>
        </>
    )
}