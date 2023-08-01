import React, { useState } from 'react'
import HeroDetail from './HeroDetail'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { useEffect } from 'react';
import { getAllHeroes } from '../services/hero-service';

const AllHeroes = () => {

    const [total, setTotal] = useState(0);

    const totalCountHandler = (name) =>{
        console.log(name)
        setTotal(total+1);
    }

    const [heroes,setHeroes] = useState([]);

    useEffect(()=>{
        getHeroesFromAPI();}, 
        []
    );
    
    const getHeroesFromAPI = ()=>{}

    getAllHeroes().then(res => {
      setHeroes(res.data);
    })
     .catch(err => {
       setHeroes([]);
       console.log(err);
     })

  return (
    <>
    <h1> Total count is: {total}</h1>
    <Container>
    <Row >
    {heroes.map(hero => (
        <Col lg="3">
        <div className='container' key={hero.id.toString()}>
          <HeroDetail info={hero} parentCount={totalCountHandler} />
        </div>
        </Col>
      ))}
  </Row>
  </Container>
  </>
  )
}

export default AllHeroes