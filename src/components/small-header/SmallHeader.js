import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from '../../pages/home/Home'

export const SmallHeader = () => {
  return (
    <div className='small-header'>
        <div className='heading'>
            <h3>About Me</h3>
        </div>
        <div className='breadcrumb'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>About Me</li>
            </ul>
        </div>
    </div>
  )
}
