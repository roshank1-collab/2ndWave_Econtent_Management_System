import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { FaRegHandPointRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';
import React from 'react';
toast.configure()

class Register extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        institution_ID: "",
        Profile_Picture: "",
        firstname: "",
        lastname: "",
        gender: "",
        Dob: "",
        address: "",
        institution_name: "",
        phone_number: null,
        email: "",
        password: "",
    }
}

    fileHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        }
        )
    }
    
 
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        let phone = e.target.phone_number
        let val = e.target.value
        if (phone === "phone_number") {
            if (!Number(val)) {
              alert("phone number should be number");
            }
          }
          this.setState({[phone]: val});
    }
  

    submitUser = (e) => {
        e.preventDefault(); // prevents from reloading page
        const data = new FormData()
        data.append("institution_ID", this.state.institution_ID)
        data.append("Profile_Picture", this.state.Profile_Picture)
        data.append("firstname", this.state.firstname)
        data.append("lastname", this.state.lastname)
        data.append("gender", this.state.gender)
        data.append("address", this.state.address)
        data.append("institution_name", this.state.institution_name)
        data.append("Phone", this.state.phone)
        data.append("email", this.state.email.trim())
        data.append("password", this.state.password)
        data.append("Dob", this.state.Dob)
        data.append("phone_number", this.state.phone_number)

        console.log(this.state.institution_ID)
        console.log(this.state.Profile_Picture)
        axios.post("http://localhost:90/User/SignUp", data)
            .then(
                (response) => {
                    toast(response.data.message)
                    if (response.data.status == "true") {
                        <Redirect to="/login" />
                    }
                }
            )
            .catch(
                (error) => {
                    toast(error.message)
                }
            )
    }
   


    render() {

      
        return (
            <section className="Form my-2 mx-2 pt-2 pb-2" style={{ fontFamily: 'roboto' }}>
                <div className="container">
                    <div className="row no-gutters shadow" style={{ background: 'white', borderRadius: '3px' }}>
                        <div className="col-lg-5">

                            <img src="./images/pp.jpg" alt="register" className="img-fluid" style={{ marginTop: '50px' }} />


                        </div>
                        <div className="col-lg-7">
                            <h2 className="py-4 mx-4" style={{ fontWeight: 'bolder', fontSize: "35px", color: "#51227F", fontFamily: "roboto" }}>
                                Sign Up
                            </h2>
                            <p className="mx-4" style={{ color: '#BF3A89', fontSize: "20px", fontFamily: "roboto" }}>Please fill all your correct details to signup, so that you can access the content by logging in.</p>
                            <form className="py-4" style={{ color: 'black', fontSize: "17px" }}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Firstname</label>
                                        
                                            <input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={this.changeHandler}   required />
    
                                        </div>
                                        <div className="col-md-6">
                                            <label>Lastname</label>
                                            <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.changeHandler} required />
                                        </div>
                                    </div>
                                </div>



                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="categories">Gender &nbsp;&nbsp;&nbsp;</label>
                                            <select className="form-control" name="gender" value={this.state.gender} onChange={this.changeHandler} required>
                                                <option selected>Select Gender </option>
                                                <option value="Math">Male</option>
                                                <option value="Nepali">Female</option>
                                                <option value="English">Others</option>
                                                <option value="Science">Prefer not to say</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6">
                                            <label >Date of Birth</label>
                                            <input type="date" className="form-control" name="Dob" value={this.state.Dob} onChange={this.changeHandler} required />
                                        </div>
                                    </div>

                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Address</label>
                                            <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.changeHandler} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" name="phone_number" value={this.state.phone_number} onChange={this.changeHandler} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Institution ID</label>
                                            <input type="file" placeholder="institution ID" className="form-control" name="institution_ID" onChange={this.fileHandler} required />

                                        </div>
                                        <div className="col-md-6">
                                            <label>Instution Name</label>
                                            <input type="text" className="form-control" name="institution_name" value={this.state.instution_name} onChange={this.changeHandler} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Your Photo </label>

                                            <input type="file" className="form-control" placeholder="Profile Picture" name="Profile_Picture" onChange={this.fileHandler} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label >Email</label>
                                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.changeHandler} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Password:</label>
                                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changeHandler} required />
                                        </div>
                                    </div></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p style={{ marginTop: "16px" }} className="signUp text-left">Do have an Account?  <Link style={{ color: "#a018a0" }} exact to="/"><b>Sign in</b></Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 mt-1">
                                            <button style={{ backgroundColor: "#51227F", fontFamily: "roboto", color: "white", fontWeight: "bold", marginTop: "5px", border: 'none', fontFamily: "roboto", fontSize: "18px" }} type="submit" onClick={this.submitUser} className="btn btn-primary"> Sign up <FaRegHandPointRight /> </button>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Register
