import {api} from "./api";
import {setPatientInfo} from "../actions/patient";
import {setMessage} from "../actions/message";

export const info = (token) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.get('patient/info', {headers:{'Authorization':header}});
    dispatch(setPatientInfo(response.data));
};

export const edit = (token, data) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.put('patient/info', data,{headers:{'Authorization':header}});
    dispatch(setMessage({message: 205, isSuccess: true}));
    dispatch(info(token));
};