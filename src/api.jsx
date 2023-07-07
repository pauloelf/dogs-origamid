export const API = 'https://dogsapi.origamid.dev/json'

export function	TOKEN_POST(body) {
	return{
		url: API + '/jwt-auth/v1/token',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
		}
	}
}

export function	TOKEN_VALIDATE_POST(token) {
	return{
		url: API + '/jwt-auth/v1/token/validate',
		options: {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		}
	}
}

export function	USER_GET(token) {
	return{
		url: API + '/api/user',
		options: {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		}
	}
}

export function USER_POST(body) {
	return{
		url: API + '/api/user',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
		}
	}
}

export function PASSWORD_LOST(body) {
	return{
		url: API + '/api/password/lost',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
		}
	}
}

export function PASSWORD_RESET(body) {
	return{
		url: API + '/api/password/reset',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
		}
	}
}