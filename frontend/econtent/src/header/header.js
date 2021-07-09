import { Component } from "react"

import { Nav, NavDropdown, Navbar, Form, Button } from 'react-bootstrap';
import { FaEnvelopeOpenText, FaUserGraduate, FaSuitcaseRolling, FaRegMoon, FaCartPlus, FaRibbon, FaInfo, FaShareSquare, FaPlusCircle, FaRegEye, FaListUl, FaMedapps, FaTelegramPlane, FaUserCog } from 'react-icons/fa'

const id = localStorage.getItem('id')

class Header extends Component {


  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    localStorage.removeItem('id')
    localStorage.removeItem('fullname')
    localStorage.removeItem('userdetails')
    window.location.href = '/'
  }
  render() {
    {
      if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {
        var menu =

          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/dashboard">
              <img src="/images/txtlogo.png" className="d-inline-block align-top" alt="logo" />

            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/addproduct"><FaPlusCircle /> Add Product</Nav.Link>
              <Nav.Link href="/viewproduct"><FaRegEye /> View Product</Nav.Link>

            </Nav>
            <Form inline>
              <Nav.Link href="/subscribers"><FaEnvelopeOpenText /> Subscribers</Nav.Link>
              <Nav.Link href="/orders"><FaListUl /> Orders</Nav.Link>
              <Nav.Link href=""><FaRibbon /> Signed in as <u>{localStorage.getItem('fullname')}</u></Nav.Link>
              <Nav.Link href="/userdetails"><FaUserCog /> Users</Nav.Link>
              <Nav.Link href="/createpromo"><FaTelegramPlane /> Create Campaign</Nav.Link>
              <Button Link to="/logout" className="btn btn-primary" onClick={this.logout}><FaShareSquare /> Sign out</Button>

            </Form>

          </Navbar.Collapse>





      }
      else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Customer') {
        menu =

          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/dashboard">
              <img src="/images/txtlogo.png" className="d-inline-block align-top" alt="logo" />

            </Navbar.Brand>
            <Nav className="mr-auto">


            </Nav>
            <Form inline>
              <Nav.Link href={"/myprofile/" + id}><FaRibbon /> Signed in as: <u>{localStorage.getItem('fullname')}</u></Nav.Link>
              <Nav.Link href="/mycart"><FaCartPlus /> My Cart</Nav.Link>
              <Nav.Link href="/promotions"> <FaMedapps /> Promotions</Nav.Link>
              <Button Link to="/logout" className="btn btn-primary" onClick={this.logout}><FaShareSquare /> Sign out</Button>

            </Form>
          </Navbar.Collapse>
      }
      else {
        menu =

          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">
              <h3>E-content</h3>

            </Navbar.Brand>
            <Nav className="mr-auto">

              <NavDropdown title="Company" id="basic-nav-dropdown">
                <NavDropdown.Item href="/aboutfounder"><FaUserGraduate /> About Founder</NavDropdown.Item>
                <NavDropdown.Item href="/Aboutgadgetshop"><FaSuitcaseRolling />About Gadget Shop</NavDropdown.Item>


              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/howitwork"><FaInfo /> How does it work?</NavDropdown.Item>
                <NavDropdown.Item href="/termsandconditions"><FaRegMoon /> Terms & Conditions</NavDropdown.Item>


              </NavDropdown>


            </Nav>
            <Form inline>

              <Button href="/login" className="btn btn-primary">Sign in</Button>

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