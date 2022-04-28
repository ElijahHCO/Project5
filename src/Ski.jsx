import React from 'react';
import './App.css';
import Nav from './Nav';
import SkiContainer from './SkiContainer/SkiContainer';

function Ski() {
  return (
    <div className="App">
      <Nav/>
      <h2 className="ski-header">Skis</h2>
      <SkiContainer></SkiContainer>
    </div>
  );
}

export default Ski;
