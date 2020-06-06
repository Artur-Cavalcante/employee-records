import setGetToken from '../../../utils/setGetToken';
import RouteRedirectLogin from '../../../utils/RouteRedirectLogin';

import backendApi from '../../../services/backendApi';

export default async function deleteEmployee(params) {
    params.setShowResponseBox(false);
    params.setShowSpinner(true);

    let token = await setGetToken('token');

    await backendApi()
        .delete('/api/employee', {
            data: {
                'cpf': params.employeeCpf
            },
            headers: {
                authorization: token
            }
        }, {
            timeout: 10000
        })
        .then((resp) => {
            params.setShowSpinner(false);
            if (resp.status === 200) {
                params.setShowSpinner(false);
                params.setTrashColor('#fc1f4a');
                params.setShowResponseBox(true);
            }
        })
        .catch((error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        params.setErrorRequestMessage('Authentication Error, \nRedirecting to Login...')
                        params.setShowResponseBox(true);
                        params.setTrashColor('#fc1f4a');
                        params.setShowSpinner(false);
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        break;
                    case 403:
                        params.setErrorRequestMessage('Session Expired, \nRedirecting to Login...')
                        params.setShowResponseBox(true);
                        params.setShowSpinner(false);
                        params.setTrashColor('#fc1f4a');
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        break;
                    case 404:
                        params.setErrorTextCpf('User not found');
                        params.setTrashColor('#fc1f4a');
                        params.setShowSpinner(false);
                        break;
                    case 500:
                        params.setErrorRequestMessage('Server Error, Try Again');
                        params.setShowResponseBox(true);
                        params.setTrashColor('#fc1f4a');
                        params.setShowSpinner(false);
                        break;
                    default:
                        params.setErrorRequestMessage('Server not Reached,  Try Again');
                        params.setShowResponseBox(true);
                        params.setTrashColor('#fc1f4a');
                        params.setShowSpinner(false);
                        break;
                }
            } else {
                params.setErrorRequestMessage('Server not Reached, Try Again');
                params.setShowResponseBox(true);
                params.setTrashColor('#fc1f4a');
                params.setShowSpinner(false);
            };
        });

};
