const Employee = require('../models/Employee')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = '68dfe874e23514b88da48f07f0eb85e6'

async function index (request, response) {
  const isAuthenticate = jwt.verify(request.token, secretKey, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      // Verfiy 'JsonWebTokenError'
      // Verify 'TokenExpiredError'
      return false
    } else {
      return true
    }
  })

  if (isAuthenticate === true) {
    try {
      const Employees = await Employee.find()
      return response.json(Employees)
    } catch (err) {
      console.log('Error server ->', err)
    }
  } else {
    return response.sendStatus(403)
  }
};

async function show (request, response) {
  const isAuthenticate = jwt.verify(request.token, secretKey, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      // Verfiy 'JsonWebTokenError'
      // Verify 'TokenExpiredError'
      return false
    } else {
      return true
    }
  })

  if (isAuthenticate === true) {
    const { cpf } = request.params

    try {
      let Employee_unique = await Employee.findOne({ cpf })

      // Case not found
      if (Employee_unique === null) {
        Employee_unique = { Aviso: 'Funcionário não Encontrado!' }
        return response.json(Employee_unique)
      }

      return response.json(Employee_unique)
    } catch (err) {
      console.log('Server error ->  ', err)
    }
  } else {
    return response.sendStatus(403)
  }
};

async function store (request, response) {
  const isAuthenticate = jwt.verify(request.token, secretKey, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      // Verfiy 'JsonWebTokenError'
      // Verify 'TokenExpiredError'
      return false
    } else {
      return true
    }
  })

  if (isAuthenticate === true) {
    const {
      name_employee,
      number_phone_employee,
      birthday_date_employee,
      cpf,
      contract_date_employee,
      address_employee,
      occupation_employee,
      salary_employee,
      sector_employee,
      employee_is_active
    } = request.body

    try {
      let new_employee = await Employee.findOne({ cpf })

      if (!new_employee) {
        new_employee = await Employee.create({
          name_employee,
          number_phone_employee,
          birthday_date_employee,
          cpf,
          contract_date_employee,
          address_employee,
          occupation_employee,
          salary_employee,
          sector_employee,
          employee_is_active
        })
      } else {
        new_employee = { Aviso: 'Usuário já cadastrado' }
      };

      return response.json(new_employee)
    } catch (err) {
      console.log('Server error ->  ', err)
    }
  } else {
    return response.sendStatus(403)
  }
};

async function update (request, response) {
  const isAuthenticate = jwt.verify(request.token, secretKey, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      // Verfiy 'JsonWebTokenError'
      // Verify 'TokenExpiredError'
      return false
    } else {
      return true
    }
  })

  if (isAuthenticate === true) {
    // Is obrigatorie the cpf, and other params will to be add
    const { cpf, ...updates } = request.body

    try {
      let update_employee = await Employee.findOne({ cpf })

      if (update_employee) {
        const { name_employee } = await Employee.findOneAndUpdate({ cpf }, updates)
        update_employee = { 'Funcionário Alterado': name_employee }
      } else {
        update_employee = { Aviso: 'Funcionário não encontrado!' }
      };
      return response.json(update_employee)
    } catch (err) {
      console.log('Server error ->  ', err)
    };
  } else {
    return response.sendStatus(403)
  }
};

async function destroy (request, response) {
  const isAuthenticate = jwt.verify(request.token, secretKey, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      // Verfiy 'JsonWebTokenError'
      // Verify 'TokenExpiredError'
      return false
    } else {
      return true
    }
  })

  if (isAuthenticate === true) {
    const { cpf } = request.body
    console.log('Cpf', request.body)

    try {
      let delete_employee = await Employee.findOne({ cpf })

      if (delete_employee) {
        delete_employee = await Employee.findOneAndDelete({ cpf })
      } else {
        delete_employee = { Aviso: 'Funcionário inexistente!' }
      }

      return response.json(delete_employee)
    } catch (err) {
      console.log('Server error ->  ', err)
    };
  } else {
    return response.sendStatus(403)
  }
};

module.exports = { index, show, store, update, destroy }
