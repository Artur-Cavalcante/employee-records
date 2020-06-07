import RouteRedirectLogin from '../../../utils/RouteRedirectLogin';
import setGetToken from '../../../utils/setGetToken';
import backendApi from '../../../services/backendApi';

export default async function getEmployee(params) {
    params.setShowSpinner(true);
    let token = await setGetToken('token');
    await backendApi()
        .get('/api/employee/' + `${params.employeeCpf}`,{
            headers: { authorization: token }
        }, {
            timeout: 10000
        })
        .then((resp) => {
            params.setShowSpinner(false);
            if (resp.data) {
                params.setEditColor('#000000');
                params.setEmployeeInfo(resp.data);
                params.setShowResponseBox(false);
                params.setShowForm(true);
                params.setShowSpinner(false);
            } else {
                params.setShowResponseBox(false);
                params.setShowSpinner(false);
                params.setEditColor('#000000');
            }
        })
        .catch((error) => {
            params.setShowForm(false);
            params.setEmployeeInfo(''); //Remove Older Information
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        params.setRequestErrorCode('Authentication Error, \nRedirecting to Login...')
                        params.setShowSpinner(false);
                        params.setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        params.setShowResponseBox(true);
                        params.setEditColor('#000000');
                        break;
                    case 403:
                        params.setRequestErrorCode('Session Expired, \nRedirecting to Login...')
                        params.setShowSpinner(false);
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        params.setShowResponseBox(true);
                        params.setEditColor('#000000');
                        break;
                    case 404:
                        params.setShowResponseBox(false);
                        params.setErrorTextCpf('User not found');
                        params.setShowSpinner(false);
                        params.setEditColor('#000000');
                        break;
                    case 500:
                        params.setRequestErrorCode('Server Error, Try Again');
                        params.setShowSpinner(false);
                        params.setShowResponseBox(true);
                        params.setEditColor('#000000');
                        break;
                    default:
                        params.setRequestErrorCode('Server not Reached,  Try Again');
                        params.setShowSpinner(false);
                        params.setShowResponseBox(true);
                        params.setEditColor('#000000');

                }
            } else {
                params.setShowSpinner(false);
                params.setRequestErrorCode('Server not Reached, Try Again');
                params.setShowResponseBox(true);
                params.setEditColor('#000000');

            };

        });
};