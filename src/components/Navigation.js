/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../react-auth0-wrapper'

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <nav>
      <Link to='/'>Home</Link> 
      <Link to='/products'>Products</Link>
      <Link to='/test'>Test API</Link>
      {isAuthenticated && <Link to='/profile'>Profile</Link>}
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </nav>
  )
} 

export default Navigation