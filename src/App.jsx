import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Ski from './Ski';
import Snowboard from './Snowboard';
import Locations from './Locations';
import EquipmentContainer from './EquipmentContainer/EquipmentContainer';
import LocationContext from './Context';
import { useContext, useMemo, useState, useEffect } from 'react';
function App() {
  const [locations, setLocations] = useState([])
  const providerValue = useMemo(()=>({locations, setLocations}), [locations, setLocations])
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
  return (
    <Router>
      <LocationContext.Provider value={providerValue}>
      <div className="App">
        <h1 className="Header">SnowShelves</h1>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/ski" element={<Ski />} />
            <Route path="/snowboard" element={<Snowboard />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/" element={<EquipmentContainer />} />
          </Routes>
        </div>
        <footer className="footer">SnowShelves</footer>
      </div>
      </LocationContext.Provider>
    </Router>
  );
}

export default App;
