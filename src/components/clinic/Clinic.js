import React, {useEffect} from "react";
import Header from "../layout/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {info} from "../../api/clinic";
import Container from "react-bootstrap/Container";
import Info from "./Info";
import Buttons from "./Buttons";
import TableDoctors from "./TableDoctors";


function Clinic(props) {
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
                <TableDoctors/>
            </Container>
        </>
    );
}
export default Clinic;