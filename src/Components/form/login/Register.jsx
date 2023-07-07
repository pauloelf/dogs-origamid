import { useContext } from 'react'
import Input from '../Input'
import Button from '../Button'
import {UserContext} from '../../../UserContext'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validateForm = yup.object().shape({
  username: yup.string().required('Preencha um valor'),
  email: yup.string().email('Escreva um email válido').required('Preencha um valor'),
  password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('Preencha um valor')
})

const Register = () => {
  const {loading, error, userCreate} = useContext(UserContext)
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validateForm)
  });

  const sendUser = data => {
    userCreate(data)
  }

  return (
    <section className='flex flex-col p-4 mt-[20vh] max-w-full sm:max-w-lg animate-left' >
      <h1 className='title' >Cadastre-se</h1>
      <form className='grid mb-8' onSubmit={handleSubmit(sendUser)} >
        <Input type='text' label='Usuário' name='username' erro={errors.username?.message} reg={register} />
        <Input type='text' label='Email' name='email' erro={errors.email?.message} reg={register} />
        <Input type='password' label='Senha' name='password' erro={errors.password?.message} reg={register} />
        <Button disabled={loading}>Enviar</Button>
        {error && <p className='text-sm text-[#f31] mt-4' >{error}</p>}
      </form>
    </section>
  );
};

export default Register
