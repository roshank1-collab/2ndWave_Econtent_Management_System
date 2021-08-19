import { Component } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import xtype from 'xtypejs'
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
        e.preventDefault();

        if (this.state.Balance == "") {
            toast.error("missing fields")
        }
        else if (this.state.MPin == "") {
            toast.error("missing fields")
        }
        else {
            var body =
            {
                Balance: this.state.Balance,
                MPin: this.state.MPin
            }

            axios({
                method: "post",
                url: "http://localhost:90/Ewallet/user-register",
                headers:
                    { 'authorization': `Bearer ${localStorage.getItem('token')}` },
                data: body

            })
                .then(response => {
                    console.log(response)
                    toast.info(response.data.status)
                    toast.info(response.data.message)
                })
                .catch(err => {
                    toast.error(err.response)
                })
        }

    }

    render() {
        return (
            <div className="container" style={{
                margin: "50px", shadow: "10px"
            }
            }>
                <h2>You only need to provide Balance and PIN</h2>
                <Form>
                    <Form.Group className="mb-3 mt-3">
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



                    <Button className="mb-2" variant="primary" onClick={this.onSubmit}>
                        Register
                    </Button>
                    <p className="signUp text-left" style={{ fontFamily: "roboto", fontSize: "17px" }}>Have a wallet?  <Link exact to="/ewallet"><b style={{ color: "#a018a0" }}>Get In</b></Link></p>
                </Form>
            </div >
        )
    }
}