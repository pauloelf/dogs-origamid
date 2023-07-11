import {createContext, useState, useEffect, useCallback} from 'react'
import {USER_GET, USER_POST, TOKEN_POST, TOKEN_VALIDATE_POST} from './api'
import {useNavigate, Navigate} from 'react-router-dom'
import useFetch from './hooks/useFetch'

export const UserContext = createContext()

export const UserStorage = ({children}) => {
	const [data, setData] = useState('')
	const [login, setLogin] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const {request} = useFetch({setLoading, setError})

	const userLogout = useCallback(async () => {
		setData(null)
		setLoading(false)
		setError(null)
		setLogin(false)
		window.localStorage.removeItem('token')
	},[])

	const userCreate = async (user) => {
		const { url, options} = USER_POST(user)
		const { response } = await request(url, options)
		
		if (!response.ok) return null
		await userLogin({username: user.username, password: user.password})
	}

	const userLogin = async (user) => {
		try {
			setLoading(true)
			setError(null)

			const {url, options} = TOKEN_POST(user)
			const response = await fetch(url, options)

			if (!response.ok) throw new Error(`Dados incorretos`)
			const {token} = await response.json()
			window.localStorage.setItem('token', token)

			await getUser(token)
			navigate('/conta')
		} catch (erro) {
			setError(erro.message)
			setLogin(false)
		} finally {
			setLoading(false)
		}
	}

	const getUser = async token => {
		const {url, options} = USER_GET(token)
		const response = await fetch(url, options).then(j => j.json())
		setData(response)
		setLogin(true)
	}

	useEffect(() => {
		const autoLogin = async () => {
			const token = window.localStorage.getItem('token')
			if (token) {
				try {
					setLoading(true)
					setError(null)

					const {url, options} = TOKEN_VALIDATE_POST(token)
					const response = await fetch(url, options)

					if (!response.ok) throw new Error('Token inválido.')
					await getUser(token)
				} catch (erro) {
					userLogout()
				} finally {
					setLoading(false)
				}
			} else {
				setLogin(false)
			}
		}
		autoLogin()
	}, [userLogout])

	return (
		<UserContext.Provider value={{userLogin, data, loading, userLogout, error, setError, login, userCreate, setData, setLoading}}>
			{children}
		</UserContext.Provider>
	)
}