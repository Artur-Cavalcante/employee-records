### Employee Records's Authentication Server 

#### Authentication Server using JWT to Employee Records application 

---

> Using https methods in endpoint and paramters in request body, if request is correctly, it will send a response with bearer token in response's header.


HTTP Method  | Endpoint         | Request Body
------------ | --------------   | ------------------
POST         | /auth/signIn     | { user, password }
POST         | /auth/signUp     | { user, password }