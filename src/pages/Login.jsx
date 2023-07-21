import {useContext, useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {UserContext} from '../UserContext'
import BannerDog from '../assets/images/login.jpg'
import Loading from '../Components/Helper/Loading'

const Login = () => {
  const {login, loading, error, setError} = useContext(UserContext)
  const {state: {idx}} = window.history

  useEffect(() => {
    setError(null)
  }, [idx, setError])

  if (loading) return <Loading />
  if (login) return <Navigate to='/conta' />
  return (
    <div className='grid grid-cols-none sm:grid-cols-2 h-screen sm:gap-8' >
      <div className='hidden sm:block sm:bg-login bg-cover bg-center '></div>
      <Outlet/>
    </div>
  );
};

export default Login
