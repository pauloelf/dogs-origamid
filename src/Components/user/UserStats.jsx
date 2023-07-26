import {useEffect, lazy, Suspense} from "react"
import {GET_STATS} from "../../api"
import useFetch from "../../hooks/useFetch"
import Loading from "../Helper/Loading"
const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'))
import Head from "../global/Head"

const UserStats = () => {
  const {request, data, error, loading} = useFetch()

  useEffect(() => {
    const getData = async () => {
      const {url, options} = GET_STATS()
      await request(url, options)
    }
    getData()
  },[request])

  if (loading) return <Loading />
  if (error) return (<p className="text-base text-[#f31] mt-4">{error}</p>)
  if (data) return (
    <Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </Suspense>
  ) 
  else return <></>
}

export default UserStats
