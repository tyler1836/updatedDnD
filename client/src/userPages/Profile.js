import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'
import { DELETE_CHARACTER, ADD_STATS } from '../utils/mutations'
import { FaRegTrashAlt } from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'



function Profile() {
  const [showStats, setShowStats] = useState(false)
  const [characterIndex, setCharacterIndex] = useState(0)
  const [id, setId] = useState("")
  const [createStats, setCreateStats] = useState({
    characterId: id,
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
    perception: "",
    health: "",
    level: 1,
    speed: 15,

  })
  const { loading, data } = useQuery(QUERY_ME)
  const [deleteCharacter, { error }] = useMutation(DELETE_CHARACTER)
  const [addStats] = useMutation(ADD_STATS)
  const user = data?.me || []


  const handleChange = (event) => {
    const { name, value } = event.target

    setCreateStats({
      ...createStats,
      [name]: Number(value)
    })
  }

  const handleAddStats = async () => {
    console.log({...createStats})
    try{
      await addStats({
        variables: {...createStats}
      })
      setCreateStats({
        characterId: "",
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: "",
        perception: "",
        health: "",
        level: 1,
        speed: '15',
      })
      window.location.reload()
    }catch(e){
      console.log(e);
    }
  }
  const destroyChar = async (args) => {
    console.log(args)
    const confirmation = confirm('This is permanent. Are you sure?')
    confirmation ?
      await deleteCharacter({ variables: { characterId: args } }) && window.location.assign('/profile') : "";
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='profile'>
      <div>
        <h1>Welcome Back {user.username}</h1>
        <Link to='/create'>Create Character</Link>
        {user.characters.map((character, index) => {
          console.log(character.stats);
          return (
            <div className="characterList" id={character._id} key={character._id} >
              <div>
                <h5 onClick={() => window.location.assign(`/loading/${character._id}`)} className='characterName'>{character.name}</h5>
              </div>
              <div>
                <h6>Race: {character.race}</h6>
                <h6>Alignment: {character.alignment}</h6>
                <h6>Background: {character.background}</h6>
                <h6>Class: {character.class}</h6>
              </div>
              <div>
                {(character.stats.length <= 0) ?
                  <button onClick={() => {
                    setShowStats(!showStats),
                    setCharacterIndex(index),
                    setId(character._id)
                  }}>Add Stats</button> : <h6>Level: {character.stats[0].level}</h6>
                }
                <h6><FaRegTrashAlt style={{color:'red'}} onClick={() => destroyChar(character._id)} /></h6>
                <FiEdit style={{color:'green'}}/>
              {(showStats && (character.stats.length <= 0)) ?
                <div>
                    <input type="text" placeholder={'strength roll 2d6'} name='strength' value={createStats.strength} onChange={handleChange} />
                    <input type="text" placeholder={'dexterity roll 2d6'} name='dexterity' value={createStats.dexterity} onChange={handleChange} />
                    <input type="text" placeholder={'wisdom roll 2d6'} name='wisdom' value={createStats.wisdom} onChange={handleChange} />
                    <input type="text" placeholder={'intelligence roll 2d6'} name='intelligence' value={createStats.intelligence} onChange={handleChange} />
                    <input type="text" placeholder={'constitution roll 2d6'} name='constitution' value={createStats.constitution} onChange={handleChange} />
                    <input type="text" placeholder={'charisma roll 2d6'} name='charisma' value={createStats.charisma} onChange={handleChange} />
                    <input type="text" placeholder={'perception roll 2d6'} name='perception' value={createStats.perception} onChange={handleChange} />
                    <input type="text" placeholder={'health roll 2d6'} name='health' value={createStats.health} onChange={handleChange} />
                    <button onClick={() => {
                      setCreateStats({...createStats, characterId: character._id})
                      handleAddStats()
                      }}>Add</button>
                </div> : ""}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Profile