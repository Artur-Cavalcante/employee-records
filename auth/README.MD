### Employee Records's Authentication Server 

<div>
    <img src="https://img.shields.io/badge/dynamic/json?color=orange&label=Express&query=dependencies.express&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fauth%2Fpackage.json"/>
    <img src="https://img.shields.io/badge/dynamic/json?color=sucess&label=JWT&query=dependencies.jsonwebtoken&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fauth%2Fpackage.json"/>
    <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=Mongoose&query=dependencies.mongoose&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fauth%2Fpackage.json"/>
</div>


#### Authentication Server using JWT to Employee Records application 

---

> Using HTTP methods in endpoint and paramters in request body, if request is correctly, it will send a response with bearer token in response's header.


HTTP Method  | Endpoint         | Request Body
------------ | --------------   | ------------------
POST         | /auth/signIn     | { user, password }
POST         | /auth/signUp     | { user, password }