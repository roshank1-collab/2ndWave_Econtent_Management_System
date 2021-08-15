import { Component } from "react"
import { FaRegHandPointRight } from 'react-icons/fa'
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

    loginUser = (e) => {
        e.preventDefault(); // prevents from reloading page
        axios.post("http://localhost:90/user/login", this.state)
            .then(
                (response) => {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userid', response.data.userid)
                    localStorage.setItem('success', response.data.success)
                    localStorage.setItem('loginstatus', response.data.loginstatus)

                    // localStorage.setItem('data', JSON.stringify(response.data.userData))
                    if (localStorage.getItem('token') === "undefined") {
                        this.setState({ checkLogin: false })
                        alert("Error: "+response.data.message)
                    }
                    else {
                        this.setState({ checkLogin: true })
                    }
                }
            )
            .catch(
                (err) => {
                    alert(err)
                }
            )

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

                            <h1 className="font-weight-bold py-4" style={{ fontWeight: "bolder", fontSize: "35px", color: "#a018a0", fontFamily: "roboto" }}>Login</h1>
                            {/* <span style={{fontSize: '12px', marginTop: '-79px'}}>Enter your credentials to get started</span><br/> */}


                            <form style={{ marginLeft: "5px" }}>
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="uname" style={{ fontFamily: "roboto", fontSize: "20px" }}>Email:</label>
                                        <input type="text" className="form-control" value={this.state.email} onChange={this.changeHandler} name="email" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="pwd" style={{ fontFamily: "roboto", fontSize: "20px" }}>Password:</label>
                                        <input type="password" className="form-control" value={this.state.password} onChange={this.changeHandler} name="password" required />
                                    </div>
                                </div>

                            </form>


                            <p className="signUp text-left" style={{ fontFamily: "roboto", fontSize: "17px" }}>Do have an Account?  <Link exact to="/register"><b style={{ color: "#a018a0" }}>Sign Up</b></Link></p>
                            {/*<a style={{ color: "blueviolet" }} href="#"><u>Forgot your password?</u></a>*/}

                            <p className="signUp text-left" style={{ fontFamily: "Helvetica", fontSize: "15px" }}>  <Link exact to="/changepassword"><b style={{ color: "#187bcd" }}> Forget Password?</b></Link></p>
                            <div className="form-row">
                                <div className="col-lg-5">
                                    <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bold", marginTop: "10px", border: 'none', fontFamily: "roboto", fontSize: "18px" }} type="submit" onClick={this.loginUser} class="btn btn-primary"> Sign in <FaRegHandPointRight /> </button>
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