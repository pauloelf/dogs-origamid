import React from 'react'
import {useParams} from 'react-router-dom'
import Feed from '../Components/feed/Feed'

const UserProfile = () => {
	const {user} = useParams()

  return (
    <section className='mt-8 mx-auto max-w-[50rem] px-4'>
    	<h1 className='title'>{user}</h1>
    	<Feed user={user} />
    </section>
  )
}

export default UserProfile