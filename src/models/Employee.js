const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name_employee: String,
    number_phone_employee: Number,
    date_birthday_employee: Date,
    cpf: {
        type: String,
        required: true,
        index: true,
    },
    date_contract_employee: Date,
    address_employee: String,
    occupation_employee: String,
    salary_employee: Number,
    sector_employee: String,
    employee_is_active: Boolean,
},
{ collection: 'employee-records' }
);

module.exports = mongoose.model('Employee', EmployeeSchema);
