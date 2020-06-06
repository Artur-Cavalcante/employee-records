function maskPhoneNumber(value) {
    //(xx) xxxxx-xxxx phone
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');


};

module.exports = maskPhoneNumber;