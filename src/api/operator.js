import {api} from "./api";
import {setListNotifications} from "../actions/list";

export const notifications = (token) => async (dispatch) => {
    var header = 'Bearer '+token;
    const response = await api.get('notifications/unreaded', {headers:{'Authorization':header}});
    dispatch(setListNotifications(response.data));
};

export const read = (token, notificationId)=>async (dispatch)=>{
    var header = 'Bearer '+token;
    const response = await api.get('notifications/read/'+notificationId,{headers:{'Authorization':header}});
    dispatch(notifications(token));
};