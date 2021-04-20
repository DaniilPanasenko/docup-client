import React from "react";
import AdminNav from "./AdminNav";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import AddDeviceForm from "./AddDeviceForm";


function AdminAddDevice(props) {
    return (
        <>
            <Header/>
            <Container className="mt-5">
                <AdminNav/>
                <AddDeviceForm/>
            </Container>
        </>
    );
}
export default AdminAddDevice;