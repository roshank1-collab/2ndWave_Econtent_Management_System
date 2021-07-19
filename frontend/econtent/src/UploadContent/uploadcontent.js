import { Component } from "react"
import '../App.css'
import { Link } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import axios from 'axios'
class UploadContent extends Component {
    state = {
        channels: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    upload = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/content/insert", this.state.config)
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {
                console.log(error.response)
            })


    }
    render() {

        return (

            <section className="Form my-4 mx-5 pt-5 pb-5">
            <div className="container">
                <div className="row no-gutters shadow" style={{ background: 'white', borderRadius: '3px' }}>

                    <div className="col-lg-4">

                       
                    </div>
                    <div className="col-lg-5 no gutters">

                        <h1 className="font-weight-bold " style={{ color: "#a018a0" }}>Upload content</h1>
                        


                        <form style={{ marginLeft: "5px" }}>
                            <div className="form-row">
                                <div className="col-lg-5">
                                    <label htmlFor="uname">Email:</label>
                                    <input type="text" className="form-control" value={this.state.email} onChange={this.changeHandler} name="email" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-lg-5">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" value={this.state.password} onChange={this.changeHandler} name="password" required />
                                </div>
                            </div>

                        </form>


                        <p className="signUp text-left">Do have an Account?  <Link exact to="/register"><b style={{ color: "#a018a0" }}>Sign Up</b></Link></p>
                        <div className="form-row">
                            <div className="col-lg-5">
                                <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bold", marginTop: "10px", border:'none' }} type="submit" onClick={this.loginUser} class="btn btn-primary"> Sign in </button>
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

export default UploadContent;