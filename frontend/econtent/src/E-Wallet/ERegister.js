import { Component } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class ERegister extends Component {

    state = {
        FullName: "",
        Address: "",
        PhoneNumber: "",
        Sex: "",
        Email: "",
        Balance: "",
        Password: "",
        MPin: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault(); // prevents from reloading page

        const data = new FormData()
        data.append("FullName", this.state.FullName)
        data.append("Address", this.state.Address)
        data.append("PhoneNumber", this.state.PhoneNumber)
        data.append("Sex", this.state.Sex)
        data.append("Email", this.state.Email.trim())
        data.append("Balance", this.state.Balance)
        data.append("Password", this.state.Password)
        data.append("MPin", this.state.MPin)

        axios.post("http://localhost:90/Ewallet/user-register", {}, this.state.config, this.state)
            .then(response => {
                console.log(response)                
            })
            .catch(err => {
                toast.error(err.response)
            })
    }

    render() {
        return (
            <div className="container" style={{
                margin: "50px", shadow: "10px"
            }
            }>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="Email" value={this.state.Email} onChange={this.changeHandler} requried />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" name="FullName" value={this.state.FullName} onChange={this.changeHandler} requried />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" name="Address" value={this.state.Address} onChange={this.changeHandler} requried />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" name="PhoneNumber" value={this.state.PhoneNumber} onChange={this.changeHandler} requried />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Sex</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Gender" name="Sex" value={this.state.Sex} onChange={this.changeHandler} requried />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>Balance</Form.Label>
                        <Form.Control type="number" placeholder="Load Balance of.." name="Balance" value={this.state.Balance} onChange={this.changeHandler} requried />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-control">
                        <Form.Label>PIN</Form.Label>
                        <Form.Control type="number" placeholder="PIN" name="MPin" value={this.state.MPin} onChange={this.changeHandler} requried />
                        <Form.Text className="text-muted">
                            must be of length 4
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.changeHandler} requried />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>                    */}
                    <Button variant="primary" onClick={this.onSubmit}>
                        Submit
                    </Button>
                    <p className="signUp text-left" style={{ fontFamily: "roboto", fontSize: "17px" }}>Have E-wallet here?  <Link exact to="/ewallet"><b style={{ color: "#a018a0" }}>Sign In</b></Link></p>
                </Form>
            </div >
        )
    }
}