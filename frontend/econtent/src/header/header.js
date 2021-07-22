import { Component } from "react"
import { Nav, NavDropdown, Navbar, Form, Button } from 'react-bootstrap';
import { Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import { FaTwitter, FaUserGraduate, FaLandmark, FaLinkedin, FaTty, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

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
      {/* <Button style={{ marginRight: "20px" }} className="btn btn-danger" onClick={handleShow} >Sign Out</Button> */}
      <Button style={{ backgroundColor: "#51227F", border:"none",color: "white", fontWeight: "bold", marginTop: "5px" }} type="submit" onClick={handleShow} className="btn btn-primary"> Sign Out <FaSignOutAlt /> </Button>
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

      <nav>

        <nav class="navbar navbar-expand-md fixed-top-sm justify-content-start striped-border border-bottom">
          <Nav className="mr-auto">
            <NavDropdown.Item href="/facebook"><FaFacebook style={{ color: "#4169E1" }} /></NavDropdown.Item>
            <NavDropdown.Item href="/facebook"><FaInstagram style={{ color: "#B22222	" }} /></NavDropdown.Item>
            <NavDropdown.Item href="/facebook"><FaLinkedin style={{ color: "#4682B4" }} /></NavDropdown.Item>
            <NavDropdown.Item href="/facebook"><FaTwitter style={{ color: "#00acee" }} /></NavDropdown.Item>

            <NavDropdown.Item href={"/myprofile/" + id}><FaUserCircle style={{ color: "purple", width: "29px", height: "29px" }} /></NavDropdown.Item>


            {/* <img class="rounded-circle article-img" src="{{ request.user.profile.image.url }}" id="img"/>  */}


          </Nav>
        </nav>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="/dashboard">
            <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginTop: "2px" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" style={{ fontSize: "21px", fontWeight: "bolder" }} href="/dashboard">Home </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/allchannel" style={{ fontSize: "19px", marginTop: "2px" }} >Channels</a>
                </li>
              </ul>
            </div>
            <NavDropdown style={{ color: "black", marginTop: "2px", fontSize: "19px" }} title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutus"><FaUserGraduate /> About Us</NavDropdown.Item>

              <NavDropdown.Item href="/ourteam"><FaUsers />Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/career"><FaTelegram />Carrer With Us</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown style={{ color: "black", marginTop: "2px", fontSize: "19px" }} title="Services" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/services"><FaServicestack />Services</NavDropdown.Item>
              <NavDropdown.Item href="/terms"><FaNewspaper /> Terms & Conditions</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown style={{ color: "black", marginTop: "2px", fontSize: "19px" }} title="Catagories" id="basic-nav-dropdown" >
              {
                Catagories.map((item) => (
                  <NavDropdown.Item onClick={filterCatagories.bind(this, item)}><FaServicestack />{item}</NavDropdown.Item>

                ))
              }


            </NavDropdown>
          </Nav>
          <div class="collapse navbar-collapse" id="navbarNav" style={{ marginRight: "420px" }}  >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" style={{ fontSize: "18px", marginTop: "2px", fontFamily: "Poppins, sans-serif" }} href="#">Live Audio/Video </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/uploadcontent" style={{ fontSize: "19px", marginTop: "2px", fontFamily: "Poppins,sans-serif" }} >UploadContent <FaUpload /></a>
              </li>
            </ul>
          </div>



          {/* <Button style={{ marginRight: "20px",backgroundColor:"#51227F" }} href="/login"  onClick = {this.logout} style={{ fontWeight:"bold" }}>Sign Out<FaSignOutAlt /> </Button> */}
          <Example />
        </Navbar.Collapse>
      </nav>
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
    <Navbar collapseOnSelect expand="lg" bg="white" className="shadow">

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      {menu}



    </Navbar>

  )
}
export default Header;
