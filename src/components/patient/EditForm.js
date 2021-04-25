import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {local} from "../../localization/locales";
import {useFormik} from "formik";
import {edit} from "../../api/patient";

const schemaValidation = Yup.object().shape({
    name: Yup.string().required('Required!'),
    surname: Yup.string().required('Required!'),
    age: Yup.number().required('Required!'),
    phoneNumber: Yup.string().required('Required!'),
    address: Yup.string().required('Required!'),
    watcherName: Yup.string().required('Required!'),
    watcherSurname: Yup.string().required('Required!'),
    watcherPhoneNumber: Yup.string().required('Required!'),
});

function EditForm(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const dispatch  = useDispatch();

    const { values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: '',
            surname: '',
            age:'',
            phoneNumber:'',
            address: '',
            watcherName: '',
            watcherSurname: '',
            watcherPhoneNumber: '',
        },
        validationSchema: schemaValidation,
        onSubmit: (values) => {
            dispatch(edit(user.token,{
                name:values.name,
                surname:values.surname,
                age:values.age,
                phoneNumber:values.phoneNumber,
                address: values.address,
                watcherName: values.watcherName,
                watcherSurname: values.watcherSurname,
                watcherPhoneNumber: values.watcherPhoneNumber,
            }));
            dispatch(props.handleClose());
        }
    });

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{local(language.language,'edit')+" "+local(language.language,'patient')}</Modal.Title>
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
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>{local(language.language,'age')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_age')}
                            value={values.age}
                            name="age"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>{local(language.language,'address')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_address')}
                            value={values.address}
                            name="address"
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
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{local(language.language,'watcher_name')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_watcher_name')}
                            value={values.watcherName}
                            name="watcherName"
                            onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{local(language.language,'watcher_surname')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_watcher_surname')}
                            value={values.watcherSurname}
                            name="watcherSurname"
                            onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{local(language.language,'watcher_phone')}</Form.Label>
                        <Form.Control
                            placeholder={local(language.language,'enter_watcher_phone')}
                            value={values.watcherPhoneNumber}
                            name="watcherPhoneNumber"
                            onChange={handleChange}/>
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