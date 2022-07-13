import {React, useState} from "react";
import {fig} from "./skills/skills.js"
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  const [level, setLevel] = useState(0)
  let levels = level;
  const levelUp = () => {
    levels = levels + 1, 
    setLevel(levels)
  }
  return (
    <main>
      <div>
        <h1>{fig[0].name} {fig[0].power}</h1> 
        {(level >= 5) ? 
        <div><ul> <li>{fig[1].name}</li> <li>{fig[1].power}</li></ul>  </div> : <div></div> 
      }
        <button onClick={()=> {levelUp()}} disabled={(level == 50)}>{(level == 50) ? "Max Level" : "Level UP"} </button> <ProgressBar now={level} animated variant="success" striped />
        {(level == 30) ?
        <div className="secondClass"><img src="https://64.media.tumblr.com/b2711736d392c609fedcbd7983eb34fe/tumblr_inline_os6g4luO8H1qdq19t_640.jpg" alt="" srcset="" width={100} height={100}/><button>Choose monk?</button><button>Choose pugilist?</button><button>Choose warrior?</button></div>  :
        <div></div>
      }
      </div>
    </main>
  );
}

export default App;
