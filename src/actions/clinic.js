import {
    SET_CLINIC_DOCTORS,
    SET_CLINIC_INFO
} from './types'

export const setClinicInfo = (info) => ({
    type: SET_CLINIC_INFO,
    payload: info
});

export const setClinicDoctors = (doctors) => ({
    type: SET_CLINIC_DOCTORS,
    payload: doctors
});