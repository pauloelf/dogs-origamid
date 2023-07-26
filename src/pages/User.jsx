import React from "react"
import UserHeader from "../Components/user/UserHeader"
import { Outlet } from "react-router-dom"
import Head from '../Components/global/Head'

const User = () => {
  return (
    <div>
      <Head title='Minha Conta' />
      <UserHeader />
      <Outlet />
    </div>
  )
}

export default User
