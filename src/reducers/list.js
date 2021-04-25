import {
    SET_LIST_ILLNESSES, SET_LIST_NOTIFICATIONS,
    SET_LIST_USERS
} from '../actions/types'


const initialState = {
    users:null,
    illnesses:null,
    notifications:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_USERS:
            return {
                ...state,
                users:action.payload
            };
        case SET_LIST_ILLNESSES:
            return {
                ...state,
                illnesses:action.payload
            };
        case SET_LIST_NOTIFICATIONS:
            return {
                ...state,
                notifications:action.payload
            };
        default:
            return state
    }
}