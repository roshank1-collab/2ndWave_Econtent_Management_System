import { Component } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

export default class EWallet extends Component {
    render() {
        return (
            <div className="container0fluid shadow" style={{
                margin: "50px", shadow: "10px"
            }}>
                <Form className="m-4">
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>MPin</Form.Label>
                        <Form.Control type="password" placeholder="MPin" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>                    */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p className="signUp text-left" style={{ fontFamily: "roboto", fontSize: "17px" }}>Don't have a wallet?  <Link exact to="/eregister"><b style={{ color: "#a018a0" }}>Create here</b></Link></p>
                </Form>
            </div >
        )
    }
}