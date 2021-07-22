import { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaCartPlus, FaUsers, FaRibbon, FaInfo, FaShareSquare, FaPlusCircle, FaRegEye, FaListUl, FaMedapps, FaTelegramPlane, FaUserCog, FaCaretRight, FaRegSmile, FaArrowAltCircleRight, FaRegHandPointRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Register extends Component {
    state = {
        institution_ID: "",
        Profile_Picture: "",
        firstname: "",
        lastname: "",
        gender: "",
        Dob: "",
        address: "",
        institution_name: "",
        phone_number: "",
        email: "",
        password: "",
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
                        <Redirect to ="/login"/>
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
            <section className="Form my-4 mx-5 pt-5 pb-5">
                <div className="container">
                    <div className="row no-gutters shadow" style={{ background: 'white', borderRadius: '3px' }}>
                        <div className="col-lg-5">

                            <img src="./images/pp.jpg" alt="register" className="img-fluid" style={{ marginTop: '100px' }} />


                        </div>
                        <div className="col-lg-7">
                            <p>Please fill all your correct details to signup, so that you can access the content by logging in.</p>
                            <form className="py-4">
                            
                                <div className="form-row">
                                   
                                        <label>Firstname</label>
                                         <input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={this.changeHandler} required />
                                         <label>Lastname</label>
                                        <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.changeHandler} required />
                                        
                                </div>
                               

                                <div className="form-row">
                                   
                                        <label >Gender</label>
                                        <input type="text" className="form-control" name="gender" value={this.state.gender} onChange={this.changeHandler} required />
                                    
                                        <label >Date of Birth</label>
                                        <input type="date" className="form-control" name="Dob" value={this.state.Dob} onChange={this.changeHandler} required />
                                   
                               
                                </div>

                                <div className="form-row">
                                  
                                        <label>Address</label>
                                        <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.changeHandler} required />
                                    
                                        <label>Phone</label>
                                        <input type="text" className="form-control" name="phone_number" value={this.state.phone_number} onChange={this.changeHandler} required />
                                 
                                </div>

                                <div className="form-row">
                                
                                        <label>Institution ID</label>
                                        <input type="file" placeholder="institution ID" name="institution_ID" onChange={this.fileHandler} required />
                                        <br/>
                                   
                                        <label>Instution Name</label>
                                        <input type="text" className="form-control" name="institution_name" value={this.state.instution_name} onChange={this.changeHandler} required />
                                    
                                </div>

                                <div className="form-row">
                                   
                                        <label>Your Photo </label>
                                        <input type="file" placeholder="Profile Picture" name="Profile_Picture" onChange={this.fileHandler} required />
                                  <br/>
                                        <label >Email</label>
                                        <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.changeHandler} required />
                                   
                                </div>
                                
                                <div className="form-row">
                                  
                                        <label>Password:</label>
                                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changeHandler} required />
                                 
                                </div>
                                <p style={{ marginTop: "16px" }} className="signUp text-left">Do have an Account?  <Link style={{ color: "#a018a0" }} exact to="/"><b>Sign in</b></Link></p>
                                <div className="col-lg-7 py-4">
                                    <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bold", marginTop: "5px" }} type="submit" onClick={this.submitUser} className="btn btn-primary"> Sign up <FaRegHandPointRight /> </button>
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