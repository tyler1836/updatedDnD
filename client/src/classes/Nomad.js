import { React, useState, useEffect } from "react";
import { nomad, Druid, BeastMaster, Geomancer } from "../skills/skills.js"
import { nomadLevelUp, druidLevelUp, geomancerLevelUp, beastmasterLevelUp  } from "../skills/levelUp.js";
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

function Nomad({ character }) {
  const baseStats = character.stats[0]
  const { id: characterId } = useParams()
  const [mutateChar, { error: stat }] = useMutation(LEVEL_UP)
  const [level, setLevel] = useState(character.stats[0].level)
  const [job, setJob] = useState(nomad)
  const [jobName, setJobName] = useState(character.class)
  const [show, setShow] = useState(false)
  const [combat, setCombat] = useState(false)
  const [newLevel, setNewLevel] = useState(level)
  const [maxXp, setMaxXp] = useState(baseStats.experience)
  const [exp, setExp] = useState(baseStats.tempExp)
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
   if (character.class == "Nomad") {
     await nomadLevelUp({ baseStats, mutateChar, characterId, levels, randomXP })
   } if (character.class == "Druid") {
     druidLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
   } if (character.class == "Beast Master") {
     beastmasterLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
   }else{
     geomancerLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
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
          reset={() => { setJobName('Nomad'), setJob(Nomad) }}
          selected={() => setPickJob(false)}
          info={(jobName == 'Druid') ? "Damage" : (jobName == "Beast Master") ? "Utility" : "Damage"}
        />
        {(pickJob) ?
          <div className='jobs'>
            <Button variant='success' onClick={() => { setShow(!show), setJobName('Druid'), setJob(Druid) }} disabled={(jobName == 'Druid')}>Choose Druid</Button>
            <Button variant='secondary' onClick={() => { setShow(!show), setJobName('Beast Master'), setJob(BeastMaster) }} disabled={(jobName == 'Beast Master')}>Choose Beast Master</Button>
            <Button variant='warning' onClick={() => { setShow(!show), setJobName('Geomancer'), setJob(Geomancer) }} disabled={(jobName == 'Geomancer')}>Choose Geomancer</Button>
          </div>
          : ''}
        <Bag character={character}
        />
      </div>
    </div>
  )
}

export default Nomad;