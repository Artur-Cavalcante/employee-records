const { Router } = require('express');
const routes = Router();
const EmployeeAuthenticationController = require('./controllers/EmployeeAuthenticationController');

routes.post('/auth/signIn', EmployeeAuthenticationController.signIn)
routes.post('/auth/signUp', EmployeeAuthenticationController.signUp)

module.exports = routes;