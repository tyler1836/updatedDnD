import React from 'react'
import Table from 'react-bootstrap/Table';

function Tables({props, level}) {
    console.log(props);
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dice</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{props[0].name}</th>
                        <th>{props[0].dice}</th>
                        <th>{props[0].type}</th>
                    </tr>

                    {(level >= 5) ?
                        <tr>
                            <th>{props[1].name}</th>
                            <th>{props[1].dice}</th>
                            <th>{props[1].type}</th>
                        </tr> : <div></div>
                    }{(level >= 7) ?
                        <tr>
                            <th>{props[3].name}</th>
                            <th>{props[3].dice}</th>
                            <th>{props[3].type}</th>
                        </tr> : <div></div>

                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Tables