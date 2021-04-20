import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function AddDeviceForm(props) {

    return (
        <Container className="mt-5">
            <Card className="col-5 p-0 m-auto my-auto">
                <Card.Header className="text-center"><h4>Add Device</h4></Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Identifier</Form.Label>
                            <Form.Control placeholder="Enter seria" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Illness</Form.Label>
                            <Form.Control as="select">
                                <option>COVID-19</option>
                                <option>SPID</option>
                                <option>Grip</option>
                                <option>Rak</option>
                                <option>Insult</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="info" className="px-5">Add</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}
export default AddDeviceForm;