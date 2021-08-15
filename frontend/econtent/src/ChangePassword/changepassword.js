import { Component } from "react"
import { FaLock, FaRegHandPointRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
class ChangePassword extends Component {
    state = {
        userid: "",
        password: "",
        checkPassword: false,
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changePasswordUser = (e) => {
        e.preventDefault(); // prevents from reloading page
        axios.post("http://localhost:90/user/changepassword", this.state)
            .then(
                (response) => {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userid', response.data.userid)
                    localStorage.setItem('success', response.data.success)
                    localStorage.setItem('passwordstatus', response.data.passwordstatus)

                    // localStorage.setItem('data', JSON.stringify(response.data.userData))
                    if (localStorage.getItem('token') === "undefined") {
                        this.setState({ checkPassword: false })
                        alert("Error: "+response.data.message)
                    }
                    else {
                        this.setState({ checkPassword: true })
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
        if (this.state.checkChangePassword === true) {
            return window.location.href = "/dashboard"
            // alert(localStorage.getItem('token'))
        }
        return (

            <section className="Form my-2 mx-2 pt-2 pb-2">
                <div className="container">
                    <div className="row no-gutters shadow" style={{ background: 'white', borderRadius: '3px' }}>

                        <div className="col-lg-6">

                            <img alt="ChangePassword" src="../images/pw.jpeg" className="img-fluid" style={{ height: '400px' }} />


                        </div>
                        <div className="col-lg-5 no gutters">

                            <h1 className="font-weight-bold py-4" style={{ fontWeight: "bolder", fontSize: "35px", color: "#a018a0", fontFamily: "roboto" }}>Change Password</h1>
                            {/* <span style={{fontSize: '12px', marginTop: '-79px'}}>Enter your credentials to get started</span><br/> */}
                            <form style={{ marginLeft: "5px" }}>
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="password" style={{ fontFamily: "roboto", fontSize: "20px" }}>CurrentPassword:</label>
                                        <input type="password" className="form-control" value={this.state.CurrentPassword} onChange={this.changeHandler} name="CurrentPassword" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="pwd" style={{ fontFamily: "roboto", fontSize: "20px" }}>NewPassword:</label>
                                        <input type="password" className="form-control" value={this.state.NewPassword} onChange={this.changeHandler} name="Newpassword" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="pwd" style={{ fontFamily: "roboto", fontSize: "20px" }}>ConfirmPassword:</label>
                                        <input type="password" className="form-control" value={this.state.ConfirmPassword} onChange={this.changeHandler} name="Confirmpassword" required />
                                    </div>
                                </div>

                            </form>
                            <div className="form-row">
                                <div className="col-lg-5">
                                    <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bold", marginTop: "10px", border: 'none', fontFamily: "roboto", fontSize: "18px" }} type="submit" onClick={this.loginUser} class="btn btn-primary"> ChangePassword <FaLock /> </button>
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
export default ChangePassword;