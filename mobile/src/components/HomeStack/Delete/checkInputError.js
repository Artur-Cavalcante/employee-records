import validateCpf from '../../../utils/validateCpf.js'

export default function checkInputError(params) {
    params.setErrorTextCpf(null);

    if (params.employeeCpf === '') {
        params.setErrorTextCpf('Type a CPF');
        return false;
    } else {
        params.setErrorTextCpf(null);
    };

    if (!(validateCpf(params.employeeCpf))) {
        params.setErrorTextCpf('Type a valid CPF');
        return false;
    } else {
        params.setErrorTextCpf(null);
    };
    return true;
};