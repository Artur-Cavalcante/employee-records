import axios from 'axios';

export default function authApi() {
    const authApi = axios.create({
        baseURL: 'http://192.168.15.3:3334'
    });

    return authApi;
}