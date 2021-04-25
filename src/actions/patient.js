import {
    SET_PATIENT_INFO
} from './types'

export const setPatientInfo = (info) => ({
    type: SET_PATIENT_INFO,
    payload: info
});