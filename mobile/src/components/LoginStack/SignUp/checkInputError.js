export default function checkInputError(params) {
    params.setErrorTextUser(null);
    params.setErrorTextPassword1(null);
    params.setErrorTextPassword2(null);
    if (params.userText === '') {
        params.setErrorTextUser('Type a user');
        return false;
    } else {
        params.setErrorTextUser(null);
    }
    if (params.passwordText1 === '') {
        params.setErrorTextPassword1('Type a password')
        return false;
    } else {
        params.setErrorTextPassword1(null);
    }
    if (params.passwordText2 === '') {
        params.setErrorTextPassword2('Type a password')
        return false;
    } else {
        params.setErrorTextPassword2(null);
    }
    if (params.passwordText1 !== params.passwordText2) {
        params.setErrorTextPassword1('Passwords not match');
        params.setErrorTextPassword2('Passwords not match');
        return false;
    } else {
        params.setErrorTextPassword1(null);
        params.setErrorTextPassword2(null);
    }
    return true
};