import React from 'react';
import './App.css';
import Nav from './Nav';
import LocationsContainer from './LocationsContainer/LocationsContainer';

function Locations() {
    return (
      <div className="App">
        <Nav/>
        <h2 className="snowboard-header">Store Locations</h2>        
        <LocationsContainer></LocationsContainer>
      </div>
    );
  }
export default Locations