import React from 'react';
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import useFetch from '../../hooks/useFetch'

const Feed = (props) => {
  const {data} = useFetch()
  
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  )
}

export default Feed;