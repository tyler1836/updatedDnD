import { React, useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';


function Tables(props) {
    /*
    props are equal to level and an array pulled from skills.js
    each class starts with skills up to level 30
    job starts at level 30 and contain all skills leaned up to that level
    skills start differentiating from 30 onwards 
    e.g. Scholar and summoner both have study from arcanist level 30 first skill is salve for scholar and fester for summoner
    */
    return (
        <div>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dice</th>
                        <th>Type</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{props.props[0].name}</th>
                        <th>{props.props[0].dice}</th>
                        <th>{props.props[0].type}</th>
                        <th>{props.props[0].info}</th>
                    </tr>{(props.level >= 3) ?
                        <tr>
                            <th>{props.props[1].name}</th>
                            <th>{props.props[1].dice}</th>
                            <th>{props.props[1].type}</th>
                            <th>{props.props[1].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 6) ?
                        <tr>
                            <th>{props.props[2].name}</th>
                            <th>{props.props[2].dice}</th>
                            <th>{props.props[2].type}</th>
                            <th>{props.props[2].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 9) ?
                        <tr>
                            <th>{props.props[3].name}</th>
                            <th>{props.props[3].dice}</th>
                            <th>{props.props[3].type}</th>
                            <th>{props.props[3].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 12) ?
                        <tr>
                            <th>{props.props[4].name}</th>
                            <th>{props.props[4].dice}</th>
                            <th>{props.props[4].type}</th>
                            <th>{props.props[4].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 15) ?
                        <tr>
                            <th>{props.props[5].name}</th>
                            <th>{props.props[5].dice}</th>
                            <th>{props.props[5].type}</th>
                            <th>{props.props[5].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 18) ?
                        <tr>
                            <th>{props.props[6].name}</th>
                            <th>{props.props[6].dice}</th>
                            <th>{props.props[6].type}</th>
                            <th>{props.props[6].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 21) ?
                        <tr>
                            <th>{props.props[7].name}</th>
                            <th>{props.props[7].dice}</th>
                            <th>{props.props[7].type}</th>
                            <th>{props.props[7].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 24) ?
                        <tr>
                            <th>{props.props[8].name}</th>
                            <th>{props.props[8].dice}</th>
                            <th>{props.props[8].type}</th>
                            <th>{props.props[8].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 27) ?
                        <tr>
                            <th>{props.props[9].name}</th>
                            <th>{props.props[9].dice}</th>
                            <th>{props.props[9].type}</th>
                            <th>{props.props[9].info}</th>
                        </tr> : <tr></tr>

                    }{(props.level >= 31) ?
                        <tr>
                            <th>{props.props[10].name}</th>
                            <th>{props.props[10].dice}</th>
                            <th>{props.props[10].type}</th>
                            <th>{props.props[10].info}</th>
                        </tr> : <tr></tr>
                    }{(props.level >= 33) ?
                        <tr>
                            <th>{props.props[11].name}</th>
                            <th>{props.props[11].dice}</th>
                            <th>{props.props[11].type}</th>
                            <th>{props.props[11].info}</th>
                        </tr> : <tr></tr>
                    }{(props.level >= 36) ?
                        <tr>
                            <th>{props.props[12].name}</th>
                            <th>{props.props[12].dice}</th>
                            <th>{props.props[12].type}</th>
                            <th>{props.props[12].info}</th>
                        </tr> : <tr></tr>
                    }{(props.level >= 39) ?
                        <tr>
                            <th>{props.props[13].name}</th>
                            <th>{props.props[13].dice}</th>
                            <th>{props.props[13].type}</th>
                            <th>{props.props[13].info}</th>
                        </tr> : <tr></tr>
                    }{(props.level >= 42) ?
                        <tr>
                            <th>{props.props[14].name}</th>
                            <th>{props.props[14].dice}</th>
                            <th>{props.props[14].type}</th>
                            <th>{props.props[14].info}</th>
                        </tr> : <tr></tr>
                    }{(props.level >= 46) ?
                        <tr>
                            <th>{props.props[15].name}</th>
                            <th>{props.props[15].dice}</th>
                            <th>{props.props[15].type}</th>
                            <th>{props.props[15].info}</th>
                        </tr> : <tr></tr>
                    }{(props.level >= 50) ?
                        <tr>
                            <th>{props.props[16].name}</th>
                            <th>{props.props[16].dice}</th>
                            <th>{props.props[16].type}</th>
                            <th>{props.props[16].info}</th>
                        </tr> : <tr></tr>
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Tables