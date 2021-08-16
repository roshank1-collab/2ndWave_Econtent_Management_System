import { Component } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

export default class EWallet extends Component {
    render() {
        return (
            <div className="container" style={{
                margin: "50px", shadow: "10px"
            }
            }>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>                    */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p className="signUp text-left" style={{ fontFamily: "roboto", fontSize: "17px" }}>Create your wallet here?  <Link exact to="/eregister"><b style={{ color: "#a018a0" }}>Sign Up</b></Link></p>
                </Form>
            </div >
        )
    }
}