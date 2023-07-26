import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../form/Input"
import Button from "../form/Button"
import { PHOTO_POST } from "../../api"
import { useForm } from "react-hook-form"
import useFetch from "../../hooks/useFetch"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Head from '../global/Head'

const validateForm = yup.object().shape({
  nome: yup.string().required("Preencha um valor"),
  peso: yup
    .number()
    .required("Preencha um valor")
    .positive("O número deve ser positivo")
    .typeError("Preencha um valor"),
  idade: yup
    .number(false)
    .required("Preencha um valor")
    .positive("O número deve ser positivo")
    .integer("O número deve ser inteiro")
    .typeError("Preencha um valor"),
})

const UserPhotoPost = () => {
  const [img, setImg] = useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateForm),
  })
  const { request, data, error, loading } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    if (data) navigate("/conta")
  }, [data, navigate])

  const sendData = (user) => {
    if (!img.ref) {
      setImg({ ...img, error: "Escolha um arquivo" })
      return true
    }

    const formData = new FormData()
    formData.append("img", img.ref)
    formData.append("nome", user.nome)
    formData.append("peso", user.peso)
    formData.append("idade", user.idade)

    const token = window.localStorage.getItem("token")
    const { url, options } = PHOTO_POST(formData, token)

    request(url, options)
  }

  const handleChange = ({ target }) => {
    if (target.files.length < 1) {
      setImg({
        ref: null,
        preview: null,
        error: "Escolha um arquivo",
      })
      return true
    }

    setImg({
      ref: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
      error: null,
    })
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 p-4 max-w-[50rem] px-4 mx-auto animate-left">
      <Head title='Poste sua foto' />
      <form className="grid mb-8" onSubmit={handleSubmit(sendData)}>
        <Input
          type="text"
          label="Nome"
          name="nome"
          erro={errors.nome?.message}
          reg={register}
        />
        <Input
          type="number"
          label="Peso"
          name="peso"
          erro={errors.peso?.message}
          reg={register}
        />
        <Input
          type="number"
          label="Idade"
          name="idade"
          erro={errors.idade?.message}
          reg={register}
        />
        <input
          type="file"
          name="img"
          id="img"
          onChange={handleChange}
          className="mb-4"
        />
        {img.error && (
          <p className="text-base text-[#f31] -mt-4">{img.error}</p>
        )}
        <Button disabled={loading}>Postar</Button>
        {error && <p className="text-base text-[#f31] mt-4">{error}</p>}
      </form>
      {img.preview && (
        <div
          className={
            "rounded-2xl bg-cover bg-center after:block after:h-0 after:pb-[100%]"
          }
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  )
}

export default UserPhotoPost
