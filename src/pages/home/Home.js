import React from 'react'
import './home.css'
import {Header} from '../../components/header/Header'
import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<div className='home pt-50'>
			{/* <Header/> */}
			<Link to="/todo">Todo</Link>
		</div>
	)
}
