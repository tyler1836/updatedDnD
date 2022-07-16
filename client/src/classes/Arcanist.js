import { React, useState, Suspense, useEffect } from 'react'
import { arcanist } from '../skills/skills';

import Tables from "../components/Tables.js";
import Bag from '../components/Bag';
import Character from '../components/Character'
import Stats from '../components/Stats';
import Hits from '../components/Hits';

function Arcanist() {
  const [job, setJob] = useState("Pugilist")
  let level = 1
  return (
    <div>
      {/* <Suspense>
            {(job == "Pugilist") ? }
        </Suspense> */}
      <div>
        <div className='character'>
          <Character props={job} />
        </div>
        <div className='stats'>
          <Stats />
          <Hits />
        </div>
        <div className='skills'>
          <Tables props={arcanist} level={level} />
        </div>
        {(level == 30) ?
          <div className="secondClass"><img src="https://64.media.tumblr.com/b2711736d392c609fedcbd7983eb34fe/tumblr_inline_os6g4luO8H1qdq19t_640.jpg" alt="" srcset="" width={100} height={100} /><button onClick={() => setJob("Monk")}>Choose Monk?</button><button onClick={() => setJob("Black Belt")}>Choose Black Belt?</button></div> :
          <div></div>
        }
        <Bag />
      </div>
    </div>
  )
}

export default Arcanist