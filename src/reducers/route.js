import {
    CHANGE_ROUTE
} from '../actions/types'


const initialState = {
    route:'/'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return {
                ...state,
                route:action.payload
            };

        default:
            return state
    }
}