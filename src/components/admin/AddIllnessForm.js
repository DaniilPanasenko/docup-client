import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function AddIllnessForm(props) {

    return (
        <Container className="mt-5">
            <Card className="col-7 p-0 m-auto my-auto">
                <Card.Header className="text-center"><h4>Add Illness</h4></Card.Header>
                <Card.Body>
                    <Form>
                        <Container>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Level of critical</Form.Label>
                                <Row>
                                    <Col>
                            <Form.Group controlId="formBasicPassword" >
                                <Form.Label><Badge variant="success">Low</Badge></Form.Label>
                                <Form.Control placeholder="Enter percent" />
                            </Form.Group>
                                        </Col>
                                    <Col>
                            <Form.Group controlId="formBasicPassword" >
                                <Form.Label><Badge variant="warning">Medium</Badge></Form.Label>
                                <Form.Control placeholder="Enter percent" />
                            </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group controlId="formBasicPassword" >
                                        <Form.Label><Badge variant="danger">High</Badge></Form.Label>
                                        <Form.Control placeholder="Enter percent" />
                                    </Form.Group>
                                        </Col>
                                </Row>
                        </Form.Group>
                            </Container>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="info" className="px-5">Add</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}
export default AddIllnessForm;