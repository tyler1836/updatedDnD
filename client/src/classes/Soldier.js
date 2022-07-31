import { React, useState, useEffect } from "react";
import { soldier, Berserker, Paladin, DarkKnight } from "../skills/skills.js"
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
import Button from 'react-bootstrap/button';
import Stack from 'react-bootstrap/Stack';
import { darkknightLevelUp, soldierLevelUp, paladinLevelUp, berserkerLevelUp } from "../skills/levelUp.js";

function Soldier({ character }) {
  const baseStats = character.stats[0]
  const { id: characterId } = useParams()
  const [mutateChar, { error: stat }] = useMutation(LEVEL_UP)
  const [level, setLevel] = useState(character.stats[0].level)
  const [job, setJob] = useState(soldier)
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
    if (character.class == "Soldier") {
      console.log('calling soldier')
      await soldierLevelUp({ baseStats, mutateChar, characterId, levels, randomXP })
    } if (character.class == "Berserker") {
      berserkerLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
    } if (character.class == "Paladin") {
      paladinLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
    }else{
      darkknightLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
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
          reset={() => { setJobName('Soldier'), setJob(soldier) }}
          selected={() => setPickJob(false)}
          info={(jobName == 'Berserker') ? "A master of rage. You've been able to harness the anger inside of you to make you a near impenetrable walking fortress." 
          : (jobName == "Paladin") ? "Picked up as a member of the Holy Guard straight from military academy. You wield the power and blessings of this lands God." 
          : "You have succumbed to the darkness that lives in us all, but you have learned to wield it as a powerful force. Now death, blood, and darkness are a boon."}
        />
        {(pickJob) ?
          <div className='jobs'>
            <Button variant='danger' onClick={() => { setShow(!show), setJobName('Berserker'), setJob(Berserker) }} disabled={(jobName == 'Berserker')}>Choose Berserker</Button>
            <Button variant='light' onClick={() => { setShow(!show), setJobName("Paladin"), setJob(Paladin) }} disabled={(jobName == "Paladin")}>Choose Paladin</Button>
            <Button variant='dark' onClick={() => { setShow(!show), setJobName('Dark Knight'), setJob(DarkKnight) }} disabled={(jobName == 'Dark Knight')}>Choose Dark Knight</Button>
          </div>
          : ''}
        <Bag character={character}
        />
      </div>
    </div>
  )
}

export default Soldier;