import { React, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Gi3DHammer, GiLeatherBoot, GiRun, GiShield, GiAbstract008 } from 'react-icons/gi'


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
        if ((Number(heal) + tempDamage) > maxhp) {
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
            <div className='hardStat'>
                <div className="hardStats">
                    <div>
                        <p>Armor Class</p>
                    </div>
                    <div>
                        <GiShield style={{ fontSize: 60, color: "rgba(0,255,255,.4)" }} />
                    </div>
                    <div>
                        <p>Based on Equip + strength</p>
                    </div>
                </div>
                <div className="hardStats">
                    <div>
                        <p>Initiative</p>
                    </div>
                    <div>
                        <GiAbstract008 style={{ fontSize: 60, color: "purple" }} />
                    </div>
                    <div>
                        <p>Based on Equip + strength i</p>
                    </div></div>
                <div className="hardStats">
                    <div>
                        <p>Speed/Movement</p>
                    </div>
                    <div>
                        <GiLeatherBoot style={{ fontSize: 60, color: "brown" }} />
                    </div>
                    <div>
                        <p>Based on Equip + strength</p>
                    </div></div>
            </div>
            <div>
                <div className="hp"><ProgressBar now={hp} animated variant="danger" label={`${tempDamage} Health`} />{(hp == 0) ? "Uh oh time for saving throws" : ""}</div>
                <Stack direction='vertical' gap={3}>
                            <input type="text" name='health' value={damage} onChange={() => setDamage(event.target.value)} />
                            <label htmlFor="health"></label>
                            <Button onClick={() => handledamage(damage)} size="sm" variant='danger' disabled={(tempDamage == 0)}>Hit</Button>
                        <input type="text" name='health' value={tempHp} onChange={() => setTempHp(event.target.value)} />
                        <label htmlFor="health"></label>
                        <Button onClick={() => handleheal(tempHp)} size="sm" variant='success' disabled={(tempDamage == maxhp)}>Heal</Button>
                </Stack>
            </div>

        </div>
    )
}

export default Hits