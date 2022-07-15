import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';


function Stats() {
  return (
    <ListGroup>
    <ListGroup.Item>Proficiency Bonus</ListGroup.Item>
    <ListGroup.Item>Inspiration</ListGroup.Item>
    <ListGroup.Item>Strength</ListGroup.Item>
    <ListGroup.Item>Dexterity</ListGroup.Item>
    <ListGroup.Item>Constitution</ListGroup.Item>
    <ListGroup.Item>Intelligence</ListGroup.Item>
    <ListGroup.Item>Wisdom</ListGroup.Item>
    <ListGroup.Item>Charisma</ListGroup.Item>
    <ListGroup.Item>Passive Wisdom/Perception</ListGroup.Item>
  </ListGroup>
  )
}

export default Stats