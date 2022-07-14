import React from 'react'
import Table from 'react-bootstrap/Table';

function Bag() {
  return (
    <div>
        <Table hover>
        <thead>
                    <tr>
                        <th>Equipment</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <th>Axe</th>
                    <th>Weapon</th>
                </tbody>
            </Table>
    </div>
  )
}

export default Bag