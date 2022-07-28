import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'
import { DELETE_CHARACTER } from '../utils/mutations'
import {FaRegTrashAlt} from 'react-icons/fa'

function Profile() {
  const { loading, data } = useQuery(QUERY_ME)
  const [deleteCharacter, {error}] = useMutation(DELETE_CHARACTER)
  const user = data?.me || []

  const destroyChar = async (args) => {
    console.log(args)
    const confirmation = confirm('This is permanent. Are you sure?')
    confirmation ? 
    await deleteCharacter({variables: {characterId: args}}) && window.location.assign('/profile') : "";
  }
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className='profile'>
        <div>
          <h1>Welcome Back {user.username}</h1>
          <Link to='/create'>Create Character</Link>
          {user.characters.map(character => {
            console.log(character.stats.length);
            return(
              <div className="characterList" id={character._id}>
              <div>
                <h5>{character.name}</h5>
              </div>
              <div>
                <h6>Race: {character.race}</h6>
                <h6>Alignment: {character.alignment}</h6>
                <h6>Background: {character.background}</h6>
                <h6>Class: {character.class}</h6>
              </div>
              <div>
                {(character.stats.length <= 0) ? 
                  <Link to={`/stats`} class={{class: `${character.class}`}}>Add Stats</Link> : ""  
              }
              <FaRegTrashAlt onClick={() => destroyChar(character._id)}/>
              </div>
              {/* delete button and add stats button passing id in */}
              </div>
            )   
          })}
        </div>
    </div>
)}

export default Profile