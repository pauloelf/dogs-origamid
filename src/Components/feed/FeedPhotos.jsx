import {useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import {PHOTOS_GET} from '../../api'

const FeedPhotos = ({setModal}) => {
	const {data, loading, error, request} = useFetch()

	useEffect(() => {
		const fetchPhotos = async () => {
			const {url, options} = PHOTOS_GET({page: 1, total: 20, user: 0})
			const {response, json} = await request(url, options)
		}
		fetchPhotos()
	}, [request])

	if (error) return <p className='text-sm text-[#f31] mt-1' >{error}</p>
	return (
		<ul className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 justify-center animate-left'>
			{data ? data.map(photo => (
				<FeedPhotosItem key={photo.id} photo={photo} setModal={setModal} />
			)) :
			<>carregando</>
			}
		</ul>
	)
}

export default FeedPhotos