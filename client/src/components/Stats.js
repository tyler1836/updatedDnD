import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import {GiMuscleUp, GiBlackHandShield, GiShiningHeart, GiSpellBook, GiOpenBook, GiPublicSpeaker } from 'react-icons/gi'


function Stats({character}) {
  console.log(character)
  const stats = character.stats[0]
  const stat = 16
  return (
    <div className='largeStats'>
    <Tab.Container id="list-group-secondary" defaultActiveKey=''>
    <ListGroup>
    <ListGroup.Item action href='/'>Proficiency Bonus {/*db stats */}</ListGroup.Item>
    <ListGroup.Item action href='/'>Inspiration</ListGroup.Item>
    <ListGroup.Item action href='#Strength'><GiMuscleUp style={{fontSize: '2rem', marginRight: '7px'}}/>Strength {stats.strength}</ListGroup.Item>
    <ListGroup.Item action href='#Dexterity'><GiBlackHandShield style={{fontSize: '2rem', marginRight: '7px'}}/>Dexterity {stat}</ListGroup.Item>
    <ListGroup.Item action href='#Constitution'><GiShiningHeart style={{fontSize: '2rem', marginRight: '7px'}}/>Constitution {stat}</ListGroup.Item>
    <ListGroup.Item action href='#Intelligence'><GiSpellBook style={{fontSize: '2rem', marginRight: '7px'}}/>Intelligence {stat}</ListGroup.Item>
    <ListGroup.Item action href='#Wisdom'><GiOpenBook style={{fontSize: '2rem', marginRight: '7px'}}/>Wisdom {stat}</ListGroup.Item>
    <ListGroup.Item action href='#Charisma'><GiPublicSpeaker style={{fontSize: '2rem', marginRight: '7px'}}/>Charisma {stat}</ListGroup.Item>
    <ListGroup.Item action href='/'>Passive Wisdom/Perception</ListGroup.Item>
  </ListGroup>
  <Tab.Content>
    <Tab.Pane eventKey='#Strength' className="popout">
      <p>Saving Throws <input type='checkbox' /><input type='checkbox' /><input type='checkbox' /></p>
      <p>Athletics</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Dexterity' className="popout">
      <p>Saving Throws</p> 
      <p>Acrobatics</p>
      <p>Sleight of Hand: 32</p>
      <p>Stealth</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Constitution' className="popout">
      <p>Saving Throws</p>
      <p>Survival</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Intelligence' className="popout">
      <p>Saving Throws</p>
      <p>Arcana</p>
      <p>History</p>
      <p>Investigation</p>
      <p>Nature</p>
      <p>Religion</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Wisdom' className="popout">
      <p>Saving Throws</p>
      <p>Animal Handling</p>
      <p>Insight</p>
      <p>Medicine</p>
      <p>Perception</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Charisma' className="popout">
      <p>Saving Throws</p>
      <p>Deception</p>
      <p>Intimidation</p>
      <p>Performance</p>
      <p>Persuasion</p>
    </Tab.Pane>
  </Tab.Content>
  </Tab.Container>
  </div>
  )
}

export default Stats