import axios from 'axios';
import { Nav, NavDropdown, Navbar, Button, NavItem } from 'react-bootstrap';
import { Modal, Container, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { FaUserGraduate, FaNewspaper,FaBell, FaServicestack, FaTelegram, FaSignInAlt, FaUsers, FaSignOutAlt, FaUserCircle, FaUpload, FaTty } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import BellIcon from 'react-bell-icon';
import socketIOClient from "socket.io-client";


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
    setShow(false)
  };

  return (
    <>
      {/* <Button style={{ marginRight: "20px" }} className="btn btn-danger" onClick={handleShow} >Sign Out</Button> */}
      <Button type="submit" style={{height:'39px', marginTop:'3px', marginRight:'10px'}} onClick={handleShow} className="btn-sm">Signout    <FaSignOutAlt /> </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: '#BF3A89', color: 'white' }} closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Come back again. Waiting for you.</Modal.Body>
        <Modal.Footer >
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
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", fontWeight: "roboto" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
        </Navbar.Brand>


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

            <Nav.Link href="/communication">Communication</Nav.Link>
            <Nav.Link href={"/uploadcontent/" + id} > Upload Content <FaUpload /></Nav.Link>
              <Nav.Link href="/announcement" >Announcement <FaBell/></Nav.Link>
              <Nav.Link href={"/userprofile/" + id}><FaUsers /> Profile  </Nav.Link>
           
      
          
          

          </Nav>




          <Nav className="justify-content-end">
   
    
            <Example />
          


          </Nav>


        </Navbar.Collapse>


      </>
  }
  else {
    var menu =

      <Navbar.Collapse id="responsive-navbar-nav" >
        <Navbar.Brand href="/">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginTop: "2px", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
        </Navbar.Brand>
        <Nav className="mr-auto">

          <NavDropdown style={{ fontSize: "18px" }} title="Company" id="basic-nav-dropdown">
            <NavDropdown.Item href="/aboutus"><FaUserGraduate /> About Us</NavDropdown.Item>

            <NavDropdown.Item href="/ourteam"><FaUsers />Our Team</NavDropdown.Item>
            <NavDropdown.Item href="/career"><FaTelegram />Carrer With Us</NavDropdown.Item>

          </NavDropdown>
          <NavDropdown style={{ fontSize: "18px" }} title="Services" id="basic-nav-dropdown" >
            <NavDropdown.Item href="/services"><FaServicestack />Services & Offers</NavDropdown.Item>
            <NavDropdown.Item href="/terms"><FaNewspaper /> Terms & Conditions</NavDropdown.Item>

          </NavDropdown>


          <Nav.Link href="/contactus" style={{ fontSize: "18px" }}> Contact</Nav.Link>

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
