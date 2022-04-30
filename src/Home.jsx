import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import './App.css';

function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("loggedIn")
        if (!isLoggedIn) {
          navigate("/login")
        }
      }, [])

    return (
        <div>
            <h1 className="home-header">Welcome to Snowshelves</h1>
            
        </div>
    );
}

export default Home; 

