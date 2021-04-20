import React from "react";
import AdminNav from "./AdminNav";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import TableUsers from "./TableUsers";
import AddUsersButtons from "./AddUsersButtons";


function AdminUsers(props) {
    return (
        <>
            <Header/>
            <Container className="mt-5">
                <AdminNav/>
                <TableUsers/>
                <AddUsersButtons/>
            </Container>
        </>
    );
}
export default AdminUsers;