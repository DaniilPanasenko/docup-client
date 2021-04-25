import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Alert from "react-bootstrap/Alert";
import {getMessage} from "../../localization/message";
import {faCheckCircle,faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Message = (props) => {
    const message = useSelector(state => state.message);
    const language = useSelector(state => state.language);
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setShow(true);
        setTimeout(() => setShow(false), 5000);
    },[message]);

    return (
        show && message.message!=null?
            <div style={{
                width: '20%',
                position: 'fixed',
                bottom: 0,
                right:10
            }}>
                {message.isSuccess?
                    <Alert variant="success">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-sm-3"/>
                        {getMessage(language.language,message.message)}
                    </Alert>:
                    <Alert variant="danger">
                        <FontAwesomeIcon icon={faTimesCircle} className="mr-sm-3"/>
                        {getMessage(language.language,message.message)}
                    </Alert>
                }
            </div>
            :null
        );
};