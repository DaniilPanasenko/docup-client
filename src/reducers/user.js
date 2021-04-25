import {
    LOGOUT,
    SET_USER
} from '../actions/types'

const initialState = {
    isAuthorized: localStorage.getItem('token')!=null,
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role'),
    login: localStorage.getItem('login')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('role', action.payload.role);
            localStorage.setItem('login', action.payload.login);
            return {
                ...state,
                isAuthorized: true,
                token: action.payload.token,
                role: action.payload.role,
                login: action.payload.login
            };
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                isAuthorized: false,
                token: null,
                role: null,
                login: null
            };
        default:
            return state
    }
}
