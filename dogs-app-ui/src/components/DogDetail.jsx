import React from 'react'
import Card from "react-bootstrap/Card";


function DogDetail(props) {

  return (
    <Card >
    <Card.Body >
        <Card.Title >Name: {props.info.name} </Card.Title>
        <Card.Text >Age: {props.info.age}</Card.Text>
    </Card.Body>
    </Card>
  )
}

export default DogDetail