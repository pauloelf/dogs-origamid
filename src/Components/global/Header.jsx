import { useContext } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/svgs/dogs.svg"
import { ReactComponent as User } from "../../assets/svgs/usuario.svg"
import { UserContext } from "../../UserContext"

const Header = () => {
  const { data } = useContext(UserContext)

  return (
    <header className="fixed top-0 py-3 h-16 w-full z-10 bg-white shadow shadow-gray-100">
      <nav className="flex max-w-[50rem] px-4 mx-auto justify-between items-center">
        <Link className="py-2" to="/" aria-label="Dogs - Home">
          <Logo />
        </Link>
        {data && data.nome ? (
          <>
            <Link className="flex items-center text-gray-700" to="/conta">
              {data && data.nome}
              <User className="ml-2" />
            </Link>
          </>
        ) : (
          <Link className="flex items-center text-gray-700" to="/login">
            Entrar / Criar <User className="ml-2" />
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
