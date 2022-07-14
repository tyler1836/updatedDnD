import {React, useState} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


function Hits() {
    const [hp, setHp] = useState(100)
    const [damage, setDamage] = useState(0)
    let maxhp = 1600
    let damaged = maxhp
    //max hp from database set it to a variable
    const handleChange = (damage) => {
        let damaged = maxhp - (Number(damage))
        setDamage(0)
    }
  return (
    <div>
        <div>
            <div className="armor">Based on Equip + strength</div>
            <div className="initiative">Based on Speed?</div>
            <div className="speed">Level up stat</div>
        </div>
        <div>
            <div className="hp"><ProgressBar now={hp} animated variant="danger" label={`${damaged} Health`}/></div>
            <input type="text"  name='health' onChange={()=> setDamage(event.target.value)}/>
            <label htmlFor="health"></label>
            <button onClick={() => handleChange(damage)}>Hit</button> 
        </div>
    </div>
  )
}

export default Hits