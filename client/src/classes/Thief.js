import { React, useState, useEffect } from "react";
import { thief, Ninja, Reaper } from "../skills/skills.js"
import { thiefLevelUp, ninjaLevelUp, reaperLevelUp } from "../skills/levelUp.js";
import { useMutation } from "@apollo/client";
import { LEVEL_UP } from '../utils/mutations'
import { useParams } from "react-router-dom";


import JobConf from '../components/JobConf';
import Tables from "../components/Tables.js";
import Bag from '../components/Bag';
import Character from '../components/Character'
import Stats from '../components/Stats';
import Hits from '../components/Hits';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Thief({ character }) {
  const baseStats = character.stats[0]
  const { id: characterId } = useParams()
  const [mutateChar, { error: stat }] = useMutation(LEVEL_UP)
  const [level, setLevel] = useState(character.stats[0].level)
  const [job, setJob] = useState(thief)
  const [jobName, setJobName] = useState(character.class)
  const [show, setShow] = useState(false)
  const [combat, setCombat] = useState(false)
  const [newLevel, setNewLevel] = useState(level)
  const [maxXp, setMaxXp] = useState(baseStats.experience)
  const [exp, setExp] = useState("")
  const [tempXp, setTempXp] = useState("")
  const [percent, setPercent] = useState("")
  const [pickJob, setPickJob] = useState(false)
  useEffect(() => {
    let percentage = (exp / maxXp) * 100
    setPercent(percentage)
    
 }, [])
 const levelUp = async () => {
   let levels = newLevel + 1
   if (levels == 30) {
     setPickJob(true)
   }
   let randomXP = maxXp + Math.floor(Math.random() * (newLevel + 99)) + (newLevel * 100)
   setMaxXp(randomXP)
   setNewLevel(levels)
   setExp(0)
   setPercent(0)
   if (character.class == "Thief") {
     await thiefLevelUp({ baseStats, mutateChar, characterId, levels, randomXP })
   } if (character.class == "Ninja") {
     ninjaLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
   } else{
     reaperLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
   }
 }
 const addXp = async (xp) => {
   let percentage = Number(percent) + ((Number(xp) / maxXp) * 100)
   setPercent(percentage)
   let sessionXp = (Number(exp) + Number(xp))
   setExp(sessionXp)
   setTempXp("")
   console.log(tempXp)
   await mutateChar({variables: {
     characterId: characterId,
     statId: baseStats._id,
     charisma: baseStats.charisma,
     strength: baseStats.strength,
     dexterity: baseStats.dexterity,
     intelligence: baseStats.intelligence,
     wisdom: baseStats.wisdom,
     level: baseStats.level,
     perception: baseStats.perception,
     constitution: baseStats.constitution,
     speed: baseStats.speed,
     health: baseStats.health,
     experience: maxXp,
     tempExp: sessionXp
   }})
 }
  return (
    <div className='inside'>
      <div>
        <div className='character'>
          <Character props={job} character={character} />
        </div>
        <div className='stats'>
          <Stats character={character} />
          <Hits character={character} />
        </div>
        <Stack direction='vertical' gap={3}>
          <ProgressBar now={percent} animated variant="info" striped label={`${exp}  / ${maxXp}xp`} />
          <p>{`${maxXp}`}</p>
          <input type="text" name='xp' value={tempXp} onChange={() => setTempXp(event.target.value)} />
          <label htmlFor="xp"></label>
          <Button onClick={() => addXp(tempXp)} size="md" variant='dark' disabled={(Number(exp) >= maxXp)}>Add XP</Button>
          <Button onClick={() => levelUp()} disabled={(newLevel == 50) || (Number(exp) < maxXp) || pickJob} variant="warning">{(newLevel == 50) ? "Max Level" : "Level Up"} </Button>
          <Button onClick={() => setCombat(!combat)}>Show/Hide Skills</Button>
          {(combat) ? <Tables props={job} level={newLevel} /> : ''}
        </Stack>

        <JobConf
          show={show}
          onHide={() => setShow(false)}
          job={job}
          jobName={jobName}
          reset={() => { setJobName('Thief'), setJob(Thief) }}
          selected={() => setPickJob(false)}
          info={(jobName == 'Ninja') ? "Damage" : "Damage"}
        />
        {(pickJob) ?
          <div className='jobs'>
            <Button variant='light' onClick={() => { setShow(!show), setJobName('Ninja'), setJob(Ninja) }} disabled={(jobName == 'Ninja')}>Choose Ninja</Button>
            <Button variant='dark' onClick={() => { setShow(!show), setJobName('Reaper'), setJob(BlackMage) }} disabled={(jobName == 'Reaper')}>Choose Reaper</Button>
          </div>
          : ''}
        <Bag character={character}
        />
      </div>
    </div>
  )
}

export default Thief;