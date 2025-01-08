import React from 'react'
import { SmallHeader } from '../../components/small-header/SmallHeader'

export const AboutMe = (prop) => {
	return (
		<div className='about-us pt-50'>
			<div className='container'>
				<SmallHeader prop={prop}/>
			</div>
		</div>
	)
}
