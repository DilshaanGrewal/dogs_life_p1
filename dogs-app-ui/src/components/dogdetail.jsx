import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const DogDetail = (props) => {
    const[counter, setCounter] = useState(0);

  return (
    <Card>
        <Card.Body>
            <Card.Title>dog_id: {props.info.id}</Card.Title>
            <Card.Text>Name: {props.info.name}</Card.Text>
            <Card.Text>Age: {props.info.age}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default DogDetail