/* <Sidebar /> component by: collinoshaughnessy@gmail.com */

import React from "react";
import { NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import "./Sidebar.scss";

export default () => {
    return (
      <div id="SidebarWrapper">
        <div id="SidebarAccent" />
        <div id="SidebarContainer">
          <div id="SidebarHeader">EXPLORER</div>
          <div id="SidebarNav">
            <div className="SidebarNavFolder">
              <div className="SidebarNavTitle">
                <i className="Caret fa fa-caret-right" />
                <span className="SidebarFolderText SidebarFolderTitle">
                  HTTP://VIGORO.US/
                </span>
              </div>
            </div>
            {/* == SUBFOLDER == */}
            <div className="SidebarSubFolder">
              <div className="SidebarSubFolderTitle">
                <i className="Caret fa fa-caret-right" />
                <span className="SidebarSubFolderText">About Me</span>
              </div>
              {/* == WITHIN SUBFOLDER == */}
              <NavLink
                exact
                to="/"
                className="SidebarSubFolderItem"
                activeClassName="activeLink"
                tag={RRNavLink}
              >
                <span className="SidebarItemLabel">
                  <i className="LinkOut fa fa-home" />
                  <span className="SidebarItemText"> home.js </span>
                </span>
              </NavLink>
              <NavLink
                to="/projects"
                className="SidebarSubFolderItem"
                activeClassName="activeLink"
                tag={RRNavLink}
              >
                <span className="SidebarItemLabel">
                  <i className="LinkOut fas fa-pencil-ruler" />
                  <span className="SidebarItemText"> projects.js </span>
                </span>
              </NavLink>
            </div>

            {/* <div className="SidebarSubFolder">
              <div className="SidebarSubFolderTitle">
                <i className="Caret fa fa-caret-right" />
                <span className="SidebarSubFolderText">Documents</span>
              </div>

              <NavLink
                to="/documents/resume"
                className="SidebarSubFolderItem"
                activeClassName="activeLink"
                tag={RRNavLink}
              >
                <span className="SidebarItemLabel">
                  <i className="LinkOut fas fa-sticky-note" />
                  <span className="SidebarItemText"> resume.pdf </span>
                </span>
              </NavLink>
            </div> */}

            {/* == SUBFOLDER == */}
            <div className="SidebarSubFolder">
              <div className="SidebarSubFolderTitle">
                <i className="Caret fa fa-caret-right" />
                <span className="SidebarSubFolderText">Information</span>
              </div>
              {/* == WITHIN SUBFOLDER == */}
              <NavLink
                to="/information/readme"
                className="SidebarSubFolderItem"
                activeClassName="activeLink"
                tag={RRNavLink}
              >
                <span className="SidebarItemLabel">
                  <i className="LinkOut readme fas fa-info" />
                  <span className="SidebarItemText"> README.md </span>
                </span>
              </NavLink>
            </div>
            {/* BOTTOM SIDE NAV */}
            {/* <div className="SidebarNavFolder">
              <div className="SidebarNavTitle">
                <i className="fa fa-caret-right" />
                <span className="SidebarFolderText SidebarFolderTitle">OUTLINE</span>
              </div>
            </div>
            <div className="SidebarNavFolder">
              <div className="SidebarNavTitle">
                <i className="fa fa-caret-right" />
                <span className="SidebarFolderText SidebarFolderTitle">NPM SCRIPTS</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
}
