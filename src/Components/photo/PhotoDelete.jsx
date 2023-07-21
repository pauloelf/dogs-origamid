import React from 'react'
import {PHOTO_DELETE} from '../../api'
import useFetch from '../../hooks/useFetch'

const PhotoDelete = ({id}) => {
	const {loading, request} = useFetch()

	const handleClick = async () => {
		const confirm = window.confirm('Tem certeza que deseja deletar?')
		if (!confirm) return null

		const {url, options} = PHOTO_DELETE(id)
		const {response} = await request(url, options)
		if (response.ok) window.location.reload()
	}

  return (
    <>
    	{loading ? (
    		<button className='text-sm font-primary rounded-md bg-[#ddd] px-[.6rem] py-[.3rem] border border-transparent cursor-pointer leading-[1] transition duration-100 focus:outline-none focus:bg-white focus:shadow-[0_0_0_3px_#eee] focus:border-[#333] hover:outline-none hover:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333]' disabled>Deletando</button>
    		) : (
	    	<button className='text-sm font-primary rounded-md bg-[#ddd] px-[.6rem] py-[.3rem] border border-transparent cursor-pointer leading-[1] transition duration-100 focus:outline-none focus:bg-white focus:shadow-[0_0_0_3px_#eee] focus:border-[#333] hover:outline-none hover:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333]' onClick={handleClick}>Deletar</button>
    	)
    	}
    </>
  )
}

export default PhotoDelete