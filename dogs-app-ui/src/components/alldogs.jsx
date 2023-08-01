import React from 'react'
import DogDetail from './dogdetail'

const AllDogs = () => {
    const dogs = [
        {"dog_id":1, "name": "Einstein", "age": 3},
        {"dog_id":2, "name": "Kaya", "age": 5},
        {"dog_id":3, "name": "Lassie", "age": 7},
    ]
  return (
    dogs.map(dog=>(
        <DogDetail info={dog} key={dog.dog_id.toString()} />
    ))
  )
}

export default AllDogs