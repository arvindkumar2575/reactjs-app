import axios from 'axios';
import React, { useState } from 'react'
import Searched from './Searched';

export default function Weather(prop) {
	const [query,setQuery] = useState("");
	const [weather,setWeather] = useState({})
	const [searched,setSearched] = useState({})

	const searchCity = async(event) => {
		console.log(event)
		if(event.key == 'Enter' || event.target.name=='search-btn'){
			event.preventDefault()
			setQuery(query);
			setWeather()
			const url = "https://api.openweathermap.org/data/2.5/weather"
			const appid = "f00c38e0279b7bc85480c3fe775d518c"

			await axios.get(url,{params:{q:query,units:"metric",appid:appid}}).then((res)=>{
				console.log(res)
				setWeather(res.data)
				console.log(weather)
			}).catch((err)=>{
				console.log(err)
			})
		}
	}
	return (
		<div className='todo pt-50'>
			<div className='container'>
				<h4 className='h4'>{prop.heading}</h4>
				<div className='row'>
					<div className='col-md-7'>
						<div className='search-city'>
							<input type='text' className='input-city-search outline-none my-2 bg-gray-200 p-1 rounded-sm max-wd' placeholder='Search City...' name='query' value={query} onKeyUp={searchCity} onChange={(e)=>setQuery(e.target.value)} />
							<button onClick={searchCity} className='bg-blue-500 text-white transition duration-300 ease-in-out hover:bg-blue-600 p-1 rounded-lg' name='search-btn'>Search</button>
						</div>
					</div>
					<Searched searched={searched}/>
				</div>
			</div>
		</div>
	)
}
