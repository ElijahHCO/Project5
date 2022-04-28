import React, { Component } from 'react';
import axios from 'axios';



class Login extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            username: "",
            email: "",
            password: ""
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()
        const registered = {
            firstName: this.state.firstName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:3001/user/signup", registered)
            .then(response => console.log(response.data))

       this.setState({
           firstName: "",
           username: "",
           email: "",
           password: ""
       })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSumbit} className="form">
                            <h3 className="Header">SignUp</h3>
                            <input type="text" placeholder="First Name" onChange={this.changeFirstName} value={this.state.firstName} className="form-control form-group" />
                            <input type="text" placeholder="Username" onChange={this.changeUsername} value={this.state.username} className="form-control form-group" />
                            <input type="email" placeholder="Email" onChange={this.changeEmail} value={this.state.email} className="form-control form-group" />
                            <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} className="form-control form-group" />
                            <button type="submit" className="delete-edit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login