import {
    SET_PATIENT_INFO
} from '../actions/types'


const initialState = {
    info:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PATIENT_INFO:
            return {
                ...state,
                info: action.payload
            };
        default:
            return state
    }
}