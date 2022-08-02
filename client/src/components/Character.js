import { React, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PERSONALITY } from '../utils/mutations';
import Table from 'react-bootstrap/esm/Table';

function Character(props) {
    const {id: characterId} = useParams()
    const [show, setShow] = useState(false)
    const [personality, setPersonality] = useState({characterId: '', traits: '', ideals: '', bonds: '', flaws: '', proficiencies: '', languages: ''})
    const [addPersonality, {error}] = useMutation(ADD_PERSONALITY)
    const [traits, setTraits] = useState(false)
    const trait = props.character.personality[0]
    
    const handleChange = (event) => {
        const {name, value} = event.target

        setPersonality({
            ...personality,
            [name]: value
        })
    }
    const submitChange = async (event) => {
        event.preventDefault()
        await addPersonality({
          variables: {...personality}
        })
        setPersonality({ characterId: '', traits: '', ideals: '', bonds: '', flaws: '', proficiencies: '', languages: ''})
        window.location.reload()
      }
    return (
        //db name
        <div className='topCharSheet'>
            <h1 style={{alignSelf: 'center'}}>{props.character.name}</h1>
                <ul className='permanentAlignments'>
                    <li>Race: {props.character.race}</li>
                    <li>Level: {props.character.stats[0].level}</li>
                    <li>Background: {props.character.background}</li>
                    <li>Class: {props.character.class}</li>
                    <li>Alignment: {props.character.alignment}</li>
                </ul>
                {(props.character.personality.length <= 0) ?  <button className='showBtn' onClick={() => {setTraits(!traits), setPersonality({characterId: characterId})}}>Add Personality</button> : <div style={{display: 'flex'}}><button className='showBtn' onClick={() => setShow(!show)}>Show Personality</button> <button className='showBtn'>Edit Personality</button></div>}
            {traits ? 
                <div className='addTraits'>
                    <input type="text" name='traits' value={personality.traits} placeholder='traits' onChange={handleChange}/>
                    <input type="text" name='ideals' value={personality.ideals} placeholder='ideals' onChange={handleChange}/>
                    <input type="text" name='bonds' value={personality.bonds} placeholder='bonds' onChange={handleChange}/>
                    <input type="text" name='flaws' value={personality.flaws} placeholder='flaws' onChange={handleChange}/>
                    <input type="text" name='proficiencies' value={personality.proficiencies} placeholder='proficiencies' onChange={handleChange}/>
                    <input type="text" name='languages' value={personality.languages} placeholder='languages' onChange={handleChange}/>
                    <button className='showBtn' onClick={submitChange}>Add</button>
                </div>    
                : ""
        } 
            {show ? 
                <div className='traits'>
                    <div>
                        <h5>Traits</h5>
                        <p>{trait.traits}</p>
                    </div>
                    <div>
                        <h5>Ideals</h5>
                        <p>{trait.ideals}</p>
                    </div>
                    <div>
                        <h5>Bonds</h5>
                        <p>{trait.bonds}</p>
                    </div>
                    <div>
                        <h5>Flaws</h5>
                        <p>{trait.flaws}</p>
                    </div>
                    <div>
                        <h5>Proficiencies</h5>
                        <p>{trait.proficiencies}</p>
                    </div>
                    <div>
                        <h5>Languages</h5>
                        <p>{trait.languages}</p>
                    </div>
                </div>
            : ""}
        </div>
    )
}

export default Character