import axios from 'axios';

export default function backendApi() {
    const backendApi = axios.create({
        baseURL: 'https://employee-records.herokuapp.com'
    });

    return backendApi;
};