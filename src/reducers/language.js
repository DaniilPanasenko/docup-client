import {
    SET_LANGUAGE
} from '../actions/types'


const initialState = {
    language: 'en'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };

        default:
            return state
    }
}