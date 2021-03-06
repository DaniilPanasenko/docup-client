import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faPlus} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {changeRoute} from "../../actions/route";


function AdminNav(props) {
    const language = useSelector(state => state.language);
    const  dispatch =useDispatch();

    const handleUsers=()=>{dispatch(changeRoute("/admin/users"))};
    const handleAddIllness=()=>{dispatch(changeRoute("/admin/add_illness"))};
    const handleAddDevice=()=>{dispatch(changeRoute("/admin/add_device"))};
    return (
        <Container>
            <Row className="m-auto">
                <Col>
                    <Button  size="md" variant="dark" className="btn-block" onClick={handleUsers}>
                        <FontAwesomeIcon icon={faUser} className="mr-sm-2"/>
                        {local(language.language,'users')}
                    </Button>
                </Col>
                <Col>
                    <Button  size="md" variant="dark" className="btn-block" onClick={handleAddIllness}>
                        <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                        {local(language.language,'illness')}
                    </Button>
                </Col>
                <Col>
                    <Button  size="md" variant="dark" className="btn-block" onClick={handleAddDevice}>
                        <FontAwesomeIcon icon={faPlus} className="mr-sm-2"/>
                        {local(language.language,'device')}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default AdminNav;