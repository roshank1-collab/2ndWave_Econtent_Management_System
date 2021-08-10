import { Component } from "react";
import axios from "axios"
import { Tab, Nav, Col, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify"
import ReactPlayer from 'react-player'
import React, { useState } from "react";
import { Modal } from 'react-bootstrap'

toast.configure()


const userid = localStorage.getItem("userid")
function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sure = () => {
        axios.delete('http://localhost:90/user/delete/' + userid)
            .then((response) => {
                console.log(response)
                if (response.data.message === "Account Deleted") {
                    toast.success('Account Deleted', { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 })
                    window.location.href = "/login"
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error(err, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000 })
            })
    };

    return (
        <>
            <button className="btn btn-danger" style={{ marginTop: "10px", marginBottom: "10px" }} onClick={handleShow} >Delete Account</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you?</Modal.Title>
                </Modal.Header>
                <Modal.Body><b> Think about it, again!!</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={sure}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

class ProfileContentShow extends Component {

    state = {        
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        allItem: []
    }

    //load with content
    componentDidMount() {
        axios.get('http://localhost:90/user/singleuser/' + this.state.userid, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    First_name: response.data.userdata[0].First_name,
                    Last_name: response.data.userdata[0].Last_name,
                    Dob: response.data.userdata[0].Dob,
                    gender: response.data.userdata[0].gender,
                    address: response.data.userdata[0].address,
                    Phone_number: response.data.userdata[0].Phone_number,
                    institution_name: response.data.userdata[0].institution_name,
                    Email: response.data.userdata[0].Email,
                    Password: response.data.userdata[0].Password,
                    Profie_Picture: response.data.userdata[0].Profie_Picture,
                    institution_ID: response.data.userdata[0].institution_ID
                })
            }).catch((err) => {
                console.log(err.response)
            })
        
        axios.get('http://localhost:90/content/single/' + this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    allItem: response.data.data
                })
            })
            .catch((err) => {
                alert(err)
            })
    }

    deleteContent = (contentid) => {
        axios.delete('http://localhost:90/content/delete/' + contentid)
            .then((response) => {
                toast.success(response.data.message)
                window.location.href = "/userprofile/" + this.state.id
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }

    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Your</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Bought</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="container" style={{ background: "white" }}>
                                    <center>
                                        <h1 style={{ color: "#51127F", marginTop: "40px" }}>Your Stuff</h1>
                                    </center>

                                    <div className="row">
                                        {
                                            this.state.allItem.map((items) => {
                                                return (
                                                    <div className="card" style={{ width: '304px', margin: '10px' }}>
                                                        <ReactPlayer width='250xp' height='250px' controls
                                                            url='https://youtu.be/7sDY4m8KNLc'
                                                        />
                                                        {/* <img className="card-img-top" src={"http://localhost:90/" + items.video} alt="Image Loading...." style={{ width: '250xp', height: '250px', background: "red" }} /> */}
                                                        <div className="card-body">
                                                            <i><h3 className="card-title"> {items.heading}</h3></i><br />
                                                            <label>Description</label>
                                                            <p><h5>{items.content_description}</h5></p>
                                                            <hr />
                                                            <label>Genre</label>
                                                            <p><h5>{items.categories}</h5></p>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <Button variant="outline-success" className="btn" >Edit
                                                                    </Button>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <Button variant="outline-danger" className="btn" onClick={this.deleteContent.bind(this, items._id)}>Delete
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {/* <Sonnet /> */}
                                <div>
                                    <h1>tab2</h1>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}

export default ProfileContentShow;