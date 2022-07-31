import { React, useState } from 'react'
import Table from 'react-bootstrap/esm/Table';

function Character(props) {
    const [show, setShow] = useState(false)
    const [personality, setPersonality] = useState({characterId: '', traits: '', ideals: '', bonds: '', flaws: '', proficiencies: '', languages: ''})
    const [traits, setTraits] = useState(false)
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
                {(props.character.personality.length <= 0) ?  <button className='showBtn' onClick={() => setTraits(!traits)}>Add Personality</button> : <button className='showBtn' onClick={() => setShow(!show)}>Show Personality</button>}
            {traits ? 
                <div className='addTraits'>
                    <input type="text" name='traits' value={personality.traits} placeholder='traits'/>
                    <input type="text" name='ideals' value={personality.ideals} placeholder='ideals'/>
                    <input type="text" name='bonds' value={personality.bonds} placeholder='bonds'/>
                    <input type="text" name='flaws' value={personality.flaws} placeholder='flaws'/>
                    <input type="text" name='proficiencies' value={personality.proficiencies} placeholder='proficiencies'/>
                    <input type="text" name='languages' value={personality.languages} placeholder='languages'/>
                    <button className='showBtn'>Add</button>
                </div>    
                : ""
        } 
            {show ? 
            <Table variant='dark' striped>
                <thead>
                    <tr>
                        <th>Race: </th>
                        <th>Level: </th>
                        <th>Background: </th>
                        <th>Class: </th>
                        <th>Alignment: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>traits</th>
                        <th>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, aspernatur?</th>
                        <th>traits</th>
                        <th>traits</th>
                        <th>traits</th>
                    </tr>
                </tbody>
            </Table>
            : ""}
        </div>
    )
}

export default Character