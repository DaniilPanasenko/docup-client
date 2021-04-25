import {local} from "./locales";

export function getMessage(language, message){
    if(typeof message === "number"){
        return local(language, exceptions[message]);
    }
    else return message;
}

const exceptions={
    11:'invalid_login',
    12:'invalid_password',
    21:'login_already_exist',
    22:'email_already_exist',
    23:'user_blocked',
    31:'device_identifier_already_exist',
    32:'device_already_has_user',
    41:'user_already_has_illness',

    201:'successfully_login',
    202:'user_successfully_created',
    203:'illness_successfully_created',
    204:'device_successfully_registered',
    205:'info_successfully_updated'
};