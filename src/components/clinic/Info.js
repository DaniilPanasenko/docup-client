import React, {useEffect} from "react";
import Header from "../layout/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {info} from "../../api/clinic";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {local} from "../../localization/locales";


function Info(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const clinic = useSelector(state=>state.clinic);
    const dispatch  = useDispatch();


    return (
        clinic.info!=null?
                <Card
                    bg='dark'
                    text='light'
                    className="mb-2"
                >
                    <Card.Header>{local(language.language,'clinic_info')}</Card.Header>
                    <Card.Body>
                        <Card.Title> {local(language.language,'login')+": "+clinic.info.login} </Card.Title>
                        <Card.Title> {local(language.language,'email')+": "+clinic.info.email} </Card.Title>
                        <Card.Title> {local(language.language,'name')+": "+clinic.info.name} </Card.Title>
                        <Card.Title> {local(language.language,'place')+": "+clinic.info.place} </Card.Title>
                        <Card.Title> {local(language.language,'phone')+": "+clinic.info.phoneNumber} </Card.Title>
                    </Card.Body>
                </Card>
            :null
    );
}
export default Info;