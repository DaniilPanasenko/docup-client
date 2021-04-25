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
    const [showDoctor, setShowDoctor] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const language = useSelector(state => state.language);

    const handleShowDoctor = () => {
        setShowDoctor(true);
    };
    const handleShowEdit = () => {
        setShowEdit(true);
    };
    const handleCloseDoctor = () => setShowDoctor(false);
    const handleCloseEdit = () => setShowEdit(false);
    return (
        <>
            <Container className="mt-5">
                <Row className="m-auto">
                    <Col>
                        <Button  size="md" variant="info" className="btn-block" onClick={handleShowDoctor}>
                            <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                            {local(language.language,'doctor_upper')}
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
            <AddUserForm show={showDoctor} handleClose = {handleCloseDoctor} accountType='doctor'/>
            <EditForm show={showEdit} handleClose = {handleCloseEdit}/>
        </>
    );
}
export default Buttons;