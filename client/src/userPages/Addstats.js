import { React, useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_USERS } from '../utils/queries'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Stats(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          {`${props.character.name}`}
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder={'strength roll 2d6'} name='strength' value={props.createStats.strength} onChange={props.change()}/>
          <input type="text" placeholder={'dexterity roll 2d6'} name='dexterity' value={props.createStats.dexterity} onChange={props.change()}/>
          <input type="text" placeholder={'wisdom roll 2d6'} name='wisdom' value={props.createStats.wisdom} onChange={props.change()}/>
          <input type="text" placeholder={'intelligence roll 2d6'} name='intelligence' value={props.createStats.intelligence} onChange={props.change()}/>
          <input type="text" placeholder={'constitution roll 2d6'} name='constitution' value={props.createStats.constitution} onChange={props.change()}/>
          <input type="text" placeholder={'charisma roll 2d6'} name='charisma' value={props.createStats.charisma} onChange={props.change()}/>
          <input type="text" placeholder={'perception roll 2d6'} name='perception' value={props.createStats.perception} onChange={props.change()}/>
          <input type="text" placeholder={'health roll 2d6'} name='health' value={props.createStats.health} onChange={props.change()}/>
        </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          props.onHide()
        }}>Close
        </Button>
        <Button onClick={() => {
          props.onHide()
        }}>Proceed</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Stats