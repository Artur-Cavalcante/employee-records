function maskInputDate(value){
    return value
            .replace(/\D/g, '')//If not a number, it is remove
            .replace(/(\d{4})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
};

module.exports = maskInputDate ;