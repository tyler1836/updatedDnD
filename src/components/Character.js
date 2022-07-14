import { React, useState } from 'react'
import Table from 'react-bootstrap/esm/Table';

function Character({ props }) {
    console.log(props);
    return (
        //db name
        <div>
            <h1>Tyler</h1>

            <Table >
                <thead>
                    <tr>
                        <th>Race</th>
                        <th>Level</th>
                        <th>Alignment</th>
                    </tr>
                    <tr>
                        <th>Background</th>
                        <th>Class</th>
                    </tr>
                    <tbody>
                        
                    </tbody>
                </thead>
            </Table>
        </div>
    )
}

export default Character