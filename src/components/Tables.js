import {React, useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/button';

function Tables({ props, level }) {
    const [newLevel, setLevel] = useState(level)
    const [maxXp, setMaxXp] = useState(0)
    const [exp, setExp] = useState("")
    const [tempXp, setTempXp] = useState("")
    const [percent, setPercent] = useState("")
    useEffect(() => {
        let levelUp = Math.floor(Math.random() * (newLevel + 99)) + (newLevel * 100)
        setMaxXp(levelUp)
    }, [newLevel])
    const levelUp = () => {
        let levels = newLevel + 1
        setLevel(levels)
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
        <div>
            <ProgressBar now={percent} animated variant="info" striped label={`${exp}  / ${maxXp}xp`} />
            <p>{`${maxXp}`}</p>
            <input type="text" name='xp' value={tempXp} onChange={() => setTempXp(event.target.value)} />
            <label htmlFor="xp"></label>
            <Button onClick={() => addXp(tempXp)} size="md" variant='dark' disabled={(Number(exp) >= maxXp)}>Add XP</Button>
            <Button onClick={() => levelUp()} disabled={(newLevel == 50) || (Number(exp) < maxXp)} variant="warning">{(newLevel == 50) ? "Max Level" : "Level Up"} </Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dice</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{props[0].name}</th>
                        <th>{props[0].dice}</th>
                        <th>{props[0].type}</th>
                    </tr>

                    {(newLevel >= 5) ?
                        <tr>
                            <th>{props[1].name}</th>
                            <th>{props[1].dice}</th>
                            <th>{props[1].type}</th>
                        </tr> : <tr></tr>
                    }{(newLevel >= 7) ?
                        <tr>
                            <th>{props[3].name}</th>
                            <th>{props[3].dice}</th>
                            <th>{props[3].type}</th>
                        </tr> : <tr></tr>

                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Tables