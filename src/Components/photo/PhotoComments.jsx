import {useState, useContext, useEffect, useRef} from 'react'
import {UserContext} from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'

const PhotoComments = ({id, comments}) => {
	const [allComments, setAllComments] = useState(() => comments)
  const commentsSection = useRef(null)
	const {login} = useContext(UserContext)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [allComments])

  return (
    <>
    	<ul className='px-8 h-[100px] overflow-y-auto break-words' ref={commentsSection}>
    		{allComments.map(c => (
    			<li className='mb-2 leading-[1.2]' key={c.comment_ID}>
    				<b>{c.comment_author}: </b>
    				<span>{c.comment_content}</span>
    			</li>
    		))}
    	</ul>
    	{login && <PhotoCommentsForm id={id} setComments={setAllComments} />}
    </>
  )
}

export default PhotoComments