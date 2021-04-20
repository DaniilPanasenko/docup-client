import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function AddUsersButtons(props) {
    return (
        <Container>
            <Row className="m-auto">
                <Col>
                    <Button  size="md" variant="info" className="btn-block">
                        <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                        Admin
                    </Button>
                </Col>
                <Col>
                    <Button  size="md" variant="info" className="btn-block">
                        <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                        Operator
                    </Button>
                </Col>
                <Col>
                    <Button  size="md" variant="info" className="btn-block">
                        <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                        Clinic
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default AddUsersButtons;