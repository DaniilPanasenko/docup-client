import {
    SET_MESSAGE
} from '../actions/types'


const initialState = {
    message:null,
    isSuccess:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                isSuccess: action.payload.isSuccess
            };

        default:
            return state
    }
}
