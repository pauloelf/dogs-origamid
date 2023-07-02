import { useState, useEffect } from 'react'
import Button from '../Button'
import Input from '../Input'
import {TOKEN_POST, USER_GET} from '../../../api'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validateForm = yup.object().shape({
	username: yup.string().required('O usuário é obrigatório'),
	password: yup.string().required('A senha é obrigatório')
})

const Enter = () => {
	const {register, handleSubmit, formState: {errors}} = useForm({
		resolver: yupResolver(validateForm)
	});

	useEffect(() => {
		const token = window.localStorage.getItem('token')
		if(token) getUser(token)
	},[])

	const	getUser = async token => {
		const	{url, options} = USER_GET(token)
		const response = await fetch(url, options).then(j => j.json())

		console.log(response)
	}

	const sendUser = async data => {
		const	{url, options} = TOKEN_POST(data)
		const {token}	= await	fetch(url, options).then(j => j.json())
		if(token === undefined) return true

		window.localStorage.setItem('token', token)
		getUser(token)
	}

	return (
		<div className='flex flex-col' >
			<h1 className='text-2xl font-semibold' >Login</h1>
			<form className='grid w-fit' action='' onSubmit={handleSubmit(sendUser)} >
				<Input type='text' label='Usuário' name='username' erro={errors.username?.message} reg={register} />
				<Input type='password' label='Senha' name='password' erro={errors.password?.message} reg={register} />
				<Button>Enviar</Button>
			</form>
		</div>
	)
}

export default Enter;
