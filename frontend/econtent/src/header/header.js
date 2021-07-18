import { Component } from "react"
import { Nav, NavDropdown, Navbar, Form, Button, Container } from 'react-bootstrap';
import { Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, FormControl } from 'react-bootstrap'
import { FaTwitter, FaUserGraduate, FaLinkedin, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile } from 'react-icons/fa'

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const id = localStorage.getItem('id')

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
      <Button style={{ marginRight: "20px" }} className="btn btn-danger" onClick={handleShow} >Sign Out</Button>

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

class Header extends Component {


  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('loginstatus')
    window.location.href = '/'
  }
  render() {
    {
      if (localStorage.getItem('token') && localStorage.getItem('loginstatus') === 'true') {
        var menu =

        <nav>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link onClick={this.logout}>Home</Nav.Link>
      <Nav.Link href="/uploadcontent">Link</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    
  
       <Navbar.Collapse className="justify-content-end">
      <Button variant="outline-success">Search</Button>
      </Navbar.Collapse>
   
  </Navbar.Collapse>
</Navbar>
{/* ----------- */}
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <Button variant="outline-success">Search</Button>
      </Navbar.Collapse>
  </Navbar.Collapse>
</Navbar>
</nav>
      }
      else {
        menu =
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">
              <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginTop: "2px" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <NavDropdown style={{ color: "black", fontWeight: "bold" }} title="Company" id="basic-nav-dropdown">
                <NavDropdown.Item href="/aboutfounder"><FaUserGraduate /> About Us</NavDropdown.Item>
                <NavDropdown.Item href="/aboutfounder"><FaRegSmile /> Why Choose Us?</NavDropdown.Item>
                <NavDropdown.Item href="/Aboutgadgetshop"><FaUsers />Our Team</NavDropdown.Item>
                <NavDropdown.Item href="/Aboutgadgetshop"><FaTelegram />Carrer With Us</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown style={{ color: "black", fontWeight: "bold" }} title="Services" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/howitwork"><FaServicestack />Services & Pricing</NavDropdown.Item>
                <NavDropdown.Item href="/howitwork"><FaAngellist />Offers</NavDropdown.Item>
                <NavDropdown.Item href="/termsandconditions"><FaCcVisa /> Pricing Plans</NavDropdown.Item>
                <NavDropdown.Item href="/termsandconditions"><FaNewspaper /> Terms & Conditions</NavDropdown.Item>

              </NavDropdown>


            </Nav>
            <Navbar.Collapse className="justify-content-end">

              <Button style={{ backgroundColor: "#51227F", border: 'none', marginRight: '20px' }} href="/login" className="btn btn-primary" >Sign in<FaSignInAlt /></Button>


            </Navbar.Collapse>
          </Navbar.Collapse>


      }


    }
    return (
      <div>
    
        {menu}
  
      </div>

    )
  }
}
export default Header;
