import { useState, useEffect } from "react"
import UserNav from "./UserNav"
import { useLocation } from "react-router-dom"

const UserHeader = () => {
  const [title, setTitle] = useState("")
  const { pathname } = useLocation()

  useEffect(() => {
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas")
        break
      case "/conta/postar":
        setTitle("Poste sua Foto")
        break
      default:
        setTitle("Minha Conta")
    }
  }, [pathname])

  return (
    <header className="flex flex-wrap max-w-[50rem] px-4 mx-auto items-center justify-between mb-8 mt-4 relative">
      <h1 className="title">{title}</h1>
      <UserNav />
    </header>
  )
}

export default UserHeader
