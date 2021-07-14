import { Component } from "react"
import { Nav, NavDropdown, Navbar, Form, Button } from 'react-bootstrap';
import { FaEnvelopeOpenText, FaUserGraduate, FaSuitcaseRolling, FaRegMoon, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaCartPlus, FaUsers, FaRibbon, FaInfo, FaShareSquare, FaPlusCircle, FaRegEye, FaListUl, FaMedapps, FaTelegramPlane, FaUserCog, FaCaretRight, FaRegSmile } from 'react-icons/fa'

import { Link } from "react-router-dom";

const id = localStorage.getItem('id')

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
            <Navbar.Brand href="/">
              <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginTop: "2px" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Navbar href="/aboutfounder">Home</Navbar>
              <Navbar href="/aboutfounder">Channel</Navbar>
              <NavDropdown style={{ color: "black", fontWeight: "bold" }} title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/aboutfounder">Categories 1</NavDropdown.Item>
                <NavDropdown.Item href="/aboutfounder">Categories 2</NavDropdown.Item>
                <NavDropdown.Item href="/aboutfounder">Categories 3</NavDropdown.Item>
                <NavDropdown.Item href="/aboutfounder">Categories 4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{ color: "black", fontWeight: "bold" }} title="Company" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/howitwork"><FaServicestack />Services & Pricing</NavDropdown.Item>
                <NavDropdown.Item href="/howitwork"><FaAngellist />Offers</NavDropdown.Item>
                <NavDropdown.Item href="/termsandconditions"><FaCcVisa /> Pricing Plans</NavDropdown.Item>
                <NavDropdown.Item href="/termsandconditions"><FaNewspaper /> Terms & Conditions</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Button style={{ marginRight: "20px" }} href="/upload" className="btn btn-primary">Upload</Button>
            </Form>
            <Form inline>
              <Button style={{ marginRight: "20px" }} href="/login" className="btn btn-danger" onClick = {this.logout}>Sign Out</Button>
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
            <Form inline>

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
