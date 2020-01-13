import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
//import StarWarsList from "./components/StarWarsList.js";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [person, setPerson] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios
    .get(`https://swapi.co/api/people/`)
    .then(res =>{
      console.log('this ones data: ', res.data.results);
      setPerson(res.data.results);
      console.log("the person is being logged here: ",setPerson);
    })
    .catch(err=>{
      console.log(`you goofed: `,err);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card>
        <CardTitle>Hello my name is: {}</CardTitle>
        <CardText></CardText>
        <CardText></CardText>
      </Card>
    </div>
  );
}

export default App;
