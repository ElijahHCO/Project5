import React from 'react';
import './App.css';
import Nav from './Nav';
import SnowboardContainer from './SnowboardContainer/SnowboardContainer';

function Snowboard() {
    return (
      <div className="App">
        <Nav/>
        <h2 className="snowboard-header">Snowboards</h2>        
        <SnowboardContainer></SnowboardContainer>
      </div>
    );
  }
  
export default Snowboard;
