import {React, useState, useEffect} from "react";
import {archer, Bard, Sniper} from "../skills/skills.js"
import JobConf from '../components/JobConf';

import Tables from "../components/Tables.js";
import Bag from '../components/Bag';
import Character from '../components/Character'
import Stats from '../components/Stats';
import Hits from '../components/Hits';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/button';
import Stack from 'react-bootstrap/Stack';

function Archer() {
  const [level, setLevel] = useState(29)
  const [job, setJob] = useState(archer)
  const [jobName, setJobName] = useState('Archer')
  const [show, setShow] = useState(false)
  const [combat, setCombat] = useState(false)
  const [newLevel, setNewLevel] = useState(level)
  const [maxXp, setMaxXp] = useState(0)
  const [exp, setExp] = useState("")
  const [tempXp, setTempXp] = useState("")
  const [percent, setPercent] = useState("")
  const [pickJob, setPickJob] = useState(false)
  useEffect(() => {
      let levelUp = Math.floor(Math.random() * (newLevel + 99)) + (newLevel * 100)
      setMaxXp(levelUp)
  }, [newLevel])
  const levelUp = () => {
      let levels = newLevel + 1
      if(levels == 30){
        setPickJob(true)
      }
      setNewLevel(levels)
      setExp(0)
      setPercent(0)
  }
  const addXp = (xp) => {
      let percentage = Number(percent) + ((Number(xp)/maxXp) * 100)
      setPercent(percentage)
      setExp(Number(exp) + Number(xp))
      setTempXp("")
  }
  return (
    <div className='inside'>
      <div>
        <div className='character'>
          <Character props={job} />
        </div>
        <div className='stats'>
          <Stats />
          <Hits />
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
        reset={() => {setJobName('Archer'), setJob(Archer)}}
        selected={()=> setPickJob(false)}
        info={(jobName == 'Bard') ? "Utility" : "Damage"}
      />
        {(pickJob) ? 
        <div className='jobs'>
        <Button variant='warning' onClick={() => {setShow(!show), setJobName('Bard'), setJob(Bard)}} disabled={(jobName == 'Bard')}>Choose Bard</Button>
        <Button variant='danger' onClick={() => {setShow(!show), setJobName('Sniper'), setJob(Sniper)}} disabled={(jobName == 'Sniper')}>Choose Sniper</Button> 
        </div>
        : ''}
        <Bag 
        />
      </div>
    </div>
  )
}

export default Archer;