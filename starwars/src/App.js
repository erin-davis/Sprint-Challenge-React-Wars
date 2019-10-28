import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

//"https://swapi.co/api/people"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [person, setPerson] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{

    axios
    .get('https://swapi.co/api/people/?format=json')
    .then((response) =>{
      console.log(response.data.results);
      setPerson(response.data.results);
    })
    .catch(err =>{
      console.log(err);
    });

  }, [])


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {person.map((setPerson) =>{
        return(
          <div className="chara">
            <h1>Name: {setPerson.name} </h1>
            <p>My hair color is {setPerson.hair_color}</p>
            <p>I weight {setPerson.mass} in kilos</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
