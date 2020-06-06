function maskSalary(value){
    return value
            .replace(/\D/g, '')
            .replace(/(\d{1,})(\d{2})/, '$1,$2')
            .replace(/(\d{1,})(\d{3})/, '$1.$2')
            .replace(/(\d{1,})(\d{3})/, '$1.$2')        
}

module.exports = maskSalary ;