const axios = require('axios');

const apiAuthentication = axios.create(
	{
		baseURL: 'http://localhost:3334/auth'
	})

module.exports = { apiAuthentication }