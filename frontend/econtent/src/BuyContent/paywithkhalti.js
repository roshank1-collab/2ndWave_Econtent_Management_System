import axios from "axios";
import { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
toast.configure()



class paywithkhalti extends Component {


    state = {
        id: this.props.match.params.id,
        contentdata: [],
        recerivedata: [],
        loggedinuserdata : [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        receiverUserID: "",
        ItemSelected: localStorage.getItem('itemselected'),
        loggedinuser : localStorage.getItem('userid')
    }

    componentDidMount() {
        axios.get('http://localhost:90/content/singleInfodata/' + this.state.ItemSelected)
            .then((responsee) => {
                console.log(responsee)
                // toast.success(responsee.data.message)
                this.setState({
                    contentdata: responsee.data.data,
                    receiverUserID: responsee.data.data.userid
                })
                // toast.success(this.state.receiverUserID)

            })
            .catch((err) => {
                toast.error(err.message)
            })

        axios.get('http://localhost:90/user/singleuser/' + this.state.id, this.state.config)
            .then((response) => {
                console.log(response)
                // toast.success(response.data.message)
                this.setState({
                    recerivedata: response.data.userdata[0]
                })
            })
            .catch((err) => {
                toast.error(err.message)
            })

             axios.get('http://localhost:90/user/singleuser/' + this.state.loggedinuser, this.state.config)
            .then((response) => {
                console.log(response)
                // toast.success(response.data.message)
                this.setState({
                    loggedinuserdata: response.data.userdata[0]
                })
            })
            .catch((err) => {
                toast.error(err.message)
            })


    }

    render() {
        return (
            <div className="container" style={{ background: "#56328C", marginTop: "40px", color: "#ffffff", fontSize: "18px", marginBottom: "40px", paddingTop: "10px" }}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Receiver Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly value={this.state.recerivedata.Email} style={{ color: "white" }} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Receiver Khalti-ID
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly value={this.state.recerivedata.Phone_number} style={{ color: "white" }} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Payer Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly value = {this.state.loggedinuserdata.Email} style={{ color: "white" }} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Payer Khalti-ID
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Your khalti number" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <hr />

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Total Amount
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly value={this.state.contentdata.price} />
                        </Col>
                    </Form.Group>
                </Form>
                <hr />
                <hr />
                <center><Button style={{ color: "white", fontSize: "20px", marginBottom: "30px" }} variant='outline-primary'>BUY</Button></center>
            </div>
        )
    }
}

export default paywithkhalti;