import React from 'react'
// import batman from '../images/batman.jpeg'
import images from '../index'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const HeroDetail = (props) => {
  return (
    // <div>
    //     {/* <img src={batman} alt="Batman" height="250px"/> */}
    //     <img src={images[props.info.alias.replaceAll(/\s/g,'')]} alt={props.info.name} height="250px"/>
    //     <p id="blue-alias">Alias: {props.info.alias}</p>
    //     <p class="green-class">Name: {props.info.name}</p>
    //     <button class="green-class">Like</button>   
    // </div>

    <Card >
      <div className="imgContainer">
        <Card.Img variant="top" src={images[props.info.alias.replaceAll(/\s/g, '')]} width="150px" />
      </div>
      <Card.Body >
        <Card.Title >Alias: {props.info.alias}</Card.Title>
        <Card.Text >Name: {props.info.name}</Card.Text>
        <Button variant="primary">Like</Button>
      </Card.Body>
    </Card>
  )
}

export default HeroDetail