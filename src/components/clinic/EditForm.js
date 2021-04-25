import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {useFormik} from "formik";
import {edit} from "../../api/clinic";

const schemaValidation = Yup.object().shape({
    name: Yup.string().required('Required!'),
    place: Yup.string().required('Required!'),
    phoneNumber: Yup.string().required('Required!')
});

function EditForm(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const clinic = useSelector(state => state.clinic);
    const dispatch  = useDispatch();

    const { values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: '',
            place: '',
            phoneNumber:''
        },
        validationSchema: schemaValidation,
        onSubmit: (values) => {
            console.log('ddd');
            dispatch(edit(user.token,{
                name:values.name,
                place:values.place,
                phoneNumber:values.phoneNumber
            }));
            dispatch(props.handleClose());
        }
    });

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{local(language.language,'edit')+" "+local(language.language,'clinic')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{local(language.language,'name')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_name')}
                            value={values.name}
                            name="name"
                            onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>{local(language.language,'place')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_place')}
                            value={values.place}
                            name="place"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>{local(language.language,'phone')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_phone')}
                            value={values.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="text-center">
                <Button variant="warning" className="px-5" onClick ={handleSubmit}>{local(language.language,'edit')}</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default EditForm;