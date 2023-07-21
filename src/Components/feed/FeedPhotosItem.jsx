import React from 'react'
import {ReactComponent as Visualization} from '../../assets/svgs/visualizacao.svg'

const FeedPhotosItem = ({photo, setModal}) => {

  const handleClick = () => {
    setModal(photo)
  }

  return (
    <li className='group/feed grid rounded overflow-hidden cursor-pointer sm:[&:nth-child(2)]:row-span-2 sm:[&:nth-child(2)]:col-start-2
    sm:[&:nth-child(2)]:col-end-4' onClick={handleClick} >
      <img className='' style={{gridArea: '1/1'}} src={photo.src} alt={photo.title} />
      <span className='hidden group-hover/feed:flex justify-center items-center group-hover/feed:bg-black/30 text-white text-base text-center before:' style={{gridArea: '1/1'}}>
        <Visualization width='16px' height='10px' className='inline-block mr-1' />
        {photo.acessos}
      </span>
    </li>
  )
}

export default FeedPhotosItem