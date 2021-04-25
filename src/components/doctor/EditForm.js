import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {useFormik} from "formik";
import {edit} from "../../api/doctor";

const schemaValidation = Yup.object().shape({
    name: Yup.string().required('Required!'),
    surname: Yup.string().required('Required!'),
    position: Yup.string().required('Required!'),
    phoneNumber: Yup.string().required('Required!'),
});

function EditForm(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const dispatch  = useDispatch();

    const { values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: '',
            surname: '',
            position:'',
            phoneNumber:''
        },
        validationSchema: schemaValidation,
        onSubmit: (values) => {
            dispatch(edit(user.token,{
                name:values.name,
                surname:values.surname,
                phoneNumber:values.phoneNumber,
                position:values.position
            }));
            dispatch(props.handleClose());
        }
    });

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{local(language.language,'edit')+" "+local(language.language,'doctor')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{local(language.language,'pname')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_pname')}
                            value={values.name}
                            name="name"
                            onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>{local(language.language,'surname')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_surname')}
                            value={values.surname}
                            name="surname"
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
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>{local(language.language,'position')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_position')}
                            value={values.position}
                            name="position"
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