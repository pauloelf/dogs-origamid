import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import Button from '../Button'
import {UserContext} from '../../../UserContext'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validateForm = yup.object().shape({
	username: yup.string().required('Preencha um valor'),
	password: yup.string().required('Preencha um valor')
})

const Enter = () => {
	const {userLogin, loading, error} = useContext(UserContext)
	const {register, handleSubmit, formState: {errors}} = useForm({
		resolver: yupResolver(validateForm)
	});

	const sendUser = data => {
		userLogin(data)
	}

	return (
		<section className='flex flex-col p-4 mt-[20vh] max-w-full sm:max-w-lg animate-left' >
			<h1 className='title' >Login</h1>
			<>
				<form className='grid mb-8' onSubmit={handleSubmit(sendUser)} >
					<Input type='text' label='Usuário' name='username' erro={errors.username?.message} reg={register} />
					<Input type='password' label='Senha' name='password' erro={errors.password?.message} reg={register} />
					<Button disabled={loading}>Enviar</Button>
					{error && <p className='text-base text-[#f31] mt-4' >{error}</p>}
				</form>
			</>
			<>
				<Link to='/login/perdeu' className='inline-block text-[#666] w-max py-2 after:block after:h-[2px] after:w-full after:bg-current' >Perdeu a senha?</Link>
				<div className='mt-16'>
					<h2 className='font-secondary text-3xl text-[#333] after:block after:h-2 after:w-12 after:bg-gray-300 after:rounded'>Cadastre-se</h2>
					<p className='mt-8 mb-8'>Ainda não possui conta? Cadastre-se no site.</p>
					<Link to='/login/criar' className='btn'>Cadastro</Link>
				</div>
			</>
		</section>
	)
}

export default Enter
