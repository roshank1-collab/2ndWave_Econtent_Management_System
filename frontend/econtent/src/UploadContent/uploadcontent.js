import { Component } from "react"
import '../App.css'
import { Link } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
class UploadContent extends Component {
    render() {
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
        upload = () => {
            e.preventDefault();
            axios.post("http://localhost:90/content/insert", this.state.config)
                .then((response) => {
                    console.log(response)

                })
                .catch((error) => {
                    console.log(error.response)
                })


        }

        return (
            <div>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.upload()}>
                        Submit
                    </Button>
                </Form>


            </div>

        )
    }
}

export default UploadContent;