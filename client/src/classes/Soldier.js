import {React, useState} from 'react'
import { arcanist } from '../skills/skills';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tables from "../components/Tables.js";

function Squire() {
    const [level, setLevel] = useState(0)
    const [job, setJob] = useState("Pugilist")
    let levels = level;
    const levelUp = () => {
      levels = levels + 1, 
      setLevel(levels)
    }
  return (
    <div>
        
      <div>
        <Tables props={arcanist} level={level}/>
        <button onClick={()=> {levelUp()}} disabled={(level == 50)}>{(level == 50) ? "Max Level" : "Level UP"} </button> <ProgressBar now={level} animated variant="success" striped width={100} />
        {(level == 30) ?
        <div className="secondClass"><img src="https://64.media.tumblr.com/b2711736d392c609fedcbd7983eb34fe/tumblr_inline_os6g4luO8H1qdq19t_640.jpg" alt="" srcset="" width={100} height={100}/><button onClick={() => setJob("Monk")}>Choose Monk?</button><button onClick={() => setJob("Black Belt")}>Choose Black Belt?</button></div>  :
        <div></div>
      }
      </div>
    </div>
  )
}

export default Squire