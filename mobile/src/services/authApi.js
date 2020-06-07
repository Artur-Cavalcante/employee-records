import axios from 'axios';

export default function authApi() {
    const authApi = axios.create({
        baseURL: 'https://employee-records-auth.herokuapp.com'
    });

    return authApi;
}