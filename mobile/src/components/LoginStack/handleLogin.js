import React from 'react';
import RouteRedirectHome from '../../utils/RouteRedirectHome';

import checkInputError from './checkInputError';
import setGetToken from '../../utils/setGetToken';

import authApi from '../../services/authApi';

export default async function handleLogin(params) {
    if (checkInputError(params.userText, params.passwordText, params.setErrorTextUser, params.setErrorTextPassword)) {
        params.setShowSpinner(true);
        await authApi()
            .post('/auth/signIn', {
                'user': params.userText,
                'password': params.passwordText
            }, {
                timeout: 10000
            })
            .then(async (resp) => {
                //User Authorized
                params.setShowSpinner(false);
                if (resp.headers.authorization) {
                    await setGetToken('token', resp.headers.authorization);
                }
                params.setRedirect(<RouteRedirectHome token={resp.headers.authorization} />);
            })
            .catch((error) => {
                console.log(error)
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            //Wrong password
                            params.setErrorTextPassword('Wrong Password');
                            params.setShowSpinner(false);
                            break
                        case 403:
                            //User Not registred
                            params.setErrorTextUser('User not Registred');
                            params.setShowSpinner(false);
                            break;
                        case 500:
                            //Server Error
                            params.setErrorTextUser('Server Error')
                            params.setShowSpinner(false);
                            break;
                        case 408:
                            //Server Timeout
                            params.setErrorTextUser('Server not Reached, Try Again')
                            params.setShowSpinner(false);
                            break;
                        default:
                            params.setErrorTextUser('Server Error');
                            params.setShowSpinner(false);
                    }
                } else {
                    params.setErrorTextUser('Server not Reached, Try Again')
                    params.setShowSpinner(false);
                }
            })
    }

};
