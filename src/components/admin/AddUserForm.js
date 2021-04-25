import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {useFormik} from "formik";
import {addIllness} from "../../api/admin";
import {register} from "../../api/auth";

const schemaValidation = Yup.object().shape({
    login: Yup.string().required('Required!'),
    //password: Yup.string().required('Required!'),
    email: Yup.string().email().required('Required!')
});

function AddUserForm(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const dispatch  = useDispatch();

    const { values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            login: '',
            email: '',
            password:''
        },
        validationSchema: schemaValidation,
        onSubmit: (values) => {
            dispatch(props.handleClose());
            dispatch(register(user.token, props.accountType,{
                email:values.email,
                login:values.login,
                password:values.password
            }));
        }
    });

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{local(language.language,'add')+" "+local(language.language,props.accountType)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{local(language.language,'email')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_email')}
                            value={values.email}
                            name="email"
                            onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>{local(language.language,'login')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_login')}
                            value={values.login}
                            name="login"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>{local(language.language,'password')}</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder={local(language.language,'enter_password')}
                            value={values.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="text-center">
                <Button variant="info" className="px-5" onClick ={handleSubmit}>{local(language.language,'add')}</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default AddUserForm;