import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = (prop) => {
	return (
		<nav className='navbar_component'>
			<div className='navbar-div'>
				<div className='navbar-head'>
					<h2 className='h2'>{prop.heading}</h2><span>by <Link to='/about-me'>Arvind Kumar</Link></span>
				</div>
			</div>
		</nav>
	)
}
