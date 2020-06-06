import axios from 'axios';

import authApi from '../../../services/authApi';

export default async function handleSignUp(params) {
    params.setShowSpinner(true);
    await authApi()
        .post('/auth/signUp', {
            'user': params.userText,
            'password': params.passwordText1
        }, {
            timeout: 10000
        })
        .then(() => {
            params.setShowSpinner(false);
            params.navigation.push('Login');
        })
        .catch((error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 409:
                        //User already created
                        params.setErrorTextUser('User Already Created');
                        params.setShowSpinner(false);
                        break;
                    case 500:
                        params.setErrorTextUser('Server Error');
                        params.setShowSpinner(false);
                        break;
                    default:
                        params.setErrorTextUser('Server Error');
                        params.setShowSpinner(false);
                        break;
                }
            } else {
                params.setErrorTextUser('Server not Reached');
                params.setShowSpinner(false);
            }
        })

};
