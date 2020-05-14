const md5 = require('md5');
const EmployeeAuthentication = require('../models/EmployeeAuthentication');
const jwt = require('jsonwebtoken');

const secretKey = "68dfe874e23514b88da48f07f0eb85e6";

async function signIn(request, response) {
	let { user, password } = request.body;

	if(password){
		password = md5(password);
		
		try {
			let verifyUser = await EmployeeAuthentication.findOne({ user })
			if (verifyUser) {
				if (verifyUser.password === password) {
					await jwt.sign({ user, password }, secretKey, { expiresIn: '40s' }, (error, token) => {
						if (error) {
							return response.json({
								'Warning': 'Server error ->' + error,
								'ErrorCode': 500
							})
						} else {
							response.set("Authorization", `Bearer ${token}`)
							response.json({
								'User Authorized': user,
								'PassCode': 200 //Alter to send status 
							});
						}
					})
	
				} else {
					return response.json({
						'Password': 'Wrong Password',
						'ErrorCode': 400
					})
				}
	
			} else {
				response.json({
					'Warning': 'User not registred!',
					'ErrorCode': 403
				})
			}
	
		} catch (error) {
			console.log(error);
			response.json({
				'Warning': 'Server error ->' + error,
				'ErrorCode': 500
			})
		}
	}else{
		return response.json({
			'Warning': 'Password not found',
			'ErrorCode': 400
		}) 
	}

}

async function signUp(request, response) {
	console.log('Request body in auth ', request)

	let { user, password } = request.body
	password = md5(password);

	try {

		let new_user = await EmployeeAuthentication.findOne({ user })

		if (!new_user) {
			new_user = await EmployeeAuthentication.create({ user, password });
			return response.json({
				"User Create": new_user,
				"PassCode": 201
			});
		} else {
			return response.json({
				'Warning': 'User already registred!',
				'ErrorCode': 400
			})
		}


	} catch (error) {
		return response.json({
			'Warning': 'Server error ->' + error,
			'ErrorCode': 500
		})
	}

}

module.exports = { signIn, signUp }