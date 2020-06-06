export default function checkInputError(userText, passwordText, setErrorTextUser, setErrorTextPassword) {
    setErrorTextUser(null);
    setErrorTextPassword(null);

    if (userText === '') {
        setErrorTextUser('Type a user');
        return false;
    } else {
        setErrorTextUser(null);
    }
    if (passwordText === '') {
        setErrorTextPassword('Type a password')
        return false;
    } else {
        setErrorTextPassword(null);
    }
    return true;
};
