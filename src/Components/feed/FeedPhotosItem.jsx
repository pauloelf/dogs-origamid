import React from 'react'
import {ReactComponent as Visualization} from '../../assets/svgs/visualizacao.svg'

const FeedPhotosItem = ({photo}) => {
  return (
    <li className='group/feed grid rounded overflow-hidden cursor-pointer sm:[&:nth-child(2)]:row-span-2 sm:[&:nth-child(2)]:col-start-2
    sm:[&:nth-child(2)]:col-end-4'>
      <img className='' style={{gridArea: '1/1'}} src={photo.src} alt={photo.title} />
      <span className='hidden group-hover/feed:flex justify-center items-center group-hover/feed:bg-black/30 text-white text-base text-center before:' style={{gridArea: '1/1'}}>
        <Visualization className='inline-block w-4 h-[10px] mr-1' />
        {photo.acessos}
      </span>
    </li>
  )
}

export default FeedPhotosItem;