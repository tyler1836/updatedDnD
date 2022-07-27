import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'

function Profile() {
  const { loading, data } = useQuery(QUERY_ME)
  const user = data?.me || []
  console.log(user);
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div>
        <div>
          <h1>Welcome Back {user.username}</h1>
          <Link to='/create'>Create Character</Link>
          {user.characters.map(character => {
            console.log(character);
            return(
              <div>
                <h5>{character.name}</h5>
                <h6>{character.alignment}</h6>
              </div>
            )   
          })}
        </div>
    </div>
)}

export default Profile