import React, {useEffect} from "react";
import Header from "../layout/header/Header";
import {useDispatch, useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import {info} from "../../api/patient";
import Info from "./Info";
import Buttons from "./Buttons";


function Patient(props) {
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
            </Container>
        </>
    );
}
export default Patient;