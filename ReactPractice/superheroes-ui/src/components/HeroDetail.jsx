import React from 'react'
// import batman from '../images/batman.jpeg'
import images from '..'

const HeroDetail = (props) => {
  return (
    <div>
        {/* <img src={batman} alt="Batman" height="250px"/> */}
        <img src={images[props.info.alias.replaceAll(/\s/g,'')]} alt={props.info.name} height="250px"/>
        <p id="blue-alias">Alias: {props.info.alias}</p>
        <p class="green-class">Name: {props.info.name}</p>
        <button class="green-class">Like</button>   
    </div>
  )
}

export default HeroDetail