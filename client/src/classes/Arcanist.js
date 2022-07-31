import { React, useState, useEffect } from 'react'
import { arcanist, Scholar, Summoner } from '../skills/skills';
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


function Arcanist({ character }) {
  const baseStats = character.stats[0]
  const { id: characterId } = useParams()
  const [mutateChar, { error: stat }] = useMutation(LEVEL_UP)
  const [level, setLevel] = useState(character.stats[0].level)
  const [job, setJob] = useState(arcanist)
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
    if (window.localStorage.key('maxExp')) {
      let getMaxExp = window.localStorage.getItem('maxExp')
      setMaxXp(Number(getMaxExp))
    }
    if (!window.localStorage.getItem('maxExp')) {
      let randomXP = maxXp + Math.floor(Math.random() * (newLevel + 99)) + (newLevel * 100)
      setMaxXp(randomXP)
      console.log('hello')
      window.localStorage.setItem('maxExp', randomXP)
    }
    if (window.localStorage.key('tempExp')) {
      let getExp = window.localStorage.getItem('tempExp')
      setExp(getExp)
      if (!window.localStorage.getItem('maxExp')) {
        let percentage = ((Number(getExp) / randomXP) * 100)
        setPercent(percentage)
      } else {
        let getMaxExp = window.localStorage.getItem('maxExp')
        let percentage = ((Number(getExp) / getMaxExp) * 100)
        console.log(`${maxXp} & ${percentage} & ${getExp}`)
        setPercent(percentage)
      }
    }
  }, [newLevel])
  const levelUp = () => {
    let levels = newLevel + 1
    if (levels == 30) {
      setPickJob(true)
    }
    setNewLevel(levels)
    setExp(0)
    setPercent(0)
    window.localStorage.removeItem('tempExp')
    window.localStorage.removeItem('maxExp')
    if (character.class == "Pugilist") {
      pugilistLevelUp({ baseStats, mutateChar, characterId, levels, maxXp })
    } if (character.class == "Monk") {
      monkLevelUp()
    } else {
      fighterLevelUp()
    }
  }
  const addXp = (xp) => {
    let percentage = Number(percent) + ((Number(xp) / maxXp) * 100)
    setPercent(percentage)
    setExp(Number(exp) + Number(xp))
    let getExp = window.localStorage.getItem('tempExp')
    let temporary = (Number(tempXp) + Number(getExp))
    window.localStorage.setItem('tempExp', temporary)
    setTempXp("")
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
          reset={() => { setJobName('Arcanist'), setJob(arcanist) }}
          selected={() => setPickJob(false)}
          info={(jobName == 'Scholar') ? "Healing" : "Damage"}
        />
        {(pickJob) ?
          <div className='jobs'>
            <Button variant='success' onClick={() => { setShow(!show), setJobName('Scholar'), setJob(Scholar) }} disabled={(jobName == 'Scholar')}>Choose Scholar</Button>
            <Button variant='danger' onClick={() => { setShow(!show), setJobName('Summoner'), setJob(Summoner) }} disabled={(jobName == 'Summoner')}>Choose Summoner</Button>
          </div>
          : ''}
        <Bag
        />
      </div>
    </div>
  )
}

export default Arcanist