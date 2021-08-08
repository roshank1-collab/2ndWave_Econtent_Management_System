import axios from 'axios';
import { Nav, NavDropdown, Navbar, Button, NavItem } from 'react-bootstrap';
import { Modal, Container } from 'react-bootstrap'
import { FaUserGraduate, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaUsers, FaSignOutAlt, FaUserCircle, FaUpload, FaTty, FaBell } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import NotificationCenter from 'react-notification-center-component';


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
    
            
      {/* <Container style={{ width: '500px', position: 'absolute' }}>
     */}
       
            {/* <div className="alert alert-success">
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
            </div> */}
          
          
        
                {/* <li className="head text-light bg-dark">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12 col-12">
                      <span>Notifications</span>
                      <a href="" className="float-right text-light">Mark all as read</a>
                    </div>
                  </div>
                </li>
                <li className="notification-box">
                  <div className="row">
                    <div className="col-lg-3 col-sm-3 col-3 text-center">
                      <img src="/demo/man-profile.jpg" className="w-50 rounded-circle" />
                    </div>
                    <div className="col-lg-8 col-sm-8 col-8">
                      <strong className="text-info">David John</strong>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                      <small className="text-warning">27.11.2015, 15:00</small>
                    </div>
                  </div>
                </li>
                <li className="notification-box bg-gray">
                  <div className="row">
                    <div className="col-lg-3 col-sm-3 col-3 text-center">
                      <img src="/demo/man-profile.jpg" className="w-50 rounded-circle" />
                    </div>
                    <div className="col-lg-8 col-sm-8 col-8">
                      <strong className="text-info">David John</strong>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                      <small className="text-warning">27.11.2015, 15:00</small>
                    </div>
                  </div>
                </li>
                <li className="notification-box">
                  <div className="row">
                    <div className="col-lg-3 col-sm-3 col-3 text-center">
                      <img src="/demo/man-profile.jpg" className="w-50 rounded-circle" />
                    </div>
                    <div className="col-lg-8 col-sm-8 col-8">
                      <strong className="text-info">David John</strong>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                      <small className="text-warning">27.11.2015, 15:00</small>
                    </div>
                  </div>
                </li>
                <li className="footer bg-dark text-center">
                  <a href="" className="text-light">View All</a>
                </li>
              
          
      </Container>
       */}

  <div >
      <NotificationCenter className="myCustomClass" appId="u5O4GI0C8X" subscriberId="foo2"/>
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

            <NavDropdown title="Notifications">
            <NavDropdown.Item ></NavDropdown.Item><DropdownItem/>
            </NavDropdown>
            
            
          </Nav>

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
