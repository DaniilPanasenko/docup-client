import React, {useEffect} from "react";

import Header from "./../layout/header/Header";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../api/auth";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {local} from "../../localization/locales";
import language from "../../reducers/language";

const schemaValidation = Yup.object().shape({
    login: Yup.string().required('Required!'),
    password: Yup.string().required('Required!'),
});

function SignIn(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const dispatch  = useDispatch();

    useEffect(()=>{
        if(user.isAuthorized){
            props.history.push("/")
        }
    });

    const { values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: schemaValidation,
        onSubmit: (values) => dispatch(login({login:values.login, password:values.password})),
    });

    return (
        <>
                <Header/>
                <Container className="mt-5">
                    <Card className="col-5 p-0 m-auto my-auto">
                        <Card.Header className="text-center"><h4>{local(language.language,'sign_in')}</h4></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
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
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button
                                variant="info"
                                className="px-5"
                                onClick={handleSubmit}
                            >
                                {local(language.language,'sign_in')}
                            </Button>
                        </Card.Footer>
                    </Card>
                </Container>
            </>
    );
}

export default SignIn;