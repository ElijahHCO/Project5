import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate()

    const changeEmail = (event) => setEmail(event.target.value)
    const changePassword = (event) => setPassword(event.target.value)
    const onSignUp = (e) => {
        e.preventDefault()
        navigate('/signup')
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const credentials = {
            email: email,
            password: password
        }
        axios.post("http://localhost:3001/user/login", credentials)
            .then(response => {
                console.log(response)
                if (response.data) {
                    localStorage.setItem("loggedIn", true);
                    navigate("/")
                } else {
                    setLoginError(true)
                }
            })


        //    this.setState({
        //        firstName: "",
        //        username: "",
        //        email: "",
        //        password: ""
        //    })
    }

    return (
        <div>
            <div className="container">
                <div className="form-div">
                    <form className="form">
                        <h3 className="Header">Login</h3>
                        <input type="email" placeholder="Email" onChange={changeEmail} value={email} className="form-control form-group" />
                        <input type="password" placeholder="Password" onChange={changePassword} value={password} className="form-control form-group" />
                        <button type="submit" className="delete-edit-btn" onClick={onSubmit}>Submit</button>
                        <button type="submit" className="sign-up-btn" onClick={onSignUp}>Sign Up</button>
                    </form>
                    {loginError ? <p>Wrong password</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Login