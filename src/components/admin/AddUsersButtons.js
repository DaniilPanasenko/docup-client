import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AddUserForm from "./AddUserForm";

function AddUsersButtons(props) {
    const [show, setShow] = useState(false);
    const [accountType, setAccountType] = useState("Admin");

    const handleShow = (type) => {
        setShow(true);
        setAccountType(type);
    };
    const handleClose = () => setShow(false);
    return (
        <>
            <Container>
                <Row className="m-auto">
                    <Col>
                        <Button  size="md" variant="info" className="btn-block" onClick={()=>handleShow("Admin")}>
                            <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            Admin
                        </Button>
                    </Col>
                    <Col>
                        <Button  size="md" variant="info" className="btn-block" onClick={()=>handleShow("Operator")}>
                            <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            Operator
                        </Button>
                    </Col>
                    <Col>
                        <Button  size="md" variant="info" className="btn-block" onClick={()=>handleShow("Clinic")}>
                            <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            Clinic
                        </Button>
                    </Col>
                </Row>
            </Container>
            <AddUserForm show={show} handleClose = {handleClose} accountType={accountType}/>
        </>
    );
}
export default AddUsersButtons;