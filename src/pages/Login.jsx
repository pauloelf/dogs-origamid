import {useContext, useEffect} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {UserContext} from '../UserContext'
import BannerDog from '../assets/images/login.jpg'

const Login = () => {
  const {login, loading, error, setError} = useContext(UserContext)
  const {state: {idx}} = window.history

  useEffect(() => {
    setError(null)
  }, [idx, setError])

  if (loading) return (
    <main className='flex h-screen justify-center items-center'>
      <div className='w-8 h-8 border-4 border-r-transparent border-zinc-300 rounded-full animate-spin' ></div>
    </main>
  )

  if (login) return <Navigate to='/conta' />
  return (
    <main className='grid grid-cols-none sm:grid-cols-2 h-screen sm:gap-8' >
      <div className='hidden sm:block sm:bg-login bg-cover bg-center '></div>
      <Outlet/>
    </main>
  );
};

export default Login
