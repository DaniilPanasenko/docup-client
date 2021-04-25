import {
    SET_DOCTOR_INFO,
    SET_DOCTOR_PATIENTS
} from './types'

export const setDoctorInfo = (info) => ({
    type: SET_DOCTOR_INFO,
    payload: info
});

export const setDoctorPatients = (patients) => ({
    type: SET_DOCTOR_PATIENTS,
    payload: patients
});