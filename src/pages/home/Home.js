import React from 'react'
import './home.css'
import {Header} from '../../components/header/Header'
import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<div className='home pt-50'>
			<div className='container'>
				{/* <Header/> */}
				<div>
				1. <Link className='text-blue-500' to="/todo-app">Todo App &rarr;</Link>
				</div>

				<div>
				2. <Link className='text-blue-500' to="/weather-app">Weather App &rarr;</Link>
				</div>
				
			</div>
		</div>
	)
}
