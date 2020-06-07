<div align="center">
    <img  width="220px" height="200px" src="https://raw.githubusercontent.com/Artur-Cavalcante/employee-records/master/mobile/assets/thumb.svg"/>
</div>
<div align="center">
    <img src="https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Expo&query=dependencies.expo&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fmobile%2Fpackage.json"/>
    <img src="https://img.shields.io/badge/dynamic/json?color=sucess&label=Express&query=dependencies.express&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fpackage.json"/>
    <img src="https://img.shields.io/badge/dynamic/json?color=orange&label=JWT&query=dependencies.jsonwebtoken&url=https%3A%2F%2Fraw.githubusercontent.com%2FArtur-Cavalcante%2Femployee-records%2Fmaster%2Fauth%2Fpackage.json"/>
</div>

---

#### Mobile application written in React Native, that handle with Employee Records, using an [Authentication Server](https://github.com/Artur-Cavalcante/employee-records/tree/master/auth) and [Backend Server](https://github.com/Artur-Cavalcante/employee-records/tree/master/backend) written in Node.js, to authentication and the C.R.U.D in the database.

### Image

<div align="center">
    <img width="239px" height="680px"  src="https://raw.githubusercontent.com/Artur-Cavalcante/employee-records/master/mobile/assets/Login.svg"/> 
    <img width="250px" height="680px"  src="https://raw.githubusercontent.com/Artur-Cavalcante/employee-records/master/mobile/assets/Home.svg"/>
</div>

### Flow from Token
    
* 1- Client Get Token 
* 2- Back to Smartphone 
* 3- Send a request with token to Backend server to check it 
* 4- If token ok, backend will to do   C.R.U.D

<div>
    <img  src="https://raw.githubusercontent.com/Artur-Cavalcante/employee-records/master/mobile/assets/diagram.svg"/> 
</div>