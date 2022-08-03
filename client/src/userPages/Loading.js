import React from 'react'
import { useQuery } from '@apollo/client'
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
    const { id: characterId } = useParams()
    const { loading, data } = useQuery(QUERY_CHARACTER, {
        variables: { id: characterId }
    })
    const character = data?.character || []
    console.log(character.stats);
    const renderPage = () => {
        switch (character.class) {
            case "Archer":
                return <Archer character={character} />
            case "Bard":
                return <Archer character={character} />
            case "Sniper":
                return <Archer character={character} />
            case "Arcanist":
                return <Arcanist character={character} />
            case "Scholar":
                return <Arcanist character={character} />
            case "Summoner":
                return <Arcanist character={character} />
            case "Nomad":
                return <Nomad character={character} />
            case "Druid":
                return <Nomad character={character} />
            case "Beast Master":
                return <Nomad character={character} />
            case "Geomancer":
                return <Nomad character={character} />
            case "Pugilist":
                return <Pugilist character={character} />
            case "Monk":
                return <Pugilist character={character} />
            case "Fighter":
                return <Pugilist character={character} />
            case "Sorcerer":
                return <Sorcerer character={character} />
            case "Black Mage":
                return <Sorcerer character={character} />
            case "White Mage":
                return <Sorcerer character={character} />
            case "Red Mage":
                return <Sorcerer character={character} />
            case "Soldier":
                return <Soldier character={character} />
            case "Paladin":
                return <Soldier character={character} />
            case "Berserker":
                return <Soldier character={character} />
            case "Dark Knight":
                return <Soldier character={character} />
            case "Thief":
                return <Thief character={character} />
            case "Ninja":
                return <Thief character={character} />
            case "Reaper":
                return <Thief character={character} />
            default:
                break;
        }
    }
    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default Loading