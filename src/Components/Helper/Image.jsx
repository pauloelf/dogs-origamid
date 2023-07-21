import {useState} from 'react'

const Image = ({alt, ...props}) => {
	const [skeleton, setSkeleton] = useState(true)

	const handleLoad = ({target}) => {
		target.style.opacity = 1
		setSkeleton(false)
	}

  return (
    <div className='grid [grid-area:1/1]'>
    	{skeleton && (
	    	<div className='[grid-area:1/1] h-full bg-[#eee] bg-gradient-to-r from-[#eee] from-0% via-white via-50% to-[#eee] to-100% [background-size:200%] animate-skeleton'></div>
    	)}
    	<img className='block max-w-full [grid-area:1/1] opacity-0 transition duration-200' alt={alt} {...props} onLoad={handleLoad} />
    </div>
  )
}

export default Image