import { useState, useEffect, useContext } from 'react';
import NewEquipComponent from './NewEquipComponent/NewEquipComponent';
import SingleEquipComponent from './SingleEquipComponent.jsx/SingleEquipComponent';
import LocationContext from '../LocationContext';


const EquipmentContainer = () => {
    const [equips, setEquips] = useState([])
    const {locations, setLocations} = useContext(LocationContext)
    const [newEquipServerError, setNewEquipServerError] = useState("")
    const getLocations = async () => {
        try {
            const locations = await fetch('https://project5-backend.herokuapp.com/locations/')
            const parsedLocations = await locations.json();
            setLocations(parsedLocations.data)
        } catch (err) {
            console.log(err)
        }
    }
    const createNewEquip = async (newEquip) => {
        newEquip.location = [newEquip.location]
        try {
            const apiResponse = await fetch("https://project5-backend.herokuapp.com/equips", {mode: 'no-cors'} ,{
                method: "POST",
                body: JSON.stringify(newEquip),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json()
            console.log(parsedResponse)
            if (parsedResponse.success) {
                setEquips([parsedResponse.data, ...equips])
            } else {
                setNewEquipServerError(parsedResponse.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const deleteEquip = async (idToDelete) => {
        try {
            const apiResponse = await fetch(`https://project5-backend.herokuapp.com/equips/${idToDelete}`, {mode: 'no-cors'} ,{
                method: "DELETE"
            })
            const parsedResponse = await apiResponse.json()
            if (parsedResponse.success) {
                const newEquips = equips.filter(equip => equip._id !== idToDelete)
                setEquips(newEquips)
            } else {

            }
            console.log(parsedResponse)
        } catch (err) {
            console.log(err)
        }
        console.log("deleting item ID" + idToDelete)
    }
    const getEquips = async () => {
        try {
            const equips = await fetch('https://project5-backend.herokuapp.com/equips')
            const parsedEquips = await equips.json();
            console.log(parsedEquips)
            setEquips(parsedEquips.data)
        } catch (err) {
            console.log(err)
        }
    }
    const updateEquip = async (idToUpdate, equipToUpdate) => {
        try {
            const apiResponse = await fetch(`https://project5-backend.herokuapp.com/equips/${idToUpdate}`, {mode: 'no-cors'} ,{
                method: "PUT",
                body: JSON.stringify(equipToUpdate),
                headers: {
                    "Content-type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json();
            if (parsedResponse.success) {
                const newEquips = equips.map(equip => equip._id === idToUpdate ? equipToUpdate : equip)
                setEquips(newEquips)
            } else {

            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getEquips();  
        getLocations();
    }, [])
    return (
        <div className="container-div">
            <h2 className="header-two">Equipment</h2>
            <div className="display-div">
                <NewEquipComponent
                    locations={locations}
                    newEquipServerError={newEquipServerError}
                    createNewEquip={createNewEquip}></NewEquipComponent>
                {equips.reverse().map((equip) => {
                    return <SingleEquipComponent key={equip._id} locations={locations} equip={equip} deleteEquip={deleteEquip} updateEquip={updateEquip}></SingleEquipComponent>
                })}
            </div>
        </div>
    )
}

export default EquipmentContainer;