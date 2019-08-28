/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home' 
import Navigation from './components/Navigation'
import ProductsList from './components/ProductsList'
import ProductDetail from './components/ProductDetail'
import PaymentSuccess from './components/PaymentSuccess'
import PaymentCancel from './components/PaymentCancel'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
import ExternalAPI from './components/ExternalAPI'

function App() {
  return (
    //having a route outside of the switch makes that component show on all pages... Essentially what we have is multiple components on one route '/'
    <Router>
      <Route path='/' component={Navigation} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={ProductsList} />
        <Route path='/products/:id' component={ProductDetail} />
        <Route path='/success' component={PaymentSuccess} />
        <Route path='/cancel' component={PaymentCancel} />
        <PrivateRoute path='/profile' component={Profile} />
        <PrivateRoute path='/test' component={ExternalAPI} />
      </Switch>
    </Router>
  )
}

export default App
