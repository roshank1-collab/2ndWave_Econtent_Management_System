
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { Modal, Container } from 'react-bootstrap'
import { FaUserGraduate,FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaUsers, FaSignOutAlt, FaUserCircle, FaUpload, FaTty } from 'react-icons/fa'
import React, { useEffect, useState } from "react";

import axios from 'axios';


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

const Header = () => {
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

  }, []);


  const filterCatagories = (item) => {
    window.location.href = "/catagories/" + item;

  }

  if (localStorage.getItem('token') && localStorage.getItem('loginstatus') === 'true') {
    var menu =
<Container>
<Navbar.Brand href="/dashboard">
            <h3 style={{ color: "#a018a0", fontWeight: "bolder"}}>E-<span style={{ color: "#51227F" }}>content</span></h3>
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
              <Nav.Link href="/uploadcontent">UploadContent <FaUpload /></Nav.Link>
              <Nav.Link href={"/userprofile/" + id}>My Profile <FaUserCircle/></Nav.Link>


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
      <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginTop: "2px", marginLeft: '10px' }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
    </Navbar.Brand>
    <Nav className="mr-auto">

      <NavDropdown style={{ color: "black", fontWeight: "bold" }} title="Company" id="basic-nav-dropdown">
        <NavDropdown.Item href="/aboutus"><FaUserGraduate /> About Us</NavDropdown.Item>

        <NavDropdown.Item href="/ourteam"><FaUsers />Our Team</NavDropdown.Item>
        <NavDropdown.Item href="/career"><FaTelegram />Carrer With Us</NavDropdown.Item>

      </NavDropdown>
      <NavDropdown style={{ color: "black", fontWeight: "bold" }} title="Services" id="basic-nav-dropdown" >
        <NavDropdown.Item href="/services"><FaServicestack />Services & Offers</NavDropdown.Item>
        <NavDropdown.Item href="/termsandconditions"><FaNewspaper /> Terms & Conditions</NavDropdown.Item>

      </NavDropdown>


      <Nav.Link style={{ fontWeight: 'bolder' }} href="/contactus"><FaTty /> Contact</Nav.Link>

    </Nav>
    <Navbar.Collapse className="justify-content-end">

      <Button style={{ backgroundColor: "#51227F", border: 'none', marginRight: '10px' }} href="/login"  >Sign in<FaSignInAlt /></Button>

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
