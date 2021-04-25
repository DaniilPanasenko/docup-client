import axios from 'axios'


export const api = axios.create({
    headers: {"Access-Control-Allow-Origin": true},
    withCredentials: false,
    baseURL: 'https://localhost:5001/api/v1/'
});