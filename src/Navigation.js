import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
      <div className='navContainer'>
        <ul>
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/form'>Form</Link></li>
          <li><Link className='link' to='/privacy'>Privacy Policy</Link></li>
        </ul>
      </div>
      </div>
    )
  }
}

export default Navigation;
