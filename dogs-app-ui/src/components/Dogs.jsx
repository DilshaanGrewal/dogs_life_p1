import React, { useState, useEffect } from "react";
import { getDogs } from "../services/DogService";
import Card from 'react-bootst'


export const Dogs = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        getDogs()
            .then(({ data }) => {
                setDogs(data);
            });
    }, []);

    return (
        <>
            {dogs.map(dog =>
                <div>
                    <div>ID: {dog.id}</div>
                    <div>Name: {dog.name} </div>
                    <div>Age: {dog.age}</div>
                </div>)
            }
        </>
    )
};