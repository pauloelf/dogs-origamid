import {useState} from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = ({user}) => {
  const [modal, setModal] = useState(false)
  
  return (
    <div>
      {modal && <FeedModal photo={modal} setModal={setModal} />}
      <FeedPhotos user={user} setModal={setModal} />
    </div>
  )
}

export default Feed