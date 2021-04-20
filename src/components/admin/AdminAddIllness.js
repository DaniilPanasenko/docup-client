import React from "react";
import AdminNav from "./AdminNav";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import AddDeviceForm from "./AddDeviceForm";
import AddIllnessForm from "./AddIllnessForm";


function AdminAddIllness(props) {
    return (
        <>
            <Header/>
            <Container className="mt-5">
                <AdminNav/>
                <AddIllnessForm/>
            </Container>
        </>
    );
}
export default AdminAddIllness;