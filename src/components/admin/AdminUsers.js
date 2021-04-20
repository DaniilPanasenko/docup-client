import React from "react";
import AdminNav from "./AdminNav";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
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