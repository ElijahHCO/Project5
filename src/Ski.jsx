import React from 'react';
import './App.css';
import Nav from './Nav';
import { useNavigate } from "react-router-dom";
import SkiContainer from './SkiContainer/SkiContainer';

function Ski() {


  const navigate = useNavigate()
  const logout = (e) => {
    localStorage.setItem("loggedIn", false)
    navigate('/login')
  }

  return (
    <div className="App">
       <button type="submit" className="delete-edit-btn" onClick={logout}>Logout</button>
      <Nav/>
      <h2 className="ski-header">Skis</h2>
      <SkiContainer></SkiContainer>
    </div>
  );
}

export default Ski;
