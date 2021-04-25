import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import {local} from "../../localization/locales";


function Info(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const doctor = useSelector(state=>state.doctor);
    const dispatch  = useDispatch();


    return (
        doctor.info!=null?
            <Card
                bg='dark'
                text='light'
                className="mb-2"
            >
                <Card.Header>{local(language.language,'doctor_info')}</Card.Header>
                <Card.Body>
                    <Card.Title> {local(language.language,'login')+": "+doctor.info.login} </Card.Title>
                    <Card.Title> {local(language.language,'email')+": "+doctor.info.email} </Card.Title>
                    <Card.Title> {local(language.language,'pname')+": "+doctor.info.name} </Card.Title>
                    <Card.Title> {local(language.language,'surname')+": "+doctor.info.surname} </Card.Title>
                    <Card.Title> {local(language.language,'phone')+": "+doctor.info.phoneNumber} </Card.Title>
                    <Card.Title> {local(language.language,'position')+": "+doctor.info.position} </Card.Title>
                    <Card.Title> {local(language.language,'clinic_name')+": "+doctor.info.clinicName} </Card.Title>
                </Card.Body>
            </Card>
            :null
    );
}
export default Info;