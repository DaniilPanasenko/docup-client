import {
    SET_USER,
    LOGOUT
} from './types'

export const setUser = (userData) => ({
    type: SET_USER,
    payload: userData
});

export const logout = () => ({
    type: LOGOUT
});

