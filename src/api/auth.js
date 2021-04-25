import {api} from "./api";
import {setUser} from "../actions/user";
import {setMessage} from "../actions/message";
import {users} from "./admin";
import {doctors} from "./clinic";
import {patients} from "./doctor";

export const login = (userData) => async (dispatch) => {
    try {
        const response = await api.post('auth/login', userData);
        dispatch(setUser(response.data));
        dispatch(setMessage({message: 201, isSuccess: true}));
    }
    catch(e){
        if(e.response.status===409) {
            dispatch(setMessage({message: e.response.data, isSuccess: false}));
        }
    }
};

export const register=(token, role, user)=>async (dispatch) =>{
    try {
        var header = 'Bearer ' + token;
        let response;
        if (role === 'admin') {
            response = await api.post('admin/admin', user, {headers: {'Authorization': header}});
        } else if (role === 'clinic') {
            response = await api.post('admin/clinic', user, {headers: {'Authorization': header}});
        } else if (role === 'operator') {
            response = await api.post('admin/operator', user, {headers: {'Authorization': header}});
        } else if (role === 'doctor') {
            response = await api.post('clinic/doctor', user, {headers: {'Authorization': header}});
            dispatch(doctors(token));
        } else if (role === 'patient') {
            response = await api.post('doctor/patient', user, {headers: {'Authorization': header}});
            dispatch(patients(token));
        }
        dispatch(setMessage({message: 202, isSuccess: true}));
        dispatch(users(token));
    }
    catch (e) {
        if(e.response.status===409) {
            dispatch(setMessage({message: e.response.data, isSuccess: false}));
        }
    }
};