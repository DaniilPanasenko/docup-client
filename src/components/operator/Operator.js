import React, {useEffect} from "react";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import {useDispatch, useSelector} from "react-redux";
import Table from "react-bootstrap/Table";
import {local} from "../../localization/locales";
import TableUsersRow from "../admin/TableUsersRow";
import {users} from "../../api/admin";
import {notifications} from "../../api/operator";
import TableNotificationsRow from "./TableNotificationsRow";


function Operator(props) {
    const user = useSelector(state => state.user);
    const language = useSelector(state => state.language);
    const list = useSelector(state=>state.list);
    const dispatch  = useDispatch();

    useEffect(()=> {
            dispatch(notifications(user.token));
    },[]);

    return (
        <>
            <Header />
            <Container className="mt-5">
                <Table striped bordered hover variant="dark" className="mt-5">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>{local(language.language,'phone')}</th>
                        <th>{local(language.language,'message')}</th>
                        <th>{local(language.language,'status')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list.notifications!=null? list.notifications.map((item, index)=><TableNotificationsRow notification={item} index={index+1}/>):null
                    }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
export default Operator;