import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Nav from './Nav';
import './App.css';

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn")
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, [])

  const logout = (e) => {
    localStorage.setItem("loggedIn", false)
    navigate('/login')
  }

  return (
    <div>
      <h1 className="home-header">Welcome to Snowshelves</h1>
      <button type="submit" className="delete-edit-btn" onClick={logout}>Logout</button>
      <Nav></Nav>
    </div>
  );
}

export default Home;

