import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import {local} from "../../localization/locales";


function Info(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const patient = useSelector(state=>state.patient);
    const dispatch  = useDispatch();


    return (
        patient.info!=null?
            <Card
                bg='dark'
                text='light'
                className="mb-2"
            >
                <Card.Header>{local(language.language,'patient_info')}</Card.Header>
                <Card.Body>
                    <Card.Title> {local(language.language,'login')+": "+patient.info.login} </Card.Title>
                    <Card.Title> {local(language.language,'email')+": "+patient.info.email} </Card.Title>
                    <Card.Title> {local(language.language,'pname')+": "+patient.info.name} </Card.Title>
                    <Card.Title> {local(language.language,'surname')+": "+patient.info.surname} </Card.Title>
                    <Card.Title> {local(language.language,'age')+": "+patient.info.age} </Card.Title>
                    <Card.Title> {local(language.language,'address')+": "+patient.info.address} </Card.Title>
                    <Card.Title> {local(language.language,'phone')+": "+patient.info.phoneNumber} </Card.Title>
                    <Card.Title> {local(language.language,'doctor_upper')+": "+patient.info.doctorName} </Card.Title>
                    <Card.Title> {local(language.language,'watcher')+": "+patient.info.watcherName+" "+patient.info.watcherSurname} </Card.Title>
                    <Card.Title> {local(language.language,'watcher_phone')+": "+patient.info.watcherPhoneNumber} </Card.Title>
                    <Card.Title> {local(language.language,'clinic_name')+": "+patient.info.clinicName} </Card.Title>
                </Card.Body>
            </Card>
            :null
    );
}
export default Info;