const { Router } = require('express'); 

const EmployeeController = require('./controllers/EmployeeController.js');
const handleTokenMiddleware = require('./middlewares/handleTokenMiddleware');

const routes = Router();
routes.get('/api/employee', handleTokenMiddleware, EmployeeController.index); //All employee
routes.get('/api/employee/:cpf', handleTokenMiddleware, EmployeeController.show); //Employee unique
routes.post('/api/employee', handleTokenMiddleware, EmployeeController.store);
routes.put('/api/employee', handleTokenMiddleware, EmployeeController.update);
routes.delete('/api/employee', handleTokenMiddleware, EmployeeController.destroy);

module.exports = routes;