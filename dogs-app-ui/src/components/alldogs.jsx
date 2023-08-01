import React from 'react'
import DogDetail from './dogdetail'
import { useState, useEffect } from 'react';
import { getAllDogs } from '../services/dog-service'
import Row from 'react-bootstrap/Row';

const AllDogs = () => {

  const [dogs,setDogs] = useState([]);
  useEffect(()=>{
    getDogsFromAPI();}, 
    []
  );
  const getDogsFromAPI = ()=>{}

  getAllDogs()
    .then(res => {
      setDogs(res.data);
    })
    .catch(err => {
      setDogs([]);
      console.log(err);
  })

  const total = dogs.length
  
  return (
    <>
      <h1>Total Count is: {total}</h1>
      <Row>
      {dogs.map(dog =>(
          <div className='container' key={dog.dog_id} >
            <DogDetail info={dog} />
          </div>
      ))}
      </Row>
    </>
  )
}

export default AllDogs