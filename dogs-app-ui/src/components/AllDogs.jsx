import React, { useState } from 'react'
import { getAllDogs } from './services/dog-service';
import { useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import DogDetail from './DogDetail';

function AllDogs() {

    const [total, setTotal] = useState(0);

    const totalCountHandler = (name) =>{
        console.log(name)
        setTotal(total+1);
    }

    const [dogs,setDogs] = useState([]);

    useEffect(()=>{
        getDogsFromAPI();}, 
        []
    );

    const getDogsFromAPI = ()=>{}

    getAllDogs().then(res => {
        setDogs(res.data);
    })
     .catch(err => {
        setDogs([]);
       console.log(err);
     })



  return (
    <Row mb="20px">
        <h1> Total count is: {dogs.length}</h1>
        {dogs.map(dogs => (
            <Col lg="3">
            <div key={dogs.id}>
            <DogDetail info={dogs}/>
            </div>
            </Col>
        ))}
    </Row>
  )
}

export default AllDogs