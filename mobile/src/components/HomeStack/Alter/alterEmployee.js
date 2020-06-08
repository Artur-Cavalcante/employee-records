import setGetToken from '../../../utils/setGetToken';
import RouteRedirectLogin from '../../../utils/RouteRedirectLogin';

import backendApi from '../../../services/backendApi';

export default  async function alterEmployee(params) {
    let token = await setGetToken('token');
    await backendApi()
        .put('/api/employee', {
            'name_employee': params.nameText,
            'number_phone_employee': params.numberPhoneText,
            'birthday_date_employee': params.dateOfBirthText,
            'cpf': params.cpfText,
            'contract_date_employee': params.contractDate,
            'address_employee': params.addressText,
            'occupation_employee': params.occupationText,
            'salary_employee': params.salaryText,
            'sector_employee': params.sectorText,
            'employee_is_active': params.activeText
        }, {
            headers: {
                authorization: token
            },
            timeout: 10000
        })
        .then(() => {
            params.setRequestErrorCode(false);
            params.setShowForm(false);
            params.setShowResponseBox(true);
        })
        .catch((error) => {
            console.log(error)
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        params.setRequestErrorCode('Authentication Error, \nRedirecting to Login...')
                        params.setShowSpinner(false);
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);

                        params.setShowForm(false);
                        params.setShowResponseBox(true);
                        break;
                    case 403:
                        params.setRequestErrorCode('Session Expired, \nRedirecting to Login...')
                        params.setShowSpinner(false);
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);

                        params.setShowForm(false);
                        params.setShowResponseBox(true);
                        break;
                    case 404:
                        params.setErrorTextCpf('User not found');
                        params.setShowSpinner(false);
                        params.setShowForm(false);

                        break;
                    case 500:
                        params.setRequestErrorCode('Server Error, Try Again');
                        params.setShowSpinner(false);

                        params.setShowResponseBox(true);
                        params.setShowForm(false);
                        break;
                    default:
                        params.setRequestErrorCode('Server not Reached,  Try Again');
                        params.setShowSpinner(false);

                        params.setShowResponseBox(true);
                        params.setShowForm(false);

                }
            } else {
                params.setShowSpinner(false);
                params.setRequestErrorCode('Server not Reached, Try Again');
                params.setShowResponseBox(true);

                params.setShowForm(false);
            };

        });
}