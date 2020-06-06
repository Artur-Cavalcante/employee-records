import setGetToken from '../../../utils/setGetToken';
import RouteRedirectLogin from '../../../utils/RouteRedirectLogin';

import backendApi from '../../../services/backendApi';

export default async function createEmployee(params) {
    params.setShowResponseBox(false);
    params.setShowSpinner(true);
    let token = await setGetToken('token');

    await backendApi()
        .post('/api/employee', {
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
        .then((resp) => {
            console.log(resp)
            params.setShowSpinner(false);
            if (resp.status === 200) {
                params.setShowSpinner(false);
                params.setShowResponseBox(true);
            }
        })
        .catch((error) => {
            console.log(error)
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        params.setErrorRequestMessage('Authentication Error, \nRedirecting to Login...')
                        params.setShowResponseBox(true);
                        params.setShowSpinner(false);
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        break;
                    case 403:
                        params.setErrorRequestMessage('Session Expired, \nRedirecting to Login...')
                        params.setShowResponseBox(true);
                        params.setShowSpinner(false);
                        setTimeout(() => { params.setRedirect(<RouteRedirectLogin />) }, 3000);
                        break;
                    case 409:
                        params.setErrorCpfText('Cpf Already Registered');
                        params.setShowSpinner(false);
                        break;
                    case 500:
                        params.setErrorRequestMessage('Server Error, Try Again');
                        params.setShowResponseBox(true);
                        params.setShowSpinner(false);
                        break;
                    default:
                        params.setErrorRequestMessage('Server not Reached,  Try Again');
                        params.setShowResponseBox(true);
                        params.setShowSpinner(false);
                        break;
                }
            } else {
                params.setErrorRequestMessage('Server not Reached, Try Again');
                params.setShowResponseBox(true);
                params.setShowSpinner(false);
            };

        });

};