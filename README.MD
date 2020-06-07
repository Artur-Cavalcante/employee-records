### Employee Records's Backend Server 

<div>
    <img src="https://img.shields.io/badge/dynamic/json?color=sucess&label=Express&query=dependencies.express&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fbackend%2Fpackage.json"/>
    <img src="https://img.shields.io/badge/dynamic/json?color=informational&label=Mongoose&query=dependencies.mongoose&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fbackend%2Fpackage.json"/>
    <img src="https://img.shields.io/badge/dynamic/json?color=important&label=JWT&query=dependencies.jsonwebtoken&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fauth%2Fpackage.json"/>
</div>

#### Backend Server to handle with CRUD for Employee Records application 

---

> If user is authenticate with token, he will to able to use throught of HTTP methods according informations below.

  
HTTP Method  | Endpoint              | Description             | Request Body             | Response Body 
------------ | --------------        | -------------           | ------------------       | ------------------   
GET          | /api/employee         | Get all records         | None                     | All employee records 
GET          | /api/employee:{ cpf } | Get unique record       | None                     | A unique record
PUT          | /api/employee         | Alter a field in record | Employee's cpf and field | None
POST         | /api/employee         | Create a record         | Employee's Informations  | None
DELETE       | /api/employee         | Delete a record         | Employee's Cpf           | None
  

Example Request Body to POST:   

```
    {
	    "name_employee": "Artur",
	    "number_phone_employee": "(79) 999804-1987",
	    "birthday_date_employee": "08/04/2002",
	    "cpf": "000.000.000-00",
	    "contract_date_employee": "01/02/2010",
	    "address_employee": "250 5th Ave, New York, NY 10118, USA",
	    "occupation_employee": "Pizza delivery",
	    "salary_employee": "440.00",
	    "sector_employee": "Delivery",
	    "employee_is_active": "No"
    }
```