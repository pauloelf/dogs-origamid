import {useState, useEffect} from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = ({user}) => {
  const [modal, setModal] = useState(false)
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)


  useEffect(() => {
    let wait = false
    const infiniteScroll = () => {
      if (!infinite) return null
        
      const scroll = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight

      if (scroll > height * .75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1])
        wait = true
        setTimeout(() => {
          wait = false
        }, 500)
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])
  
  return (
    <div>
      {modal && <FeedModal photo={modal} setModal={setModal} />}
      {pages.map(p => <FeedPhotos key={p} user={user} total='6' page={p} setInfinite={setInfinite} setModal={setModal} />)}
      {!infinite && <p className='text-center text-[#666] py-4'>Não existem mais postagens.</p>}
    </div>
  )
}

export default Feed