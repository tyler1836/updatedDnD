import { React, useState } from 'react'
import { useMutation } from "@apollo/client"
import {CREATE_CHARACTER} from '../utils/mutations'


function CreateCharacter() {
  const [character, setCharacter] = useState({ name: "", race: "", alignment: "", background: "" })
  const [createChar, {error}] = useMutation(CREATE_CHARACTER)
  const handleChange = (event) => {
    const {name, value} = event.target

    setCharacter({
      ...character,
      [name]: value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
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
      console.error(e)
    }
  }
  return (
    <div>
      <h1>Welcome to Character Creation</h1>
      <form action="">
        <h3>First we will start with a name</h3>
        <input type="text" placeholder='name' name='name' value={character.name} onChange={handleChange}/>
        <h3>Next select characters race</h3>
        <select name="race" id="" onChange={handleChange}>
          <option value="Hume" >Human</option>
          <option selected value="Vierra">Vierra</option>
          <option value="Nu'Mou">Nu'Mou</option>
        </select>
        <h3>Now onto alignment</h3>
        <select name="alignment" id="" onChange={handleChange}>
          <option value="good" >Good</option>
          <option selected value="neutral">Neutral</option>
          <option value="evil">Evil</option>
        </select>
        <h3>Finally a background for your character</h3>
        <input type="text" placeholder='background' name='background' value={character.background} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CreateCharacter