import { useState, useCallback } from "react"

const useFetch = () => {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const request = useCallback(
    async (url, options) => {
      let response, json

      try {
        setLoading(true)
        setError(null)

        response = await fetch(url, options)
        json = await response.json()

        if (!response.ok) {
          switch (window.location.pathname) {
            case "/login/criar":
              throw new Error("Usuário ou email já cadastrado")
            case "/login/perdeu":
              throw new Error("Usuário não existe")
            case "conta/postar":
              throw new Error("Falha ao postar. Tente novamente")
            default:
              throw new Error(json.message)
          }
        }
      } catch (erro) {
        json = null
        setError(erro.message)
      } finally {
        setData && setData(json)
        setLoading(false)
        return { response, json }
      }
    },
    [setData, setError, setLoading]
  )

  return { request, error, data, loading }
}

export default useFetch
