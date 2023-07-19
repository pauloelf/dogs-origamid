import React from 'react';
import UserHeader from '../Components/user/UserHeader'
import {Outlet} from 'react-router-dom'

const User = (props) => {
  return (
    <main>
      <UserHeader />
      <Outlet />
    </main>
  )
}

export default User;