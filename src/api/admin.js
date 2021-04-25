import {api} from "./api";
import {setListUsers} from "../actions/list";
import {setMessage} from "../actions/message";

export const users = (token) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.get(
        'admin/users',
        {headers:{'Authorization':header}});
    dispatch(setListUsers(response.data));
};

export const blockUser = (token, userId)=>async (dispatch)=>{
    var header = 'Bearer '+token;
    const response = await api.patch(
        'admin/blocked_status/'+userId,
        {},
        {headers:{'Authorization':header}});
    dispatch(users(token));
};

export const addIllness = (token, illness)=>async (dispatch)=>{
    var header = 'Bearer '+token;
    const response = await api.post(
        'admin/ilness',
        illness,
        {headers:{'Authorization':header}});
    dispatch(setMessage({message: 203, isSuccess: true}));
};

export const addDevice = (token, device)=>async (dispatch)=>{
    try {
        var header = 'Bearer ' + token;
        const response = await api.post(
            'admin/device',
            device,
            {headers: {'Authorization': header}});
        dispatch(setMessage({message: 204, isSuccess: true}));
    }
    catch (e) {
        if(e.response.status===409) {
            dispatch(setMessage({message: e.response.data, isSuccess: false}));
        }
    }
};