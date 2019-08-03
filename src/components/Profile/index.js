/* eslint-disable no-unused-vars */
import React from 'react'
import { useAuth0 } from '../../react-auth0-wrapper'
import Loader from '../Loader'

const Profile = () => {
  const { loading, user } = useAuth0()

  if (loading || !user) {
    return <Loader />
  }

  return (
    <div>
      <img src={user.picture} alt='Profile' />

      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </div>
  )
}

export default Profile