import React, {useEffect} from "react";
import AdminNav from "./AdminNav";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import AddDeviceForm from "./AddDeviceForm";
import AddIllnessForm from "./AddIllnessForm";
import {useSelector} from "react-redux";


function AdminAddIllness(props) {
    const user = useSelector(state => state.user);

    useEffect(()=>{
        if(!user.isAuthorized  || user.role!=='admin'){
            props.history.push("/")
        }
    });

    return (
        <>
            <Header />
            <Container className="mt-5">
                <AdminNav history={props.history}/>
                <AddIllnessForm/>
            </Container>
        </>
    );
}
export default AdminAddIllness;