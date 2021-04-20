import React from "react";

import Navbar from "react-bootstrap/Navbar";

import ProfileInfo from "./ProfileInfo";
import LanguageSelector from "./LanguageSelector";

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>DocUp</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <LanguageSelector/>
                <ProfileInfo/>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;