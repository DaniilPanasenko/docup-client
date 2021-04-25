import React, {useEffect} from "react";
import AdminNav from "./AdminNav";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import TableUsers from "./TableUsers";
import AddUsersButtons from "./AddUsersButtons";
import {useDispatch, useSelector} from "react-redux";


function AdminUsers(props) {
    const user = useSelector(state => state.user);

    useEffect(()=>{
        if(!user.isAuthorized){
            props.history.push("/")
        }
    });

    return (
        <>
            <Header />
            <Container className="mt-5">
                <AdminNav history={props.history}/>
                <TableUsers/>
                <AddUsersButtons/>
            </Container>
        </>
    );
}
export default AdminUsers;