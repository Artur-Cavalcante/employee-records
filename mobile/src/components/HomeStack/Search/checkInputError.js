import validateCpf from '../../../utils/validateCpf';

export default function checkInputError(employeeCpf, setErrorTextCpf){
    setErrorTextCpf(null);

    if (employeeCpf === '') {
        setErrorTextCpf('Type a CPF');
        return false;
    } else {
        setErrorTextCpf(null);
    };

    if (!(validateCpf(employeeCpf))) {
        setErrorTextCpf('Type a valid CPF');
        return false;
    } else {
        setErrorTextCpf(null);
    };

    return true;
};