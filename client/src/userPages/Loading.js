import React from 'react'
import {useQuery} from '@apollo/client'
import { QUERY_CHARACTER } from "../utils/queries.js";
import { useParams, useLocation } from 'react-router-dom';


import {
    Arcanist,
    Archer,
    Nomad,
    Pugilist,
    Soldier,
    Sorcerer,
    Thief
} from '../classes'

function Loading() {
    const {id: characterId} = useParams()
    const {loading, data} = useQuery(QUERY_CHARACTER, {
        variables: {id: characterId}
    })
    const character = data?.character || []
    const renderPage = () => {
        console.log(`rendering ${character.class}`);
        switch (character.class) {
            case "Sorcerer":
                <Sorcerer character={character} />
                break;
            case "Pugilist":
                return <Pugilist character={character} />
            default:
                break;
        }
    }
    if(loading){
        return <div>Loading...</div>
    }
  return (
       <div>
        {renderPage()}
       </div>
  )
}

export default Loading