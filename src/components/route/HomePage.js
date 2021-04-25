import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../layout/header/Header";
import {changeRoute} from "../../actions/route";
import SignIn from "../signin/SignIn";
import Operator from "../operator/Operator";
import AdminUsers from "../admin/AdminUsers";
import AdminAddIllness from "../admin/AdminAddIllness";
import AdminAddDevice from "../admin/AdminAddDevice";
import Clinic from "../clinic/Clinic";
import {Message} from "./Message";
import Doctor from "../doctor/Doctor";
import Patient from "../patient/Patient";



function HomePage(props) {
    const user = useSelector(state => state.user);
    const route = useSelector(state=>state.route);
    const dispatch = useDispatch();

    const getRoute = (user) => {
        if(!user.isAuthorized) return "/signin";
        else{
            if(user.role === 'admin') return "/admin/users";
            else if(user.role === 'operator') return "/operator/notifications";
            else if(user.role === 'clinic') return "/clinic/info";
            else if(user.role === 'doctor') return "/doctor/info";
            else if(user.role === 'patient') return "/patient/info";
            else return "/error"
        }
    };

    useEffect(()=>{dispatch(changeRoute(getRoute(user)))},[user]);
    return (
        <>
            {route.route==='/signin'?<SignIn/>:null}
            {route.route==='/operator/notifications'?<Operator/>:null}
            {route.route==='/admin/users'?<AdminUsers/>:null}
            {route.route==='/admin/add_illness'?<AdminAddIllness/>:null}
            {route.route==='/admin/add_device'?<AdminAddDevice/>:null}
            {route.route==='/clinic/info'?<Clinic/>:null}
            {route.route==='/doctor/info'?<Doctor/>:null}
            {route.route==='/patient/info'?<Patient/>:null}
            <Message/>
        </>
    );
}
export default HomePage;