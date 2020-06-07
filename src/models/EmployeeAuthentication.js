const mongoose = require('mongoose');

const EmployeeAuthenticationSchema = new mongoose.Schema({
   user: String,
   password: String
},
{ collection: 'employee-authentication' }
);

module.exports = mongoose.model('EmployeeAuthentication', EmployeeAuthenticationSchema);
