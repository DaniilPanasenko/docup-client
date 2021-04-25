import { combineReducers } from 'redux'
import user from './user'
import message from './message'
import language from "./language";
import list from "./list";
import route from "./route";
import clinic from "./clinic";
import doctor from "./doctor";
import patient from "./patient";
export default combineReducers(
    {
        user:user,
        message:message,
        language:language,
        list:list,
        route:route,
        clinic:clinic,
        doctor:doctor,
        patient:patient
    })