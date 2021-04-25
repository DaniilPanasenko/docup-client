import {
    SET_CLINIC_DOCTORS,
    SET_CLINIC_INFO
} from '../actions/types'


const initialState = {
    info:null,
    doctors:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CLINIC_INFO:
            return {
                ...state,
                info: action.payload
            };
        case SET_CLINIC_DOCTORS:
            return {
                ...state,
                doctors: action.payload
            };
        default:
            return state
    }
}