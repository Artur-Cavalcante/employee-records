import setGetToken from '../../../utils/setGetToken';

import RouteRedirectLogin from '../../../utils/RouteRedirectLogin';

import backendApi from '../../../services/backendApi';

export default async function getEmployees(params) {
    params.setShowSpinner(true);
    let token = await setGetToken('token');
    await backendApi()
        .get('/api/employee', {
            headers: { authorization: token }
        }, {
            timeout: 10000
        })
        .then((resp) => {
            params.setShowSpinner(false);
            if (resp.data[0]) {
                params.setEmployeeList(resp.data);
            }
        })
        .catch((error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        params.setErrorCode('Authentication Error,\nRedirecting to Login...');
                        params.setShowSpinner(false);
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        break;
                    case 403:
                        params.setErrorCode('Session Expired,\nRedirecting to Login...');
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        params.setShowSpinner(false);
                        break;
                    case 500:
                        params.setErrorCode('Server Error, Try Again');
                        params.setShowSpinner(false);
                        break;
                    default:
                        params.setErrorCode('Server not Reached, Try Again');
                        params.setShowSpinner(false);
                        break;
                }
            } else {
                params.setShowSpinner(false);
                params.setErrorCode('Server not Reached, Try Again')
            }
        });
};