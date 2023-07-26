import React from "react"
import Input from "../Input"
import Button from "../Button"
import { useForm } from "react-hook-form"
import useFetch from "../../../hooks/useFetch"
import { PASSWORD_LOST } from "../../../api"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Head from '../../global/Head'

const validateForm = yup.object().shape({
  login: yup.string().required("Preencha um valor"),
})

const LostPassword = () => {
  const { request, error, data, loading } = useFetch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  })

  const sendUser = async ({ login }) => {
    const { url, options } = PASSWORD_LOST({
      login,
      url: window.location.href.replace("perdeu", "resetar"),
    })
    await request(url, options)
  }

  return (
    <section className="flex flex-col p-4 mt-[20vh] max-w-full sm:max-w-lg animate-left">
      <Head title='Perdeu a senha' />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p className="text-[#4c1]">{data}</p>
      ) : (
        <form className="grid mb-8" onSubmit={handleSubmit(sendUser)}>
          <Input
            type="text"
            label="Email / Usuário"
            name="login"
            erro={errors.login?.message}
            reg={register}
          />
          <Button disabled={loading}>Enviar</Button>
          {error && <p className="text-sm text-[#f31] mt-4">{error}</p>}
        </form>
      )}
    </section>
  )
}

export default LostPassword
