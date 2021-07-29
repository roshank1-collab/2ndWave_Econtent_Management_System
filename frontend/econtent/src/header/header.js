import axios from 'axios';
import { Nav, NavDropdown, Navbar, Button, NavItem } from 'react-bootstrap';
import { Modal, Container } from 'react-bootstrap'
import { FaUserGraduate, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaUsers, FaSignOutAlt, FaUserCircle, FaUpload, FaTty } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import BellIcon from 'react-bell-icon';
import socketIOClient from "socket.io-client";
const ENDPOINT = socketIOClient("http://127.0.0.1:90", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
 
=======

>>>>>>> b4b9d291baccd00a773456aec187f0a456ec73c1

})

const id = localStorage.getItem('userid')

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const out = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('loginstatus')
    setShow(false)
  };

  return (
    <>
      {/* <Button style={{ marginRight: "20px" }} className="btn btn-danger" onClick={handleShow} >Sign Out</Button> */}
      <Button style={{ backgroundColor: "#51227F", border: "none", color: "white", fontWeight: "bold", marginTop: "5px" }} type="submit" onClick={handleShow} className="btn btn-primary"> Sign Out <FaSignOutAlt /> </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Come back again. Waiting for you.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" href="/login" onClick={out}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function DropdownItem() {
  return (
    <>
      <div className="col-md-4 col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Notifications</h3>
          </div>
          <div className="panel-body">
            <div className="alert alert-success">
              <strong className="default"><i className="fa fa-road"></i> Well done,</strong> You have finished job!
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            </div>
            <div className="alert alert-info">
              <strong className="default"><i className="fa fa-user"></i> John</strong> sent you friend request.
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            </div>
            <div className="alert alert-warning">
              <strong className="default"><i class="fa fa-envelope-o"></i> Sam</strong> sent important mail.
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

const Header = () => {
  const [response, setResponse] = useState("");
  const [Catagories, setCatagories] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('loginstatus') === 'true') {
      axios.get('http://localhost:90/content/catagories', {
      })
        .then(
          (response) => {
            setCatagories(response.data.catagories)
          }

        ).catch(
          (err) => {
            console.log(err.response)
          }
        )
    }

    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    })
    {
      response.map((data)=>( 
        console.log(data)
      ))
    }
  }, []);

  const filterCatagories = (item) => {
    window.location.href = "/catagories/" + item;
  }

  if (localStorage.getItem('token') && localStorage.getItem('loginstatus') === 'true') {
    var menu =
      <Container>
        <Navbar.Brand href="/dashboard">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", fontWeight: "roboto" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/allchannel">Channels</Nav.Link>
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutus"><FaUserGraduate /> About Us</NavDropdown.Item>
              <NavDropdown.Item href="/ourteam"><FaUsers />Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/career"><FaTelegram />Carrer With Us</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Categories" id="basic-nav-dropdown" >
              {
                Catagories.map((item) => (
                  <NavDropdown.Item onClick={filterCatagories.bind(this, item)}><FaServicestack />{item}</NavDropdown.Item>

                ))
              }
            </NavDropdown>

            <Nav.Link href="#">Live Audio/Video</Nav.Link>
            <Nav.Link href={"/uploadcontent/" + id}>UploadContent <FaUpload /></Nav.Link>
            <Nav.Link href={"/userprofile/" + id}>My Profile <FaUserCircle /></Nav.Link>


          </Nav>


          <NavDropdown >
            {DropdownItem()}
          </NavDropdown>

          <Nav className="justify-content-end">

            <Example />

          </Nav>


        </Navbar.Collapse>


      </Container>
  }
  else {
    var menu =

      <Navbar.Collapse id="responsive-navbar-nav" >
        <Navbar.Brand href="/">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginTop: "2px", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
        </Navbar.Brand>
        <Nav className="mr-auto">

          <NavDropdown style={{ color: "black", fontWeight: "bold", fontFamily: "roboto", fontSize: "18px" }} title="Company" id="basic-nav-dropdown">
            <NavDropdown.Item href="/aboutus"><FaUserGraduate /> About Us</NavDropdown.Item>

            <NavDropdown.Item href="/ourteam"><FaUsers />Our Team</NavDropdown.Item>
            <NavDropdown.Item href="/career"><FaTelegram />Carrer With Us</NavDropdown.Item>

          </NavDropdown>
          <NavDropdown style={{ color: "black", fontWeight: "bold", fontFamily: "roboto", fontSize: "18px" }} title="Services" id="basic-nav-dropdown" >
            <NavDropdown.Item href="/services"><FaServicestack />Services & Offers</NavDropdown.Item>
            <NavDropdown.Item href="/terms"><FaNewspaper /> Terms & Conditions</NavDropdown.Item>

          </NavDropdown>


          <Nav.Link style={{ color: "black", fontWeight: "bold", fontFamily: "roboto", fontSize: "18px" }} href="/contactus"> Contact <FaTty /></Nav.Link>

        </Nav>
        <Navbar.Collapse className="justify-content-end">

          <Button style={{ backgroundColor: "#51227F", border: 'none', marginRight: '10px', fontFamily: "roboto", fontSize: "18px", fontWeight: "bold" }} href="/login"  >Sign in<FaSignInAlt /></Button>

        </Navbar.Collapse>
      </Navbar.Collapse>


  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" className="shadow">

        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>

        {menu}
      </Navbar>

    </div>
  )
}
export default Header;
