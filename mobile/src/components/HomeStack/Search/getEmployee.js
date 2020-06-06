import setGetToken from '../../../utils/setGetToken';
import RouteRedirectLogin from '../../../utils/RouteRedirectLogin';

import backendApi from '../../../services/backendApi';

export default async function getEmployee(params) {
    params.setShowSpinner(true);
    let token = await setGetToken('token');
    await backendApi()
        .get('/api/employee/' + `${params.employeeCpf}`, {
            headers: { authorization: token }
        }, {
            timeout: 10000
        })
        .then((resp) => {
            params.setShowSpinner(false);
            if (resp.data) {
                params.setShowRequestErrorCode(false);
                params.setEmployeeInfo(resp.data);
                params.setShowEmployee(true);
                params.setShowSpinner(false);
                params.setSearchColor('#000000');
            } else {
                params.setShowRequestErrorCode(false);
                params.setShowSpinner(false);
                params.setSearchColor('#000000');
            };
        })
        .catch((error) => {
            params.setShowEmployee(false);
            params.setEmployeeInfo(''); //Remove Older Information
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        params.setRequestErrorCode('Authentication Error, \nRedirecting to Login...')
                        params.setShowSpinner(false);
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        params.setSearchColor('#000000');
                        params.setShowRequestErrorCode(true);
                        break;
                    case 403:
                        params.setRequestErrorCode('Session Expired, \nRedirecting to Login...')
                        params.setShowSpinner(false);
                        setTimeout(() => { setRedirect(<RouteRedirectLogin />) }, 3000);
                        params.setSearchColor('#000000');
                        params.setShowRequestErrorCode(true);
                        break;
                    case 404:
                        params.setShowRequestErrorCode(false);
                        params.setErrorTextCpf('User not found');
                        params.setShowSpinner(false);
                        params.setSearchColor('#000000');
                        break;
                    case 500:
                        params.setRequestErrorCode('Server Error, Try Again');
                        params.setShowSpinner(false);
                        params.setSearchColor('#000000');
                        params.setShowRequestErrorCode(true);
                        break;
                    default:
                        params.setRequestErrorCode('Server not Reached,  Try Again');
                        params.setShowSpinner(false);
                        params.setSearchColor('#000000');
                        params.setShowRequestErrorCode(true);
                }
            } else {
                params.setShowSpinner(false);
                params.setRequestErrorCode('Server not Reached, Try Again');
                params.setShowRequestErrorCode(true);
                params.setSearchColor('#000000');
            };
        });
};