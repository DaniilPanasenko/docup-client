import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Badge from "react-bootstrap/Badge";

function ProfileInfo(props) {
    return (
            <>
                <Navbar.Text className=" mr-sm-4">
                    <FontAwesomeIcon icon={faUser} className="mr-sm-2"/>
                    <a className=" mr-sm-2">Daniil</a>
                    <Badge variant="danger">admin</Badge>{' '}
                </Navbar.Text>
                <Form inline>
                    <Button variant="info">LogOut</Button>
                </Form>
            </>
    );
}
export default ProfileInfo;