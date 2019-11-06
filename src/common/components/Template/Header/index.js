
/* <Header /> by: collinoshaughnessy@gmail.com */

import React, { Component } from "react";
import { Dropdown, DropdownMenu, DropdownToggle, NavLink, Button } from "reactstrap";
import { NavLink as Reroute } from "react-router-dom";
import { Dialogue } from "../../Modal/components";
import Modal from "../../Modal"; // use type 1

import "./Header.scss";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = { dropdownOpen: false, modalOpen: false };
    }
    toggleDropdown() {
        this.setState(prev => ({ dropdownOpen: !prev.dropdownOpen }));
    }
    toggleModal() {
        this.setState(prev => ({ modalOpen: !prev.modalOpen }));
    }


    render() {
        return(
            <div id="HeaderWrapper">
                {
                    this.state.modalOpen && (
                        <Modal title="Help" onClose={e => this.toggleModal()}>
                            <Dialogue
                                dialogue={`Welcome, and thank you for viewing my personal website.
                                           This website was constructed to feel like navigating through VSCode.
                                           As such, it can be navigated through the 'Explorer' on the lefthand side of the screen.
                                           This site is built on class based ReactJS. Most of my work however, is done through functional based ReactJS.
                                           You can check out the source at my Github Repo. The link is on the top right of this page!`}
                                closeModal={e => this.toggleModal() }
                                onClickHandler={e => this.toggleModal()}
                                type={1}
                            />
                        </Modal>
                    )
                }
                <div id="NavbarContainer">
                    <div className="NavbarItem">
                        <i
                            className="fab fa-react"
                            isOpen={this.state.dropdownOpen}
                            toggle={this.toggleDropdown}
                            style={{marginRight: "10px"}}
                        />
                    </div>
                    <div className="NavbarItem">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                            <DropdownToggle tag="span" onClick={this.toggleDropdown} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
                                Files
                            </DropdownToggle>
                            <DropdownMenu onClick={this.toggleDropdown}>
                                <NavLink tag={Reroute} to="/documents/resume" onClick={this.toggleDropdown}>
                                    Resume
                                </NavLink>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div className="NavbarItem" onClick={() => this.toggleModal()}>
                        Help
                    </div>
                </div>
                <div id="HeaderTitle"><small>Collin O'Shaughnessy</small></div>
                <div id="HeaderLinks">
                    <a href="https://github.com/collinosh" className="NavbarItem SocialBtn"><i className="fab fa-github-alt" /></a>
                    <a href="https://www.linkedin.com/in/collin-o-shaughnessy-bb9bb5b4/" className="NavbarItem SocialBtn"><i className="fab fa-linkedin-in" /></a>
                </div>
            </div>
        )
    }
}