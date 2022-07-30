import { React, useState } from 'react'
import { useMutation } from "@apollo/client"
import {CREATE_CHARACTER} from '../utils/mutations'
import Button from 'react-bootstrap/Button'


function CreateCharacter() {
  const [character, setCharacter] = useState({ name: "", race: "", alignment: "", background: "", class: "" })
  const [createChar, {error}] = useMutation(CREATE_CHARACTER)
  const handleCharChange = (event) => {
    const {name, value} = event.target

    setCharacter({
      ...character,
      [name]: value
    })
  }
  const handleCharSubmit = async (event) => {
    //event.preventDefault()
    try{
      const {data} = await createChar({
        variables: {...character}
      })
      console.log(data)
      setCharacter({
        name: "",
        race: "",
        alignment: "",
        background: ""
      })
    }catch(e){
      alert(e)
      console.error(e)
    }
    window.location.assign('/profile')
  }
  return (
    <div className='characterCreate'>
      <h1>Welcome to Character Creation</h1>
      <form action="">
        <h3>First start with a name</h3>
        <input type="text" placeholder='name' name='name' value={character.name} onChange={handleCharChange}/>
        <h3>Next select characters race</h3>
        <select name="race" id="" onChange={handleCharChange}>
          <option selected value=""></option>
          <option value="Hume" >Human</option>
          <option value="Vierra">Vierra</option>
          <option value="Nu'Mou">Nu'Mou</option>
          <option value="Ronso">Ronso</option>
          <option value="Aranea">Aranea</option>
          <option value="Vesvirtilio">Vesvirtilio</option>
        </select>
        <h3>Now onto alignment</h3>
        <select name="alignment" id="" onChange={handleCharChange}>
          <option selected value=""></option>
          <option value="Lawful Good">Lawful Good</option>
          <option value="Neutral Good" >Neutral Good</option>
          <option value="Chaotic Good">Chaotic Good</option>
          <option value="Lawful Neutral">Lawful Neutral</option>
          <option value="True Neutral" >True Neutral</option>
          <option value="Chaotic Neutral">Chaotic Neutral</option>
          <option value="Lawful Evil">Lawful Evil</option>
          <option value="Neutral Evil" >Neutral Evil</option>
          <option value="Chaotic Evil">Chaotic Evil</option>
        </select>
        <h3>Which class</h3>
        <select name="class" id="" onChange={handleCharChange}>
          <option selected value=""></option>
          <option value="Archer">Archer</option>
          <option value="Arcanist">Arcanist</option>
          <option value="Nomad">Nomad</option>
          <option value="Pugilist">Pugilist</option>
          <option value="Soldier">Soldier</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Thief">Thief</option>
        </select>
        <h3>Finally a background for your character</h3>
        <input type="text" placeholder='background' name='background' value={character.background} onChange={handleCharChange}/>
      </form>
      <Button variant="success" type="submit" onClick={() => {
        handleCharSubmit()
      }}>Submit</Button>
    </div>
  )
}

export default CreateCharacter