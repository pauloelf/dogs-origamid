import {useState} from 'react'
import useFetch from '../../hooks/useFetch'
import {ReactComponent as Send} from '../../assets/svgs/enviar.svg'
import {COMMENT_POST} from '../../api'

const PhotoCommentsForm = ({id, setComments, single}) => {
	const [comment, setComment] = useState('')
	const {error, request} = useFetch()

	const handleSubmit = async event => {
		event.preventDefault()

		const {url, options} = COMMENT_POST(id, {comment})
		const {response, json} = await request(url, options)
		if (response.ok) {
			setComments((comments) => [...comments, json])
			setComment('')
		}
	}

  return (
    <form className={`grid grid-cols-[1fr_auto] items-stretch ${single ? 'p-0 py-4' : 'p-4'}`} onSubmit={handleSubmit}>
    	<textarea className='block text-base font-primary w-full bg-[#eee] border border-[#eee] p-2 outline-none rounded resize-none duration-200 focus:outline-none focus:border-[#fb1] focus:bg-white focus:shadow-[0_0_0_3px_#fea] hover:outline-none hover:border-[#fb1] hover:bg-white hover:shadow-[0_0_0_3px_#fea]' id='comment' name='comment' placeholder='Comente...' value={comment} onChange={(e) => setComment(e.target.value)} >
    		{comment}
    	</textarea>
    	<button className='text-base text-[#333] bg-transparent px-4 border-none cursor-pointer overflow-hidden focus:outline-none hover:outline-none [&:focus_svg_path]:fill-[#fea] [&:focus_svg_path]:stroke-[#fb1] [&:focus_svg_g]:animate-blink  [&:hover_svg_path]:fill-[#fea] [&:hover_svg_path]:stroke-[#fb1] [&:hover_svg_g]:animate-blink'>
    		<Send />
    	</button>
    	{error && <p className='text-sm text-[#f31] mt-1' >{error}</p>}
    </form>
  )
}

export default PhotoCommentsForm