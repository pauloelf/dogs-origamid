import { useState, useEffect } from "react"
import Input from "../Input"
import Button from "../Button"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import useFetch from "../../../hooks/useFetch"
import { PASSWORD_RESET } from "../../../api"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Head from "../../global/Head"

const validateForm = yup.object().shape({
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("Preencha um valor"),
})

const ResetPassword = () => {
  const [login, setLogin] = useState("")
  const [key, setKey] = useState("")

  const { request, error, loading } = useFetch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  })
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get("key")
    const login = params.get("login")

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  const sendUser = async (user) => {
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: user.password,
    })
    const { response } = await request(url, options)
    if (response.ok) navigate("/login")
  }

  return (
    <section className="flex flex-col p-4 mt-[20vh] max-w-full sm:max-w-lg animate-left">
      <Head title="Resete sua senha" />
      <h1 className="title">Resete a senha</h1>
      <form className="grid mb-8" onSubmit={handleSubmit(sendUser)}>
        <Input
          type="password"
          label="Nova Senha"
          name="password"
          erro={errors.password?.message}
          reg={register}
        />
        <Button disabled={loading}>Alterar</Button>
        {error && <p className="text-sm text-[#f31] mt-4">{error}</p>}
      </form>
    </section>
  )
}

export default ResetPassword
