import React, {useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {illnesses} from "../../api/info";
import TableUsersRow from "./TableUsersRow";
import * as Yup from "yup";
import {useFormik} from "formik";
import {addDevice, addIllness} from "../../api/admin";

const schemaValidation = Yup.object().shape({
    seria: Yup.number().required('Required!'),
    ilnessId: Yup.number().required()
});

function AddDeviceForm(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const list = useSelector(state=>state.list);
    const dispatch  = useDispatch();


    useEffect(()=> {
            dispatch(illnesses());
    },[]);

    const { values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            seria: '',
            ilnessId: 0
        },
        validationSchema: schemaValidation,
        onSubmit: (values) => dispatch(addDevice(user.token, {
            seria:values.seria,
            ilnessId:values.ilnessId
        })),
    });

    return (
        <Container className="mt-5">
            <Card className="col-5 p-0 m-auto my-auto">
                <Card.Header className="text-center"><h4>{local(language.language,'add_device')}</h4></Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{local(language.language,'id')}</Form.Label>
                            <Form.Control
                                placeholder={local(language.language,'enter_id')}
                                value={values.seria}
                                name="seria"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{local(language.language,'illness')}</Form.Label>
                            <Form.Control
                                as="select"
                                value={values.ilnessId}
                                name="ilnessId"
                                onChange={handleChange}
                            >
                                {
                                    list.illnesses!=null? list.illnesses.map((item)=>
                                        <option value={item.id}>{item.name}</option>):null
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="info" className="px-5" onClick={handleSubmit}>{local(language.language,'add')}</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}
export default AddDeviceForm;