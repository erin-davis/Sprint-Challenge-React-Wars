import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
//import StarWarsList from "./components/StarWarsList.js";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const App = () => {
  const [person, setPerson] = useState([]);
  console.log(`top of app`, person);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios
    .get(`https://swapi.co/api/people/`)
    .then(res =>{
      console.log('this ones data: ', res.data);
      setPerson(res.data.results);
    //  console.log("the person is being logged here: ", person);
    })
    .catch(err=>{
      console.log(`you goofed: `,err);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {person.map((ppl, i)=>{
        ppl[i] && <Card>
         <CardTitle>Hello my name is: {ppl[i].name}</CardTitle>
         <CardText>I weigh: {ppl[i].mass}</CardText>
         <CardText>I was born: {ppl[i].birth_year}</CardText>
       </Card>
      })
        }
    </div>
  );
}

export default App;
