import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import PhotoContent from "../Components/photo/PhotoContent"
import { PHOTO_GET } from "../api"
import Loading from "../Components/Helper/Loading"
import Head from '../Components/global/Head'

const Photo = () => {
  const { id } = useParams()
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)
  }, [id, request])

  if (loading) return <Loading />
  if (error) return <p className="text-sm text-[#f31] mt-1">{error}</p>
  if (data)
    return (
      <section className="max-w-[50rem] px-4 mx-auto mt-8">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    )
}

export default Photo
