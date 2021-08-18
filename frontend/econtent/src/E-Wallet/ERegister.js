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
       
        Balance: "",
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
            <div className="container-fluid shadow" style={{
                margin: "50px", shadow: "10px"
            }
            }>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Balance</Form.Label>
                        <Form.Control type="number" placeholder="Load Balance of.." name="Balance" value={this.state.Balance} onChange={this.changeHandler} requried />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>PIN</Form.Label>
                        <Form.Control type="number" placeholder="PIN" name="MPin" value={this.state.MPin} onChange={this.changeHandler} requried />
                        <Form.Text className="text-muted">
                            must be of length 4
                        </Form.Text>
                    </Form.Group>


                    
                    <Button variant="primary" onClick={this.onSubmit}>
                        Submit
                    </Button>
                    <p className="signUp text-left" style={{ fontFamily: "roboto", fontSize: "17px" }}>Have E-wallet here?  <Link exact to="/ewallet"><b style={{ color: "#a018a0" }}>Get In</b></Link></p>
                </Form>
            </div >
        )
    }
}