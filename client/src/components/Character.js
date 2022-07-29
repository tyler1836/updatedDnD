import { React, useState } from 'react'
import Table from 'react-bootstrap/esm/Table';

function Character(props) {
    console.log(props)
    return (
        //db name
        <div>
            <h1>{props.character.name}</h1>

            <Table >
                <thead>
                    <tr>
                        <th>Race: {props.character.race}</th>
                        <th>Level: {props.character.stats[0].level}</th>
                        <th>Alignment: {props.character.alignment}</th>
                    </tr>
                    <tr>
                        <th>Background: {props.character.background}</th>
                        <th>Class: {props.character.class}</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    )
}

export default Character