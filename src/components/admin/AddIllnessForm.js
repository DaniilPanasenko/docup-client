import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {useFormik} from "formik";
import {login} from "../../api/auth";
import * as Yup from "yup";
import {addIllness} from "../../api/admin";

const schemaValidation = Yup.object().shape({
    name: Yup.string().required('Required!'),
    watcherCall: Yup.number().positive().min(0).max(100).required(),
    doctorCall: Yup.number().positive().min(0).max(100).required(),
    clinicCall: Yup.number().positive().min(0).max(100).required()
});

function AddIllnessForm(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const dispatch  = useDispatch();

    const { values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: '',
            watcherCall: '',
            doctorCall:'',
            clinicCall:''
        },
        validationSchema: schemaValidation,
        onSubmit: (values) => dispatch(addIllness(user.token, {
            name:values.name,
            watcherCall:values.watcherCall,
            doctorCall:values.doctorCall,
            clinicCall:values.clinicCall
        })),
    });
    return (
        <Container className="mt-5">
            <Card className="col-7 p-0 m-auto my-auto">
                <Card.Header className="text-center"><h4>{local(language.language,'add_illness')}</h4></Card.Header>
                <Card.Body>
                    <Form>
                        <Container>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{local(language.language,'name')}</Form.Label>
                            <Form.Control
                                placeholder={local(language.language,'enter_name')}
                                value={values.name}
                                name="name"
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{local(language.language,'level_of_critical')}</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword" >
                                            <Form.Label><Badge variant="success">{local(language.language,'low')}</Badge></Form.Label>
                                            <Form.Control
                                                placeholder={local(language.language,'enter_percent')}
                                                value={values.watcherCall}
                                                name="watcherCall"
                                                onChange={handleChange}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword" >
                                            <Form.Label><Badge variant="warning">{local(language.language,'medium')}</Badge></Form.Label>
                                            <Form.Control
                                                placeholder={local(language.language,'enter_percent')}
                                                value={values.doctorCall}
                                                name="doctorCall"
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword" >
                                            <Form.Label><Badge variant="danger">{local(language.language,'high')}</Badge></Form.Label>
                                            <Form.Control
                                                placeholder={local(language.language,'enter_percent')}
                                                value={values.clinicCall}
                                                name="clinicCall"
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                        </Form.Group>
                            </Container>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="info" className="px-5" onClick={handleSubmit}>{local(language.language,'add')}</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}
export default AddIllnessForm;