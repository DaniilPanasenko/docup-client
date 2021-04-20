import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faPlus} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";


function AdminNav(props) {
    return (
        <Container>
            <Row className="m-auto">
                <Col>
                    <Button  size="md" variant="dark" className="btn-block">
                    <FontAwesomeIcon icon={faUser} className="mr-sm-2"/>
                        Users
                    </Button>
                </Col>
                <Col>
                    <Button  size="md" variant="dark" className="btn-block">
                        <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            Illness
                    </Button>
                </Col>
                <Col>
                    <Button  size="md" variant="dark" className="btn-block">
                        <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            Device
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default AdminNav;