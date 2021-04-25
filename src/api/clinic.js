import {api} from "./api";
import {setClinicDoctors, setClinicInfo} from "../actions/clinic";
import {setMessage} from "../actions/message";

export const info = (token) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.get('clinic/info', {headers:{'Authorization':header}});
    dispatch(setClinicInfo(response.data));
};

export const doctors = (token) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.get('clinic/doctors', {headers:{'Authorization':header}});
    dispatch(setClinicDoctors(response.data));
};

export const edit = (token, data) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.put('clinic/info', data,{headers:{'Authorization':header}});
    dispatch(setMessage({message: 205, isSuccess: true}));
    dispatch(info(token));
};