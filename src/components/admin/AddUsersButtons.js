import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AddUserForm from "./AddUserForm";
import {useSelector} from "react-redux";
import {local} from "../../localization/locales";

function AddUsersButtons(props) {
    const [show, setShow] = useState(false);
    const [accountType, setAccountType] = useState("admin");
    const language = useSelector(state => state.language);

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
                        <Button  size="md" variant="info" className="btn-block" onClick={()=>handleShow("admin")}>
                            <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            {local(language.language,'admin_upper')}
                        </Button>
                    </Col>
                    <Col>
                        <Button  size="md" variant="info" className="btn-block" onClick={()=>handleShow("operator")}>
                            <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            {local(language.language,'operator_upper')}
                        </Button>
                    </Col>
                    <Col>
                        <Button  size="md" variant="info" className="btn-block" onClick={()=>handleShow("clinic")}>
                            <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            {local(language.language,'clinic_upper')}
                        </Button>
                    </Col>
                </Row>
            </Container>
            <AddUserForm show={show} handleClose = {handleClose} accountType={accountType}/>
        </>
    );
}
export default AddUsersButtons;