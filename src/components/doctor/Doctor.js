import React, {useEffect} from "react";
import Header from "../layout/header/Header";
import {useDispatch, useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import {info} from "../../api/doctor";
import Info from "./Info";
import Buttons from "./Buttons";
import TablePatients from "./TablePatients";


function Doctor(props) {
    const user = useSelector(state => state.user);
    const dispatch  = useDispatch();

    useEffect(()=> {
        dispatch(info(user.token));
    },[]);

    return (
        <>
            <Header />
            <Container className="mt-5">
                <Info/>
                <Buttons/>
                <TablePatients/>
            </Container>
        </>
    );
}
export default Doctor;