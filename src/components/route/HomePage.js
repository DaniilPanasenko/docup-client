import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";



function HomePage(props) {
    const user = useSelector(state => state.user);

    const getRoute = (user) => {
        console.log(user.role);
        if(!user.isAuthorized) return "/signin";
        else{
            if(user.role === 'admin') return "/admin/users";
            else if(user.role === 'operator') return "/operator/notifications";
            else return "/error"
        }
    };

    useEffect(()=>{props.history.push(getRoute(user))});

    return (
        <></>
    );
}
export default HomePage;