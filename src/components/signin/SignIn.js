import React from "react";

import Header from "./../layout/header/Header";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"

function SignIn(props) {
    return (
        <>
            <Header/>
            <Container className="mt-5">
                <Card className="col-5 p-0 m-auto my-auto">
                    <Card.Header className="text-center"><h4>Sign In</h4></Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Login</Form.Label>
                                <Form.Control placeholder="Enter login" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button variant="info" className="px-5">Sign In</Button>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
}

export default SignIn;