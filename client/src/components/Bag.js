import { React, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';



function Bag() {
  const [bag, setBag] = useState({item: "", type: "", description: "" })
  let bagItems = {}
  const handleChange = (event) => {
    const {name, value} = event.target

    setBag({
      ...bag,
      [name]: value
    })
  }
  const addItems = (event) => {
    event.preventDefault()
    console.log(bag);
    bagItems += bag.item
    setBag({item: "", type: "", description: ""})
  }
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
      <Stack direction='vertical' gap={3}>
        <input type="text" name='item' value={bag.item} onChange={handleChange} />
        <label htmlFor="health"></label>
        <input type="text" name='type' value={bag.type} onChange={handleChange} />
        <label htmlFor="type"></label>
        <input type="text" name='description' value={bag.description} onChange={handleChange} />
        <label htmlFor="description"></label>
        <Button onClick={addItems}size="sm" variant='success'>Add</Button>
      </Stack>
    </div>
  )
}

export default Bag