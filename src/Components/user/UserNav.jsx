import {useState, useContext, useEffect} from 'react'
import {NavLink, useNavigate, useLocation} from 'react-router-dom'
import {UserContext} from '../../UserContext'
import useMedia from '../../hooks/useMedia'
import {ReactComponent as Estatisticas} from '../../assets/svgs/estatisticas.svg'
import {ReactComponent as MinhasFotos} from '../../assets/svgs/feed.svg'
import {ReactComponent as Sair} from '../../assets/svgs/sair.svg'
import {ReactComponent as Adicionar} from '../../assets/svgs/adicionar.svg'


const Navegar = ({to, svg, children, isMobile, ...props}) => {

  return (
    <NavLink className={`${isMobile ? 'user-btns-mobile' : 'user-btns'}`} to={to} {...props}>
      {svg}
      {isMobile && children}
    </NavLink>
  )
}

const UserNav = () => {
  const [mobileMenu, setMobileMenu] = useState(null)
  const {userLogout} = useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const handleClick = () => {
    userLogout()
    navigate('/login')
  }

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button className={`user-btn-mobile ${mobileMenu && 'user-btn-mobile-active'}`} aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)} ></button>
      )}
      <nav className={`user-nav ${mobileMenu && 'duration-300 pointer-events-auto opacity-100 z-50'}`}>
        <Navegar to='/conta' svg={<MinhasFotos className='mr-2 sm:mr-0'/>} isMobile={mobile} end>
          Minhas Fotos
        </Navegar>
        <Navegar to='/conta/estatisticas' svg={<Estatisticas className='mr-2 sm:mr-0'/>} isMobile={mobile}>
          Estatisticas
        </Navegar>
        <Navegar to='/conta/postar' svg={<Adicionar className='mr-2 sm:mr-0'/>} isMobile={mobile}>
          Adicionar Foto
        </Navegar>
        <button className={`${mobile ? 'user-btns-mobile border-0' : 'user-btns'}`} onClick={handleClick}>
          <Sair className='mr-2 sm:mr-0'/>
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserNav;