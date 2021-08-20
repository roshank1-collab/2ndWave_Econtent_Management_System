import axios from 'axios';
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'
import { FaUserGraduate, FaNewspaper, FaBell, FaServicestack, FaComments, FaTelegram, FaSignInAlt, FaUsers, FaSignOutAlt, FaUpload, FaLock } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import '../App.css'

const id = localStorage.getItem('userid')

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const out = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('loginstatus')
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    localStorage.removeItem('userid')
    localStorage.removeItem('success')
    localStorage.removeItem('statusOfSubscription')
    localStorage.removeItem('itemselected')
    localStorage.removeItem('ratedtopersonid')
    setShow(false)
  };

  return (
    <>
      {/* <Button style={{ marginRight: "20px" }} className="btn btn-danger" onClick={handleShow} >Sign Out</Button> */}


      <Button type="submit" style={{ backgroundColor: '#51227f', border: 'none', height: '39px', marginTop: '3px', marginRight: '10px' }} onClick={handleShow} className="btn-sm">Signout    <FaSignOutAlt /> </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: '#BF3A89', color: 'white' }} >
          <Modal.Title>Sign Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to sign out?.</Modal.Body>
        <Modal.Footer >
          <Button style={{ backgroundColor: '#BF3A89', border: 'none' }} variant="danger" onClick={handleClose}>
            No
          </Button>
          <Button style={{ backgroundColor: '#51227f', border: 'none' }} variant="success" href="/login" onClick={out}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
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
    //set up the connection with server through sockets
    const socket = socketIOClient("http://127.0.0.1:90", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },

    })

    // client-side
    socket.on("FromAPI", data => {
      setResponse(data);
      console.log(data)
    });
    const id = localStorage.getItem('userid')
    const response = { hello: 'world', name: 'shankar', id: id };
    // Emitting a new message. Will be consumed by the client
    socket.emit("hello", response);


  }, []);


  const filterCatagories = (item) => {
    window.location.href = "/catagories/" + item;
  }

  if (localStorage.getItem('token') && localStorage.getItem('loginstatus') === 'true') {
    var menu =
      <>
        <Navbar.Brand href="/dashboard">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", fontWeight: "roboto", marginLeft: '5px' }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/allchannel">Channels</Nav.Link>
            <NavDropdown title="Company" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item href="/aboutus"><FaUserGraduate /> About Us</NavDropdown.Item>
              <NavDropdown.Item href="/ourteam"><FaUsers />Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/career"><FaTelegram />Carrer With Us</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Categories" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/allitem"><FaTelegram />All items</NavDropdown.Item>
              {
                Catagories.map((item) => (
                  <NavDropdown.Item onClick={filterCatagories.bind(this, item)}><FaServicestack />{item}</NavDropdown.Item>

                ))
              }

            </NavDropdown>
            <Nav.Link href="/communication">Communication <FaComments /></Nav.Link>

            <Nav.Link href={"/uploadcontent/" + id} > Upload Content <FaUpload /></Nav.Link>
            <Nav.Link href="/announcement" >Announcement <FaBell /></Nav.Link>
   
   

            <NavDropdown title="Profile" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item href={"/userprofile/" + id}><FaUserGraduate /> My Profile</NavDropdown.Item>
              <NavDropdown.Item href={"/changepassword/" + id}><FaUsers />Change Password</NavDropdown.Item>
              <NavDropdown.Item href="/esignupchoice"><FaTelegram />Create your wallet</NavDropdown.Item>
            </NavDropdown>


          </Nav>
          <Nav className="justify-content-end">
            <Example />
          </Nav>
        </Navbar.Collapse>


      </>
  }
  else {
    var menu =

      <>
        <Navbar.Brand href="/">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
        </Navbar.Brand>
        <Nav className="mr-auto">

          <NavDropdown style={{}} title="Company" id="basic-nav-dropdown">
            <NavDropdown.Item href="/aboutus"><FaUserGraduate /> About Us</NavDropdown.Item>

            <NavDropdown.Item href="/ourteam"><FaUsers />Our Team</NavDropdown.Item>
            <NavDropdown.Item href="/career"><FaTelegram />Carrer With Us</NavDropdown.Item>

          </NavDropdown>
          <NavDropdown style={{}} title="Services" id="basic-nav-dropdown" >
            <NavDropdown.Item href="/services"><FaServicestack />Services & Offers</NavDropdown.Item>
            <NavDropdown.Item href="/terms"><FaNewspaper /> Terms & Conditions</NavDropdown.Item>

          </NavDropdown>


          <Nav.Link href="/contactus" style={{}}> Contact</Nav.Link>

        </Nav>
        <Navbar.Collapse className="justify-content-end">


          <Button style={{ backgroundColor: "#51227F", border: 'none', height: '39px', marginTop: '3px', marginRight: '10px' }} href="/login"  >Sign in<FaSignInAlt /></Button>

        </Navbar.Collapse>
      </>


  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" className="shadow sticky-top" >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {menu}
      </Navbar>

    </div>
  )
}
export default Header;
