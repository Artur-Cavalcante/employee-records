const Employee = require('../models/Employee')
const jwt = require('jsonwebtoken')
require('dotenv').config()


async function index (request, response) {
  let errorCode = 0;
  console.log("Env", process.env.SECRET_KEY)
  const isAuthenticate = jwt.verify(request.token, process.env.SECRET_KEY, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error.name)
      if(error.name === 'JsonWebTokenError'){
        errorCode = 400;
      }else{
        errorCode = 403;
      }
      return false;
    } else {
      return true;
    }
  })

  if (isAuthenticate === true) {
    try {
      const Employees = await Employee.find()
      return response.json(Employees)
    } catch (err) {
      return response.sendStatus(500);
    }
  } else {
    return response.sendStatus(errorCode)
  }
};

async function show (request, response) {
  let errorCode = 0;

  const isAuthenticate = jwt.verify(request.token, process.env.SECRET_KEY, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      if(error.name === 'JsonWebTokenError'){
        errorCode = 400;
      }else{
        errorCode = 403;
      }
      return false;
    } else {
      return true;
    }
  })

  if (isAuthenticate === true) {
    const { cpf } = request.params

    try {
      let EmployeeUnique = await Employee.findOne({ cpf })

      // Case not found
      if (EmployeeUnique === null) {
        return response.sendStatus(404);
      }else{
        return response.json(EmployeeUnique);
      }

    } catch (err) {
      console.log('Server error ->  ', err)
      return response.sendStatus(500);
    }
  } else {
    return response.sendStatus(errorCode);
  }
};

async function store (request, response) {
  let errorCode = 0;

  const isAuthenticate = jwt.verify(request.token, process.env.SECRET_KEY, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      if(error.name === 'JsonWebTokenError'){
        errorCode = 400;
      }else{
        errorCode = 403;
      }
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
        await Employee.create({
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

        return response.json(200)
      } else {
        return response.sendStatus(409);
      };
    } catch (err) {
      console.log('Server error ->  ', err);
      return response.sendStatus(500);
    }
  } else {
    return response.sendStatus(errorCode);
  }
};

async function update (request, response) {
  let errorCode = 0;

  const isAuthenticate = jwt.verify(request.token, process.env.SECRET_KEY, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      if(error.name === 'JsonWebTokenError'){
        errorCode = 400;
      }else{
        errorCode = 403;
      }
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
        await Employee.findOneAndUpdate({ cpf }, updates)
        return  response.sendStatus(200);
      } else {
        return response.sendStatus(404);
      };
    } catch (err) {
      console.log('Server error ->  ', err);
      return response.sendStatus(500);
    };
  } else {
    return response.sendStatus(errorCode);
  }
};

async function destroy (request, response) {
  const isAuthenticate = jwt.verify(request.token, process.env.SECRET_KEY, (error) => {
    if (error) {
      console.log('Error VerifyToken ->', error)
      if(error.name === 'JsonWebTokenError'){
        errorCode = 400;
      }else{
        errorCode = 403;
      }
      return false;
    } else {
      return true;
    }
  })

  if (isAuthenticate === true) {
    const { cpf } = request.body

    try {
      let delete_employee = await Employee.findOne({ cpf })

      if (delete_employee) {
        delete_employee = await Employee.findOneAndDelete({ cpf })
        return response.sendStatus(200);
      } else {
        return response.sendStatus(404);
      };
    } catch (err) {
      console.log('Server error ->  ', err);
      return response.sendStatus(500);
    };
  } else {
    return response.sendStatus(errorCode);
  }
};

module.exports = { index, show, store, update, destroy }
