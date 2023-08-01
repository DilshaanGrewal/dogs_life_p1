import React, { useState, useEffect } from "react";
import { getDogs } from "../services/DogService";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'


export const Dogs = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        getDogs()
            .then(({ data }) => {
                setDogs(data);
            });
    }, []);

    return (
        <Row>
            {dogs.map(dog =>
                <Card>
                    <Card.Body>
                        <Card.Title>ID: {dog.id}</Card.Title>
                        <Card.Text>Name: {dog.name} </Card.Text>
                        <Card.Text>Age: {dog.age}</Card.Text>
                    </Card.Body>
                </Card>)
            }
        </Row>
    )
};