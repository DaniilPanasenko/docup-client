import {
    SET_DOCTOR_PATIENTS,
    SET_DOCTOR_INFO
} from '../actions/types'


const initialState = {
    info:null,
    patients:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DOCTOR_INFO:
            return {
                ...state,
                info: action.payload
            };
        case SET_DOCTOR_PATIENTS:
            return {
                ...state,
                patients: action.payload
            };
        default:
            return state
    }
}