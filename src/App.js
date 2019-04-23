import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home'
import Privacy from './Privacy'
import './App.css';

function App() {
  return (
    <div >
      <Route exact path='/privacy' component={Privacy} />
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
