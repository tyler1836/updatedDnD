import {React, useState, useEffect} from "react";
import { useMutation } from "@apollo/client";
import {LEVEL_UP } from '../utils/mutations'
import { useParams } from "react-router-dom";
import { pugilistLevelUp } from "../skills/levelUp";


import {pugilist, Monk, Fighter} from "../skills/skills.js"
import JobConf from '../components/JobConf';

import Tables from "../components/Tables.js";
import Bag from '../components/Bag';
import Character from '../components/Character'
import Stats from '../components/Stats';
import Hits from '../components/Hits';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/button';
import Stack from 'react-bootstrap/Stack';

function Pugilist({character}) {
  const baseStats = character.stats[0]
  const {id: characterId} = useParams()
  const [mutateChar, {error: stat}] = useMutation(LEVEL_UP)
  const [level, setLevel] = useState(character.stats[0].level)
  const [job, setJob] = useState(pugilist)
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
      const getExp = window.localStorage.getItem('maxExp')
      let levelUp = Number(getExp) + Math.floor(Math.random() * (newLevel + 99)) + (newLevel * 100)
      setMaxXp(levelUp)
  }, [newLevel])
  const levelUp = () => {
      let levels = newLevel + 1
      if(levels == 30){
        setPickJob(true)
      }
      window.localStorage.setItem('maxExp', maxXp)
      setNewLevel(levels)
      setExp(0)
      setPercent(0)
      if(character.class == "Pugilist"){
        pugilistLevelUp({baseStats, mutateChar, characterId, levels, maxXp})
      }if(character.class == "Monk"){
        monkLevelUp()
      }else{
        fighterLevelUp()
      }
  }
  const addXp = (xp) => {
      let percentage = Number(percent) + ((Number(xp)/maxXp) * 100)
      setPercent(percentage)
      setExp(Number(exp) + Number(xp))
      window.localStorage.setItem('maxExp', xp)
      setTempXp("")
  }
  return (
    <div className='inside'>
      <div>
        <div className='character'>
          <Character props={job} character={character}/>
        </div>
        <div className='stats'>
          <Stats character={character}/>
          <Hits character={character}/>
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
        reset={() => {setJobName('Pugilist'), setJob(pugilist)}}
        selected={()=> setPickJob(false)}
        info={(jobName == 'Monk') ? "Healing" : "Damage"}
      />
        {(pickJob) ? 
        <div className='jobs'>
        <Button variant='warning' onClick={() => {setShow(!show), setJobName('Monk'), setJob(Monk)}} disabled={(jobName == 'Monk')}>Choose Monk</Button>
        <Button variant='danger' onClick={() => {setShow(!show), setJobName('Fighter'), setJob(Fighter)}} disabled={(jobName == 'Fighter')}>Choose Fighter</Button> 
        </div>
        : ''}
        <Bag 
        />
      </div>
    </div>
  )
}

export default Pugilist;
