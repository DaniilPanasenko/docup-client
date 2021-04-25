import {
    CHANGE_ROUTE
} from './types'

export const changeRoute = (route) => ({
    type: CHANGE_ROUTE,
    payload: route
});