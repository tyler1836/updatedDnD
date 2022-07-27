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
              <div style={{display: "flex", justifyContent: 'space-between'}} id={character._id}>
              <div>
                <h5>{character.name}</h5>
              </div>
              <div>
                <h6>Race: {character.race}</h6>
                <h6>Alignment: {character.alignment}</h6>
                <h6>Background: {character.background}</h6>
              </div>
              {/* delete button and add stats button passing id in */}
              </div>
            )   
          })}
        </div>
    </div>
)}

export default Profile