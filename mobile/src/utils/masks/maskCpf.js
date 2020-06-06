function maskCpf(value) {
    //Remove if not number
    return value
        .replace(/\D/g, '');
};

module.exports = maskCpf;