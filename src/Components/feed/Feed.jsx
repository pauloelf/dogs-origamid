import {useState} from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modal, setModal] = useState(false)
  
  return (
    <div>
      {modal && <FeedModal photo={modal} setModal={setModal} />}
      <FeedPhotos setModal={setModal} />
    </div>
  )
}

export default Feed