import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import Nav from './Nav';
import LocationsContainer from './LocationsContainer/LocationsContainer';



function Locations() {

const navigate = useNavigate()
const logout = (e) => {
  localStorage.setItem("loggedIn", false)
  navigate('/login')
}
    return (
      <div className="App">
         <button type="submit" className="delete-edit-btn" onClick={logout}>Logout</button>
        <Nav/>
        <h2 className="snowboard-header">Store Locations</h2>        
        <LocationsContainer></LocationsContainer>
      </div>
    );
  }
export default Locations