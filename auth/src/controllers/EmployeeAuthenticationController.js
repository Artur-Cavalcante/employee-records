const  md5 = require('md5');
const EmployeeAuthentication = require('../models/EmployeeAuthentication');
const jwt = require('jsonwebtoken');

const secretKey = '68dfe874e23514b88da48f07f0eb85e6';

async function signIn(request, response) {
	let { user, password } = request.body;

	password = md5(password);

	try {
		let verifyUser = await EmployeeAuthentication.findOne({ user })
		if (verifyUser){
			if(verifyUser.password === password){
				verifyUser = {'ok': 'ok'}
				
				await jwt.sign({ user, password }, secretKey, { expiresIn: '20s'}, (error, token) => {
					if (error){
						return response.json({'Aviso': `Erro no servidor -> ${error}` })
					}else{
						response.set("Authorization", `Bearer ${token}`)					
						response.json(verifyUser);
					}})

			}else{
				return response.json({'Password': 'Wrong Password'})			
			}
	
		}else{
			response.json({'Aviso': 'Usuário não cadastrado'})
		}
	
	} catch (error) {
		console.log(error)
	}
}

async function signUp(request, response) {
	let { user, password } = request.body
	password = md5(password);

	try {

		let new_user = await EmployeeAuthentication.findOne({ user })

		if (!new_user) {
			new_user = await EmployeeAuthentication.create({ user, password });
		}else{
			new_user = {"Aviso" : "Usuário já cadastrado!"}
		}

		return response.json(new_user);

	} catch (error) {
		console.log('Server error -> ', error)
	}

}

module.exports = { signIn, signUp }