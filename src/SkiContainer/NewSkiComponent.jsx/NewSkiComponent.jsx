import React, { useState, useContext } from "react";
import LocationContext from "../../LocationContext";

const NewSkiComponent = (props) => {
    const {locations} = useContext(LocationContext)
    const [showing, setShowing] = useState(false)
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    const [newSki, setNewSki] = useState({
        type: "Ski",
        productBrand: "",
        productModel: "",
        quantity: 0,
        location: ""
    })
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setNewSki({
            ...newSki,
            [e.target.name]: e.target.value
        })
    }
    const submitNewSki = (e) => {
        e.preventDefault()
        props.createNewSki(newSki)
        console.log("working", props.createNewSki)
        setNewSki({
            type: "Ski",
            productBrand: "",
            productModel: "",
            quantity: 0,
            location: ""
        })
        setIsValidState({
            valid: true,
            message: ""
        })
        setShowing(false)
    }

    return (
        <>
            {
                showing
                    ?
                    <div id="new-item-form">
                        <div className="btn-div">
                            <button className="x-btn" onClick={toggleShowing}>X</button>
                        </div>
                        <form className="form" onSubmit={(e) => submitNewSki(e)}>
                            {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                            {props.NewItemServerError ? <p className="form-error">{props.newItemServerError}</p> : null}
                            Brand: <input onChange={handleInputChange} required min="2" type="text" name="productBrand" value={newSki.productBrand} />
                            Model: <input onChange={handleInputChange} required min="2" type="text" name="productModel" value={newSki.productModel} />
                            Quantity: <input onChange={handleInputChange} required type="number" name="quantity" value={newSki.quantity} />
                            Location: <select onChange={handleInputChange} type="number" name="location" value={newSki.location}>
                                <option></option> {locations.length && locations.map((location)=>{
                                    return <option
                                    key={location.name}
                                    value={location._id}
                                    >
                                        {location.name}
                                    </option>
                                })
                            }
                                </select>
                            <button className="delete-edit-btn" type="submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button onClick={toggleShowing} className="add-equip-btn">Add Equipment</button>
            }
        </>
    )
}

export default NewSkiComponent
