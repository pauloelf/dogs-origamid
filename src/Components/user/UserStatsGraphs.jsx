import {useState, useEffect} from "react"
import {VictoryPie, VictoryChart, VictoryBar} from "victory"

const UserStatsGraphs = ({data}) => {
	const [graph, setGraph] = useState([])
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const graphData = data.map((item) => {
			return {
				x: item.title,
				y: Number(item.acessos)
			}
		})

		setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b, 0))
		setGraph(graphData)
	}, [data])

  return (
    <section className="grid mx-auto max-w-[50rem] grid-cols-1 sm:grid-cols-2 mb-8 px-4 gap-8 animate-left">
    	<div className='grid [grid-column:1] sm:[grid-column:1/3] text-[2rem] p-8 items-center shadow-lg rounded'>
    		<p>Acessos: {total}</p>
    	</div>
    	<div className='grid items-center shadow-lg rounded'>
    		<VictoryPie
    			data={graph}
    			innerRadius={50}
    			padding={{top: 20, bottom: 20, left: 80, right: 60}}
    			style={{
    				data: {
    					fillOpacity: .9,
    					stroke: "#fff",
    					strokeWidth: 2
    				},
    				labels: {
    					fontSize: 14,
    					fill: "#333"
    				}
    			}}
    		/>
    	</div>
    	<div className='grid items-center shadow-lg rounded'>
    		<VictoryChart>
    			<VictoryBar alignment="start" data={graph} />
    		</VictoryChart>
    	</div>
    </section>
  )
}

export default UserStatsGraphs