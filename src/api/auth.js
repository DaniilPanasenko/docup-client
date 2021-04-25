import {api} from "./api";
import {setUser} from "../actions/user";
import {setMessage} from "../actions/message";

export const login = (userData) => async (dispatch) => {
    try {
        const response = await api.post('auth/login', userData);
        if(response.status === 409) {
            throw response;
        }
        dispatch(setUser(response.data))
    }
    catch (e) {
        dispatch(setMessage({message: e.data, isSuccess:false}));
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
        } else if (role === 'patient') {
            response = await api.post('doctor/patient', user, {headers: {'Authorization': header}});
        }
        if (response != null && response.status === 409) {
            throw response;
        }
    }
    catch (e) {
        dispatch(setMessage({message: e.data, isSuccess:false}));
    }
};