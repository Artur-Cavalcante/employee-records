const { Router } = require('express');
const routes = Router();
const EmployeeAuthenticationController = require('./controllers/EmployeeAuthenticationController');

routes.get('/auth', EmployeeAuthenticationController.signIn)
routes.post('/auth', EmployeeAuthenticationController.signUp)

module.exports = routes;