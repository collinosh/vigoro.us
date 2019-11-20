
/* <Footer /> component by: collinoshaughnessy@gmail.com */

import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
        <div id="LandingTerminal">
          <Nav tabs id="TerminalTabs">
            <NavItem className="terminalItem">
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
                style={{cursor: "pointer"}}
              >
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem className="terminalItem">
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
                style={{cursor: "pointer"}}
              >
                CONTACT ME
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="tabContents" activeTab={this.state.activeTab}>
            <TabPane className="tabPane" tabId="1">
              Welcome, and thank you for viewing my personal website.
              <br /><br />
              This website was built on ReactJS, using Javascript, HTML, CSS, JSX, React-Router, Reactstrap, React-Helmet and Sass. I constructed it to look and feel like navigating through VSCode. As such, it can be navigated through the 'Explorer' tab on the lefthand side of the screen.
              You can check out the source at my Github Repo, the link can be found at the top right of the page, along with my LinkedIn.
            </TabPane>
            <TabPane className="tabPane" tabId="2">
              For independent project consultations, please contact me at <span className="emphasis">collin.oshaughnessy@auxidus.com</span>. For all other inquiries, please direct your messages to <span className="emphasis">collinoshaughnessy@gmail.com</span>. <br/>
              Thank you for visiting, I hope for the opportunity to connect with you soon.
            </TabPane>
          </TabContent>
        </div>
    );
  }
}

export default Footer;