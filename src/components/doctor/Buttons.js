import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faEdit} from "@fortawesome/free-solid-svg-icons";
import AddUserForm from "../admin/AddUserForm";
import {useSelector} from "react-redux";
import {local} from "../../localization/locales";
import EditForm from "./EditForm";

function Buttons(props) {
    const [showPatient, setShowPatient] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const language = useSelector(state => state.language);

    const handleShowPatient = () => {
        setShowPatient(true);
    };
    const handleShowEdit = () => {
        setShowEdit(true);
    };
    const handleCloseDoctor = () => setShowPatient(false);
    const handleCloseEdit = () => setShowEdit(false);
    return (
        <>
            <Container className="mt-5">
                <Row className="m-auto">
                    <Col>
                        <Button  size="md" variant="info" className="btn-block" onClick={handleShowPatient}>
                            <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            {local(language.language,'patient_upper')}
                        </Button>
                    </Col>
                    <Col>
                        <Button  size="md" variant="warning" className="btn-block" onClick={handleShowEdit}>
                            <FontAwesomeIcon icon={faEdit} className="mr-sm-2"/>
                            {local(language.language,'edit_info')}
                        </Button>
                    </Col>
                </Row>
            </Container>
            <AddUserForm show={showPatient} handleClose = {handleCloseDoctor} accountType='patient'/>
            <EditForm show={showEdit} handleClose = {handleCloseEdit}/>
        </>
    );
}
export default Buttons;