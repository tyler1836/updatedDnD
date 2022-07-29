import {React , useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import {GiMuscleUp, GiBlackHandShield, GiShiningHeart, GiSpellBook, GiOpenBook, GiPublicSpeaker } from 'react-icons/gi'


function Stats({character}) {
  const stats = character.stats[0]
  const [bonuses, setBonuses] = useState({
    athletics: 0,
    acrobatics: 0,
    sleight: 0,
    sneak: 0,
    survival: 0,
    arcana: 0,
    history: 0,
    investigation: 0,
    nature: 0,
    religion: 0,
    animal: 0,
    insight: 0,
    medicine: 0,
    perception: 0,
    deception: 0,
    initimidation: 0,
    performance: 0,
    persuasion: 0,
  })
  const areBonused = () => {
    if((character.class == "Sorcerer") 
    || (character.class == "White Mage") 
    || (character.class == "Red Mage") 
    || (character.class == "Arcanist") 
    || (character.class == "Scholar")){
    setBonuses({
      athletics: (stats.strength * .5),
      acrobatics: (stats.dexterity * .5),
      sleight: (stats.dexterity * .5),
      sneak: (stats.dexterity * .5),
      survival: (stats.constitution * .5),
      arcana: (stats.intelligence * 2),
      history: (stats.intelligence * 2),
      investigation: (stats.intelligence * 2),
      nature: (stats.intelligence * .5),
      religion: (stats.intelligence * 2),
      animal: (stats.wisdom * .5),
      insight: (stats.wisdom * .5),
      medicine: (stats.wisdom * 2),
      perception: (stats.wisdom * 2),
      deception: (stats.charisma * .5),
      initimidation: (stats.charisma * .5),
      performance: (stats.charisma * .5),
      persuasion: (stats.charisma * .5),
    })
  }
    if((character.class == "Nomad") 
    || (character.class == "Monk") 
    || (character.class == "Beast Master")){
    setBonuses({
      athletics: (stats.strength * .5),
      acrobatics: (stats.dexterity * .5),
      sleight: (stats.dexterity * .5),
      sneak: (stats.dexterity * .5),
      survival: (stats.constitution * .5),
      arcana: (stats.intelligence * 2),
      history: (stats.intelligence * 2),
      investigation: (stats.intelligence * 2),
      nature: (stats.intelligence * .5),
      religion: (stats.intelligence * 2),
      animal: (stats.wisdom * .5),
      insight: (stats.wisdom * .5),
      medicine: (stats.wisdom * 2),
      perception: (stats.wisdom * 2),
      deception: (stats.charisma * .5),
      initimidation: (stats.charisma * .5),
      performance: (stats.charisma * .5),
      persuasion: (stats.charisma * .5),
    })
  }
    if((character.class == "Soldier")
    || (character.class == "Fighter") 
    || (character.class == "Berserker") 
    || (character.class == "Dark Knight") 
    || (character.class == "Paladin") 
    || (character.class == "Pugilist")){
    setBonuses({
      athletics: (stats.strength * 2),
      acrobatics: (stats.dexterity * .5),
      sleight: (stats.dexterity * .5),
      sneak: (stats.dexterity * .5),
      survival: (stats.constitution * 2),
      arcana: (stats.intelligence * .5),
      history: (stats.intelligence * .5),
      investigation: (stats.intelligence * .5),
      nature: (stats.intelligence * .5),
      religion: (stats.intelligence * .5),
      animal: (stats.wisdom * .5),
      insight: (stats.wisdom * .5),
      medicine: (stats.wisdom * .5),
      perception: (stats.wisdom * .5),
      deception: (stats.charisma * .5),
      initimidation: (stats.charisma * 2),
      performance: (stats.charisma * 2),
      persuasion: (stats.charisma * 2),
    })
  }
    if((character.class == "Black Mage") 
    || (character.class == "Summoner")){
    setBonuses({
      athletics: (stats.strength * .5),
      acrobatics: (stats.dexterity * .5),
      sleight: (stats.dexterity * .5),
      sneak: (stats.dexterity * .5),
      survival: (stats.constitution * .5),
      arcana: (stats.intelligence * 2),
      history: (stats.intelligence * 2),
      investigation: (stats.intelligence * 2),
      nature: (stats.intelligence * .5),
      religion: (stats.intelligence * 2),
      animal: (stats.wisdom * .5),
      insight: (stats.wisdom * .5),
      medicine: (stats.wisdom * 2),
      perception: (stats.wisdom * 2),
      deception: (stats.charisma * .5),
      initimidation: (stats.charisma * .5),
      performance: (stats.charisma * .5),
      persuasion: (stats.charisma * .5),
    })
  }
    if((character.class == "Druid") 
    || (character.class == "Bard") 
    || (character.class == "Geomancer") 
    || (character.class == "Archer")){
    setBonuses({
      athletics: (stats.strength * .5),
      acrobatics: (stats.dexterity * .5),
      sleight: (stats.dexterity * .5),
      sneak: (stats.dexterity * .5),
      survival: (stats.constitution * .5),
      arcana: (stats.intelligence * 2),
      history: (stats.intelligence * 2),
      investigation: (stats.intelligence * 2),
      nature: (stats.intelligence * .5),
      religion: (stats.intelligence * 2),
      animal: (stats.wisdom * .5),
      insight: (stats.wisdom * .5),
      medicine: (stats.wisdom * 2),
      perception: (stats.wisdom * 2),
      deception: (stats.charisma * .5),
      initimidation: (stats.charisma * .5),
      performance: (stats.charisma * .5),
      persuasion: (stats.charisma * .5),
    })
  }
    if((character.class == "Thief") 
    || (character.class == "Ninja") 
    || (character.class == "Reaper") 
    || (character.class == "Sniper")){
    setBonuses({
      athletics: (stats.strength * .5),
      acrobatics: (stats.dexterity * .5),
      sleight: (stats.dexterity * .5),
      sneak: (stats.dexterity * .5),
      survival: (stats.constitution * .5),
      arcana: (stats.intelligence * 2),
      history: (stats.intelligence * 2),
      investigation: (stats.intelligence * 2),
      nature: (stats.intelligence * .5),
      religion: (stats.intelligence * 2),
      animal: (stats.wisdom * .5),
      insight: (stats.wisdom * .5),
      medicine: (stats.wisdom * 2),
      perception: (stats.wisdom * 2),
      deception: (stats.charisma * .5),
      initimidation: (stats.charisma * .5),
      performance: (stats.charisma * .5),
      persuasion: (stats.charisma * .5),
    })
  }
  }
  useEffect(() => {
    areBonused()
  }, [])
  return (
    <div className='largeStats'>
    <Tab.Container id="list-group-secondary" defaultActiveKey=''>
    <ListGroup>
    <ListGroup.Item >Melee Proficiency Bonus {Math.floor((stats.strength + stats.dexterity) * .7)}{/*db stats */}</ListGroup.Item>
    <ListGroup.Item >Ranged Proficiency Bonus {Math.floor((stats.intelligence + stats.perception) * .7)}{/*db stats */}</ListGroup.Item>
    <ListGroup.Item >Inspiration {stats.inspiration}</ListGroup.Item>
    <ListGroup.Item action href='#Strength'><GiMuscleUp style={{fontSize: '2rem', marginRight: '7px'}}/>Strength {stats.strength}</ListGroup.Item>
    <ListGroup.Item action href='#Dexterity'><GiBlackHandShield style={{fontSize: '2rem', marginRight: '7px'}}/>Dexterity {stats.dexterity}</ListGroup.Item>
    <ListGroup.Item action href='#Constitution'><GiShiningHeart style={{fontSize: '2rem', marginRight: '7px'}}/>Constitution {stats.constitution}</ListGroup.Item>
    <ListGroup.Item action href='#Intelligence'><GiSpellBook style={{fontSize: '2rem', marginRight: '7px'}}/>Intelligence {stats.intelligence}</ListGroup.Item>
    <ListGroup.Item action href='#Wisdom'><GiOpenBook style={{fontSize: '2rem', marginRight: '7px'}}/>Wisdom {stats.wisdom}</ListGroup.Item>
    <ListGroup.Item action href='#Charisma'><GiPublicSpeaker style={{fontSize: '2rem', marginRight: '7px'}}/>Charisma {stats.charisma}</ListGroup.Item>
    <ListGroup.Item >Passive Wisdom/Perception {Math.floor((stats.wisdom + stats.perception) * .6)}</ListGroup.Item>
  </ListGroup>
  <Tab.Content>
    <Tab.Pane eventKey='#Strength' className="popout">
      <p>Saving Throws <input type='checkbox' /><input type='checkbox' /><input type='checkbox' /></p>
      <p>Athletics: {Math.round(bonuses.athletics * .6)}</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Dexterity' className="popout">
      <p>Saving Throws</p> 
      <p>Acrobatics: {Math.round(stats.dexterity * .5)}</p>
      <p>Sleight of Hand: {Math.round(stats.dexterity * .7)}</p>
      <p>Stealth: {Math.round(stats.dexterity * .9)}</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Constitution' className="popout">
      <p>Saving Throws</p>
      <p>Survival: {Math.round(stats.constitution * .6)}</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Intelligence' className="popout">
      <p>Saving Throws</p>
      <p>Arcana: {Math.round(stats.intelligence * .7)}</p>
      <p>History: {Math.round(stats.intelligence * .5)}</p>
      <p>Investigation: {Math.round(stats.intelligence * .8)}</p>
      <p>Nature: {Math.round(stats.intelligence * .4)}</p>
      <p>Religion: {Math.round(stats.intelligence * .6)}</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Wisdom' className="popout">
      <p>Saving Throws</p>
      <p>Animal Handling: {Math.round(stats.wisdom * .8)}</p>
      <p>Insight: {Math.round(stats.wisdom * .6)}</p>
      <p>Medicine: {Math.round(stats.wisdom * .7)}</p>
      <p>Perception: {Math.round(stats.wisdom * .8)}</p>
    </Tab.Pane>
    <Tab.Pane eventKey='#Charisma' className="popout">
      <p>Saving Throws</p>
      <p>Deception: {Math.round(stats.charisma * .9)}</p>
      <p>Intimidation: {Math.round(stats.charisma * .8)}</p>
      <p>Performance: {Math.round(stats.charisma * .7)}</p>
      <p>Persuasion: {Math.round(stats.charisma * .7)}</p>
    </Tab.Pane>
  </Tab.Content>
  </Tab.Container>
  </div>
  )
}

export default Stats