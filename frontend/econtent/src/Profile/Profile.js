import axios from "axios";
import React, { Component, useState } from "react";
import { Button, Col, Modal, Nav, Row, Tab, Table, Form } from 'react-bootstrap';
// import './Profile.css'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
toast.configure()

const userid = localStorage.getItem("userid")

function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sure = () => {
        axios.delete('http://localhost:90/user/delete/' + userid)
            .then((response) => {
                // console.log(response)
                if (response.data.message === "Account Deleted") {
                    toast.success('Account Deleted', { position: toast.POSITION.TOP_RIGHT, autoClose: 2100 })
                    window.location.href = "/login"
                }
            })
            .catch((err) => {
                // console.log(err)
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

class Profile extends Component {

    state = {
        First_name: "",
        Last_name: "",
        Dob: "",
        gender: "",
        address: "",
        Phone_number: "",
        institution_name: "",
        Email: "",
        Profie_Picture: "",
        institution_ID: "",
        Password: "",
        id: this.props.match.params.id,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        allItem: [],
        purcahsehistory: [],
        solddetails : [],
        balance: "",
        mpin: "",
        amount: "",
        redirect: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loadbalance = (e) => {
        var body = {
            balance: this.state.amount,
            Mpin: this.state.mpin
        }
        axios({
            method: "put",
            url: "http://localhost:90/loadBalance",
            headers:
                { 'authorization': `Bearer ${localStorage.getItem('token')}` },
            data: body
        })
            .then(response => {
                toast.success(response.data.message)
                if (response.data.message == "Balance Loaded Successfully") {
                    this.setState({
                        amount: "",
                        mpin: ""
                    })                    
                }
            })
            .catch(err => {
                toast.error(err.response)
            })
    }

    //load with content
    componentDidMount() {
        axios.get('http://localhost:90/user/singleuser/' + this.state.id, this.state.config)
            .then((response) => {
                //console.log(response)
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
                console.log(response.data.status)
                if (response.data.status === false) {
                    console.log('no iteam')
                }
                else {
                    this.setState({
                        allItem: response.data.data
                    })
                }
                // console.log(response)                
                // this.setState({
                //     allItem: response.data.data
                // })
            })
            .catch((err) => {
                alert(err)
            })

        axios({
            method: "get",
            url: "http://localhost:90/detailsofpurchase",
            headers:
                { 'authorization': `Bearer ${localStorage.getItem('token')}` },
        })
            .then(response => {
                this.setState({
                    purcahsehistory: response.data.pdata,
                    balance: response.data.balance,
                    solddetails : response.data.sdata
                })
            })
            .catch(err => {
                toast.error(err.response)
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
            <div className="container" style={{ marginTop: "10px" }}>
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img className="card-img-top" src={"http://localhost:90/" + this.state.Profie_Picture} alt="Image Loading...." style={{ borderRadius: '50%', border: '3px groove darkblue', width: '150px', height: '150px' }} />
                                        <div className="mt-3">
                                            <h4>{this.state.First_name} {this.state.Last_name}</h4>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img className="card-img-top" src={"http://localhost:90/" + this.state.institution_ID} alt="Image Loading...." style={{ borderRadius: '50%', border: '3px groove darkblue', width: '150px', height: '150px' }} />
                                        <div className="mt-3">
                                            <h6>Institution Name</h6>
                                            <h2>{this.state.institution_name}</h2>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex flex-column align-items-center text-center">
                                    <Link to={'/profileupdate/' + this.state.id}>
                                        <button className="btn btn-success">Update</button>
                                    </Link>

                                    {/* <button className="btn btn-danger" style={{ marginTop: "10px", marginBottom: "10px" }} onClick = {this.DeleteAccount}>Delete Account</button> */}
                                    <Example />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.First_name}
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Last_name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">DOB</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Dob}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Phone_number}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.address}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Gender</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.gender}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Institution Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.institution_name}
                                        </div>
                                    </div>
                                    {/* <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Password</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Password}
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Website Markup</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>One Page</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Mobile Template</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Backend API</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Website Markup</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>One Page</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Mobile Template</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Backend API</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container" style={{ background: "white" }}>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Your Wallet</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Your Content</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Bought Content</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth">Purchase History</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fifth">Sold Details</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <div className="container">
                                                    <div className="row">
                                                        <center style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                            <h1>
                                                                Purchase Details
                                                            </h1>
                                                        </center>
                                                        <p>Remaining Balance : {this.state.balance}</p>
                                                    </div>

                                                    <div>
                                                        <Form>
                                                            <Form.Group className="mb-3">
                                                                <Form.Control type="number" placeholder="Enter amount " name="amount" value={this.state.amount} onChange={this.changeHandler} requried />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Email address</Form.Label>
                                                                <Form.Control type="number" placeholder="Enter Mpin" name="mpin" value={this.state.mpin} onChange={this.changeHandler} requried />
                                                            </Form.Group>
                                                        </Form >
                                                        <Button variant="primary" onClick={this.loadbalance}>
                                                            Load
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="container" style={{ background: "#E0EFDE" }}>
                                                    {/* <center>
                                                        <h1 style={{ color: "#51127F", marginTop: "40px" }}>Your Stuff</h1>
                                                    </center> */}

                                                    <div className="row">
                                                        {

                                                            this.state.allItem.map((items) => {
                                                                return (
                                                                    <div className="card" style={{ width: '304px', marginRight: '10px', marginTop: '5px' }}>
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
                                            <Tab.Pane eventKey="third">
                                                <div>
                                                    <h1> Buy Content</h1>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <div className="container">
                                                    <div className="row">
                                                        <center style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                            <h1>
                                                                Purchase Details
                                                            </h1>
                                                        </center>
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    {/* <th>Owner Name</th> */}
                                                                    <th>Owner Email</th>
                                                                    <th>ContentId</th>
                                                                    <th>Price</th>
                                                                    <th>Date</th>
                                                                    <th>GoTo</th>
                                                                </tr>
                                                            </thead>
                                                            {
                                                                this.state.purcahsehistory.map((items) => {
                                                                    return (
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>{items.ProductOwnerEmail}</td>
                                                                                <td>{items.ContentID}</td>
                                                                                <td>{items.ContentPrice}</td>
                                                                                <td>{items.BoughtOn_Date}</td>
                                                                                <td>
                                                                                    <button>
                                                                                        <Link to={'/viewuser/' + items.ProductOwnerUserID}>
                                                                                            GoTo
                                                                                        </Link>
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    )
                                                                })
                                                            }
                                                        </Table>

                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="fifth">
                                                <div className="container">
                                                    <div className="row">
                                                        <center style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                            <h1>
                                                                Sold Details
                                                            </h1>
                                                        </center>
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    {/* <th>Owner Name</th> */}
                                                                    <th>Buyer Email</th>
                                                                    <th>ContentId</th>
                                                                    <th>Price</th>
                                                                    <th>Date</th>
                                                                    <th>GoTo</th>
                                                                </tr>
                                                            </thead>
                                                            {
                                                                this.state.solddetails.map((items) => {
                                                                    return (
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>{items.boughtByUserEmail}</td>
                                                                                <td>{items.ContentID}</td>
                                                                                <td>{items.ContentPrice}</td>
                                                                                <td>{items.BoughtOn_Date}</td>
                                                                                <td>
                                                                                    <button>
                                                                                        <Link to={'/viewuser/' + items.boughtByUserID}>
                                                                                            GoTo
                                                                                        </Link>
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    )
                                                                })
                                                            }
                                                        </Table>

                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                        {/* <div >
                            <ProfileContentShow />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;