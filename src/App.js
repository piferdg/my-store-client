// eslint-disable-next-line
import React from 'react'
import './App.scss'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home' 
import Navigation from './components/Navigation'
import Products from './components/Products'

function App() {
  return (
    //having a route outside of the switch makes that component show on all pages... Essentially what we have is multiple components on one route '/'
    <Router>
      <Route path='/' component={Navigation} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
      </Switch>
    </Router>
  )
}

export default App
