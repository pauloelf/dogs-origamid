import {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import {PHOTOS_GET} from '../../api'
import Loading from '../Helper/Loading'

const FeedPhotos = ({page, total, user, setInfinite, setModal}) => {
	const {data, loading, error, request} = useFetch()
	const [validateUser, setValidateUser] = useState(true)

	useEffect(() => {
		const fetchPhotos = async () => {
			const {url, options} = PHOTOS_GET({page, total, user})
			const {response, json} = await request(url, options)
			if (response && response.ok && json.length < total) setInfinite(false)

			if (user && json.length > 0 && user !== json[1].author) setValidateUser(false)
		}
		fetchPhotos()
	}, [request, user, total, page, setInfinite, setValidateUser])

	if (loading) return <Loading />
	if (error) return <p className='text-sm text-[#f31] mt-1' >{error}</p>
	if (!validateUser) return (
		<p className='text-sm text-[#f31] mt-8 mx-auto max-w-[50rem]'>Esse usuário não existe</p>
	)

	return (
		<ul className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 justify-center animate-left'>
			{data ? data.map(photo => (
				<FeedPhotosItem key={photo.id} photo={photo} setModal={setModal}  />
			)) :
			<></>
			}
		</ul>
	)
}

export default FeedPhotos