import axios from 'axios';

export default function backendApi() {
    const backendApi = axios.create({
        baseURL: 'http://192.168.15.3:3333'
    });

    return backendApi;
};