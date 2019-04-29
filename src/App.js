import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Privacy from './Privacy'
import Navigation from './Navigation'
import Form from './Form'
import './App.css'


export default function App() {
  return (
    <div >
      <Navigation />
      <Route exact path='/privacy' component={Privacy} />
      <Route exact path='/form' component={Form} />
      <Route exact path='/' component={Home} />
    </div>
  )
}
