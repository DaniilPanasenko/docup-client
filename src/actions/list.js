import {
    SET_LIST_ILLNESSES, SET_LIST_NOTIFICATIONS,
    SET_LIST_USERS
} from './types'

export const setListUsers = (list) => ({
    type: SET_LIST_USERS,
    payload: list
});

export const setListIllnesses = (list) => ({
    type: SET_LIST_ILLNESSES,
    payload: list
});
export const setListNotifications = (list) => ({
    type: SET_LIST_NOTIFICATIONS,
    payload: list
});