import {useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import {PHOTO_GET} from '../../api'
import PhotoContent from '../photo/PhotoContent'

const FeedModal = ({photo, setModal}) => {
  const {data, loading, error, request} = useFetch()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false)
    }
  }

  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <section className='modal' onClick={handleClick} >
      {error && <p className='text-sm text-[#f31] mt-1' >{error}</p>}
      {data && <PhotoContent data={data} />}
    </section>
  )
}

export default FeedModal