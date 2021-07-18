import { Component } from "react"
import { Nav, NavDropdown, Navbar, Form, Button } from 'react-bootstrap';
import { FaUserGraduate, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaUsers, FaRegSmile } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter} from 'react-bootstrap'

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
          <Button variant="primary" href= "/login" onClick={out}>
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
    window.locatin.href = '/'
  }
  render() {
    {
      if (localStorage.getItem('token') && localStorage.getItem('loginstatus') === 'true') {
        var menu =

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* className="justify-content-end" */}
            <Navbar.Brand href="/dashboard">
              <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginTop: "2px" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/dashboard">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/allchannel">Channel</Nav.Link>
              </Nav.Item>
              <NavDropdown style={{ color: "black", fontWeight: "bold" }} title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/aboutfounder">Categories 1</NavDropdown.Item>
                <NavDropdown.Item href="/aboutfounder">Categories 2</NavDropdown.Item>
                <NavDropdown.Item href="/aboutfounder">Categories 3</NavDropdown.Item>
                <NavDropdown.Item href="/aboutfounder">Categories 4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{ color: "black", fontWeight: "bold" }} title="Company" id="basic-nav-dropdown">
                <NavDropdown.Item href="/howitwork"><FaServicestack />Services & Pricing</NavDropdown.Item>
                <NavDropdown.Item href="/howitwork"><FaAngellist />Offers</NavDropdown.Item>
                <NavDropdown.Item href="/termsandconditions"><FaCcVisa /> Pricing Plans</NavDropdown.Item>
                <NavDropdown.Item href="/termsandconditions"><FaNewspaper /> Terms & Conditions</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Button style={{ marginRight: "20px" }} href="/uploadcontent" className="btn btn-primary">Upload</Button>
            </Form>
            <Form inline>
              <Example />
            </Form>
          </Navbar.Collapse>
      }
      else {
        var menu =
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
            <Form>

              <Button style={{ backgroundColor: "#51227F" }} href="/login" className="btn btn-primary" >Sign in<FaSignInAlt /></Button>

            </Form>
          </Navbar.Collapse>


      }


    }
    return (
      <Navbar collapseOnSelect expand="lg" bg="white" className="shadow">

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {menu}



      </Navbar>

    )
  }
}
export default Header;
