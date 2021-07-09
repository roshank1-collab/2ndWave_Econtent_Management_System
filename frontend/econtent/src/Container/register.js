import {Component} from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

class Register extends Component {

    state = {

        fullname: "",
        address: "",
        phone: "",
        email: "",
        password: "",
        userType:"Customer"

    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitUser = (e) => {
        e.preventDefault(); // prevents from reloading page
        axios.post("http://localhost:90/user/registration", this.state)
            .then(
                (response) => {
                    console.log(response)
                    alert(response.data.message)
                }
            )
            .catch(
                (err) => {
                    alert(err)
                }
            )

    }


    render() {
        return (
            <section className="Form my-4 mx-5 pt-5 pb-5">
                <div className="container">
                <div className="row no-gutters shadow" style={{background:'white', borderRadius:'3px'}}>
                        <div className="col-lg-5">
                            
                                <img src="./images/pp.jpg" alt="register" className="img-fluid" style={{marginTop:'100px' }} />

                            
                        </div>
                        <div className="col-lg-7">
                         

                            <h1 className="font-weight-bold py-4" style={{color:"#a018a0"}}>Sign Up</h1>
                        <h5 style={{color:"blueviolet"}}>Please fill all your correct details to signup</h5>
                                    <form className="py-4">
                                        <div className="form-row">
                                        <div className="col-lg-5">
                                            <label htmlFor="fullname">Firstname</label>
                                            <input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={this.changeHandler} required />
                                        </div>
                                        <div className="col-lg-5">
                                            <label htmlFor="fullname">Lastname</label>
                                            <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.changeHandler} required />
                                        </div>
                                        </div>

                                        <div className="form-row">
                                        <div className="col-lg-5">
                                            <label htmlFor="fullname">Gender</label>
                                            <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.changeHandler} required />
                                        </div>
                                        <div className="col-lg-5">
                                            <label htmlFor="fullname">Date of Birth</label>
                                            <input type="date" className="form-control" name="lastname" value={this.state.lastname} onChange={this.changeHandler} required />
                                        </div>
                                        </div>

                                        <div className="form-row">
                                        <div className="col-lg-5">
                                            <label htmlFor="fullname">Address</label>
                                            <input type="text" className="form-control" name="lastname" value={this.state.address} onChange={this.changeHandler} required />
                                        </div>
                                        <div className="col-lg-5">
                                            <label htmlFor="fullname">Phone</label>
                                            <input type="text" className="form-control" name="lastname" value={this.state.address} onChange={this.changeHandler} required />
                                        </div>
                                        </div>
                                   

                                        <div className="form-row">
                                        <div className="col-lg-5">
                                            <label htmlFor="phone">Institution ID</label>
                                            <input type="file" placeholder="institution ID" name="institutionid" value={this.state.institutionid} onChange={this.fiilehandler} required />
                                        </div>
                                        <div className="col-lg-5">
                                            <label htmlFor="fullname">Instution Name</label>
                                            <input type="text" className="form-control" name="lastname" value={this.state.address} onChange={this.changeHandler} required />
                                        </div>
                                        </div>



                                        <div className="form-row">
                                        <div className="col-lg-5">
                                            <label htmlFor="phone">Your Photo </label>
                                            <input type="file" placeholder="institution ID" name="institutionid" value={this.state.institutionid} onChange={this.fiilehandler} required />
                                        </div>
                                        <div className="col-lg-5">
                                            <label htmlFor="fullname">Email</label>
                                            <input type="text" className="form-control" name="lastname" value={this.state.address} onChange={this.changeHandler} required />
                                        </div>
                                        </div>
                                
                                        <div className="form-row">
                                        <div className="col-lg-5">
                                            <label htmlFor="password">Password:</label>
                                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changeHandler} required />
                                        </div>
                                        </div>


                                        <p style={{marginTop:"16px"}} className="signUp text-left">Do have an Account?  <Link style={{color:"#a018a0"}} exact to="/"><b>Sign in</b></Link></p>
                                        <div className="col-lg-7 py-4">
                                        <button style={{backgroundColor:"#a018a0",color:"white",fontWeight:"bold", marginTop:"5px"}} type="submit" onClick={this.submitUser} className="btn btn-primary"> Sign up </button>
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


















