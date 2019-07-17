import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation () {

    return (
      <div className='nav'>
        <div className='navContainer'>
          <ul className='nav-list'>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/form'>Find Support Groups</Link></li>
            <li><Link className='link' to='/privacy'>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    )

}


