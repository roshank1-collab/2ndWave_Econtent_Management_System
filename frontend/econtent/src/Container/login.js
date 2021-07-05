import { Component } from "react"
import {  FaRegHandPointRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
    state = {
        userid: "",
        password: "",
        checkLogin: false,
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    class Login extends Component {
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
                            <img src={login} />
                        </div>
                    </div>
                </div>
            </div>
    )
}
}
    render() {
        if (this.state.checkLogin === true) {
            return window.location.href = "/dashboard"    
            // alert(localStorage.getItem('token'))
        }
        return (

            <section className="Form my-2 mx-2 pt-2 pb-2">
                <div className="container">
                    <div className="row no-gutters shadow" style={{ background: 'white', borderRadius: '3px' }}>

                        <div className="col-lg-6">

                            <img alt="login" src="./images/login.jpg" className="img-fluid" style={{ height: '400px' }} />


                        </div>
                        <div className="col-lg-5 no gutters">

                            <h1 className="font-weight-bold py-4" style={{ fontWeight:"bolder",fontSize:"35px",color: "#a018a0",fontFamily:"roboto" }}>Login</h1>
                            {/* <span style={{fontSize: '12px', marginTop: '-79px'}}>Enter your credentials to get started</span><br/> */}


                            <form style={{ marginLeft: "5px" }}>
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="uname" style={{fontFamily:"roboto" ,fontSize:"20px"}}>Email:</label>
                                        <input type="text" className="form-control" value={this.state.email} onChange={this.changeHandler} name="email" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="pwd" style={{fontFamily:"roboto" ,fontSize:"20px"}}>Password:</label>
                                        <input type="password" className="form-control" value={this.state.password} onChange={this.changeHandler} name="password" required />
                                    </div>
                                </div>

                            </form>


                            <p className="signUp text-left" style={{fontFamily:"roboto" ,fontSize:"17px"}}>Do have an Account?  <Link exact to="/register"><b style={{ color: "#a018a0" }}>Sign Up</b></Link></p>
                           {/*<a style={{ color: "blueviolet" }} href="#"><u>Forgot your password?</u></a>*/} 
                            <div className="form-row">
                                <div className="col-lg-5">
                                    <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bold", marginTop: "10px", border:'none',fontFamily:"roboto" ,fontSize:"18px" }} type="submit" onClick={this.loginUser} class="btn btn-primary"> Sign in <FaRegHandPointRight/> </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>



                    </div>
                </div>




            </section >



        )
    }
}
export default Login;
