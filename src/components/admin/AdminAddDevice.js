import React, {useEffect} from "react";
import AdminNav from "./AdminNav";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import AddDeviceForm from "./AddDeviceForm";
import {useSelector} from "react-redux";


function AdminAddDevice(props) {
    const user = useSelector(state => state.user);

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