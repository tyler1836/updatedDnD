import { React, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {GppGood, FastForward, Bolt} from '@mui/icons-material';


function Hits() {
    const [hp, setHp] = useState(100)
    const [damage, setDamage] = useState("")
    let maxhp = 1600
    const [tempDamage, setTempDamage] = useState(maxhp)
    const [tempHp, setTempHp] = useState("")
    //max hp from database set it to a variable
    const handledamage = (damage) => {
        let percent = (Number(damage) / maxhp) * 100
        console.log(percent);
        setTempDamage(maxhp - (Number(damage)))
        setHp(hp - percent)
        setDamage("")
    }
    const handleheal = (heal) => {
        if (tempDamage == maxhp) {
            return
        }
        if ((heal + tempDamage) > maxhp) {
            setTempDamage(maxhp)
            setHp(100)
            return
        }
        let percent = (Number(heal) / maxhp) * 100
        setHp(hp + percent)
        setTempDamage(tempDamage + Number(heal))
    }

    return (
        <div>
            <div>
                <div className="armor"><GppGood sx={{fontSize: 150}}/><FastForward sx={{fontSize: 150}}/><Bolt sx={{fontSize: 150}}/>Based on Equip + strength</div>
                <div className="initiative">Based on Speed?</div>
                <div className="speed">Level up stat</div>
            </div>
            <div>
                <div className="hp"><ProgressBar now={hp} animated variant="danger" label={`${tempDamage} Health`} />{(hp == 0) ? "Uh oh time for saving throws" : ""}</div>
                <Stack direction='horizontal' gap={3}>
                    <div>
                        <input type="text" name='health' value={damage} onChange={() => setDamage(event.target.value)} />
                        <label htmlFor="health"></label>
                        <Button onClick={() => handledamage(damage)} size="sm" variant='danger' disabled={(tempDamage == 0)}>Hit</Button>
                    </div>
                    <div>
                        <input type="text" name='health' value={tempHp} onChange={() => setTempHp(event.target.value)} />
                        <label htmlFor="health"></label>
                        <Button onClick={() => handleheal(tempHp)} size="sm" variant='success' disabled={(tempDamage == maxhp)}>Heal</Button>
                    </div>
                </Stack>
            </div>

        </div>
    )
}

export default Hits