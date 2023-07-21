import React from 'react'
import UserHeader from '../Components/user/UserHeader'
import {Outlet} from 'react-router-dom'

const User = () => {
  return (
    <div>
      <UserHeader />
      <Outlet />
    </div>
  )
}

export default User