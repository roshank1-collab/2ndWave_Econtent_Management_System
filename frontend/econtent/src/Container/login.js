import React, { Component } from 'react'
import './login.css';
import logo from './login-image.jpg'

class login extends Component {
    render(){
    return (
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Login</h1><br/>
                        <span>Enter your credentials to get started</span><br/>
                        <input type="email" placeholder="Email" required="true" />
                        <input type="password" placeholder="Password" required="true" />
                        <a href="#">Forgot your password?</a>
                        <button>Login</button><br/>
                        <span>Do not have an account ?<a href="#"> Sign up</a></span>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <img src={logo} />
                        </div>
                    </div>
                </div>
            </div>
    )
}
}

export default login;