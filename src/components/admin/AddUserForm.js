import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddUserForm(props) {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add {props.accountType}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control placeholder="Enter login" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="text-center">
                <Button variant="info" className="px-5">Add</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default AddUserForm;