import React from 'react';
import './App.css';
import Nav from './Nav';
import { useNavigate } from "react-router-dom";
import SnowboardContainer from './SnowboardContainer/SnowboardContainer';

function Snowboard() {

  const navigate = useNavigate()
  const logout = (e) => {
    localStorage.setItem("loggedIn", false)
    navigate('/login')
  }


    return (
      <div className="App">
        <button type="submit" className="delete-edit-btn" onClick={logout}>Logout</button>
        <Nav/>
        <h2 className="snowboard-header">Snowboards</h2>        
        <SnowboardContainer></SnowboardContainer>
      </div>
    );
  }
  
export default Snowboard;
