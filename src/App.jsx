import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Nav';
import Ski from './Ski';
import Snowboard from './Snowboard';
import Locations from './Locations';
import Home from './Home';
import Signup from './SignUp';
import Login from "./Login";
// import AuthContext from './AuthContext';
import LocationContext from './LocationContext';
import { useContext, useMemo, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  // const { auth, setAuth } = useContext(AuthContext)
  // console.log(auth, setAuth)
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [locations, setLocations] = useState([])
  const providerValue = useMemo(() => ({ locations, setLocations }), [locations, setLocations])
  const getLocations = async () => {
    try {
      const locations = await fetch('https://project5-backend.herokuapp.com/locations/')
      const parsedLocations = await locations.json();
      setLocations(parsedLocations.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getLocations()
  }, [])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn")
    console.log(isLoggedIn)
    if (isLoggedIn == "true") {
      navigate("/")
    } else {
      navigate("/login")
    }
  }, [])


  return (
  
      <LocationContext.Provider value={providerValue}>
        <div className="App">
          <h1 className="Header">SnowShelves</h1>
          <div className="container">
            <Routes>
              <Route path="/ski" element={<Ski />} />
              <Route path="/snowboard" element={<Snowboard />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <footer className="footer">SnowShelves</footer>
        </div>
      </LocationContext.Provider>
   
  );
}

export default App;


//const navigate = useNavigate()
//import {useNavigate} from ‘react-router-router’
//navigate(‘/‘, {replace: true})