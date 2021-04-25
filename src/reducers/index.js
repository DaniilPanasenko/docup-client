import { combineReducers } from 'redux'
import user from './user'
import message from './message'
import language from "./language";
import list from "./list";
export default combineReducers(
    {
        user:user,
        message:message,
        language:language,
        list:list
    })