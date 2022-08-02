import { React, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import { ADD_EQUIPMENT, DELETE_EQUIPMENT } from '../utils/mutations'
import { FaRegTrashAlt } from 'react-icons/fa'


import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';



function Bag(props) {
  const [showBag, setShowBag] = useState(false)
  const [show, setShow] = useState(false)
  const [bag, setBag] = useState({ characterId: "", name: "", type: "", definition: "" })
  const {id: characterId} = useParams()
  const [addEquipment, {error: addError}] = useMutation(ADD_EQUIPMENT)
  const [deleteEquipment, {error: deletError}] = useMutation(DELETE_EQUIPMENT)
  const equipment = props.character.equipment


  const handleChange = (event) => {
    const { name, value } = event.target

    setBag({
      ...bag,
      [name]: value
    })
  }
  const addItems = async (event) => {
    event.preventDefault()
    console.log(bag);
    bag.characterId = characterId
    await addEquipment({
      variables: {...bag}
    })
    setBag({ name: "", type: "", definition: "" })
    window.location.reload()
  }

  const deleteItem = async(args) => {
    console.log(args)
    await deleteEquipment({
      variables: {characterId: characterId, equipmentId: args}
    })
  }
  return (
    <div className='bag'>
        <button className='showBtn' onClick={() => setShowBag(!showBag)}>Show Items</button>
        <button className='showBtn' onClick={() => setShow(!show)}>Add Items</button>
      {showBag ?
      <Table bordered hover variant="light">
        <thead>
          <tr>
            <th>Equipment</th>
            <th>Type</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((equipment) => {
            return(
            <tr key={equipment._id} id={equipment._id}>
              <th>{equipment.name}</th>
              <th>{equipment.type}</th>
              <th>{equipment.definition}</th>
              <th><FaRegTrashAlt onClick={() => deleteItem(equipment._id)} /></th>
            </tr>
            )
          })}
        </tbody>
      </Table>
      : ""}
      
      {show ? 
      <Stack direction='vertical' gap={3}>
        <input type="text" name='name' value={bag.name} onChange={handleChange} placeholder="Item Name" />
        <input type="text" name='type' value={bag.type} onChange={handleChange} placeholder="Item Type" />
        <input type="text" name='definition' value={bag.definition} onChange={handleChange} placeholder="Item Description" />
        <Button onClick={addItems} size="sm" variant='success'>Add</Button>
      </Stack>
      : ""}
    </div>
  )
}

export default Bag