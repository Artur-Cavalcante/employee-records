const md5 = require('md5');
const EmployeeAuthentication = require('../models/EmployeeAuthentication');
const jwt = require('jsonwebtoken');
require("dotenv").config();


async function signIn(request, response) {
	let { user, password } = request.body;

	if (password) {
		password = md5(password);

		try {
			let verifyUser = await EmployeeAuthentication.findOne({ user })
			if (verifyUser) {
				if (verifyUser.password === password) {
					await jwt.sign({ user, password }, process.env.SECRET_KEY, { expiresIn: '2h' }, (error, token) => {
						if (error) {
							//Server Error
							console.log('error', error)

							return response.sendStatus(500);
						} else {
							response.set("Authorization", `Bearer ${token}`)
							//User Authorizated
							return response.sendStatus(200);
						}
					})

				} else {
					//Wrong Password
					return response.sendStatus(400);

				}

			} else {
				//User not Registred
				return response.sendStatus(403);
			}

		} catch (error) {
			//Server Error
			return response.sendStatus(500);
		}
	} else {
		//Password not informed
		return response.sendStatus(400);
	}

}

async function signUp(request, response) {
	let { user, password } = request.body

	if (password) {
		password = md5(password);
		try {

			let new_user = await EmployeeAuthentication.findOne({ user })

			if (!new_user) {
				new_user = await EmployeeAuthentication.create({ user, password });
				//User created
				return response.sendStatus(201);
			} else {
				//User already created
				return response.sendStatus(400)
			}


		} catch (error) {
			//Server Error
			return response.sendStatus(500)
		}
	} else {
		//Password not informed
		return response.sendStatus(400);

	}

}

module.exports = { signIn, signUp }