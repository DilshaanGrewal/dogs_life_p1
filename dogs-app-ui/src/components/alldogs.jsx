import React from 'react'
import DogDetail from './dogdetail'
import { useState, useEffect } from 'react';
import { getAllDogs } from '../services/dog-service'

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
  
  return (
    dogs.map(dog=>(
        <DogDetail info={dog} key={dog.dog_id} />
    ))
  )
}

export default AllDogs