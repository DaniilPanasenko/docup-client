import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Badge from "react-bootstrap/Badge";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../actions/user";
import {local} from "../../../localization/locales";

function ProfileInfo(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state=>state.language);
    const dispatch  = useDispatch();

    const getColor=(role)=>{
        if(role==='admin')return 'danger';
        if(role==='clinic')return 'warning';
        if(role==='doctor')return 'info';
        if(role==='patient')return 'success';
        if(role==='operator')return 'light';
    };

    const handleLogout=()=>{
        dispatch(logout());
    };

    return (user.isAuthorized?
        (<>
                <Navbar.Text className=" mr-sm-4">
                    <FontAwesomeIcon icon={faUser} className="mr-sm-2"/>
                    <a className=" mr-sm-2">{user.login}</a>
                    <Badge variant={getColor(user.role)}>{local(language.language,user.role)}</Badge>{' '}
                </Navbar.Text>
                <Form inline>
                    <Button variant="info" onClick={handleLogout}>{local(language.language,'logout')}</Button>
                </Form>
            </>):(<></>)
    );
}
export default ProfileInfo;