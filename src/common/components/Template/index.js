
/* <Template /> component by: collinoshaughnessy@gmail.com */

import React from "react";
import "./Template.scss";
import { Helmet } from "react-helmet";

import ModalContextProvider from "../Modal/context/ModalContextProvider";

import Header from "./Header";
import TabPanel from "./TabPanel";
import Sidebar from "./Sidebar";
import Numbers from "./Numbers";
import Footer from "./Footer";

export default props => {
  return (
    <div id="Template">
      <ModalContextProvider>
        {/*  DOCUMENT HEAD   */}
        <Helmet titleTemplate="%s - Collin O'Shaughnessy" defaultTitle="vigoro.us">
          <meta 
            name="description" 
            content="Homepage for Front-end Developer Collin O'Shaughnessy." 
          />
        </Helmet>
        
        {/* PROJECT TEMPLATE */}
        <Header />
        <TabPanel />
        <div id="HeaderOffset">
          <Sidebar />
          <Numbers />
        </div>
        <div id="SidebarOffset">
          <div id="Body">{props.children}</div>
          <Footer />
        </div>
      </ModalContextProvider>
    </div>
  );
};