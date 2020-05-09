const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app_employee_register = express();

mongoose.connect("mongodb+srv://api:36756933@cluster1-g32cs.mongodb.net/employee?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});

app_employee_register.use(express.json());
app_employee_register.use(cors()); //Add host for connection with this backend.
app_employee_register.use(routes);


const PORT = 3333;
app_employee_register.listen(PORT, () => console.log(`Application Employee Register Running at port ${PORT}`));
