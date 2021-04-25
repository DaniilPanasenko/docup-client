import {api} from "./api";
import {setMessage} from "../actions/message";
import {setDoctorInfo, setDoctorPatients} from "../actions/doctor";

export const info = (token) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.get('doctor/info', {headers:{'Authorization':header}});
    dispatch(setDoctorInfo(response.data));
};

export const patients = (token) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.get('doctor/patients', {headers:{'Authorization':header}});
    dispatch(setDoctorPatients(response.data));
};

export const edit = (token, data) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.put('doctor/info', data,{headers:{'Authorization':header}});
    dispatch(setMessage({message: 205, isSuccess: true}));
    dispatch(info(token));
};