const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name_employee: String,
    number_phone_employee: String,
    birthday_date_employee: String,
    cpf: {
        type: String,
        required: true
    },
    contract_date_employee: String,
    address_employee: String,
    occupation_employee: String,
    salary_employee: String,
    sector_employee: String,
    employee_is_active: String,
},
{ collection: 'employee-records' }
);

module.exports = mongoose.model('Employee', EmployeeSchema);
