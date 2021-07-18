import { Component } from "react"

import { Nav, NavDropdown, Navbar, Form, Button } from 'react-bootstrap';
import { FaEnvelopeOpenText, FaUserGraduate, FaSuitcaseRolling,FaRegMoon,FaCcVisa,FaAngellist,FaNewspaper,FaServicestack,FaTelegram,FaSignInAlt,FaCartPlus,FaUsers,FaRibbon,FaInfo, FaShareSquare,  FaPlusCircle, FaRegEye, FaListUl, FaMedapps, FaTelegramPlane,FaUserCog,FaCaretRight,FaRegSmile } from 'react-icons/fa'

const id  = localStorage.getItem('id')

class Header extends Component {
  
 
  logout = ()=>{
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
      <Nav.Link href="/addproduct"><FaPlusCircle/> Home</Nav.Link>
      <Nav.Link href="/viewproduct"><FaRegEye/> Channels</Nav.Link>

    </Nav>
    <Form inline>
    <Nav.Link href="/subscribers"><FaEnvelopeOpenText/> Subscribers</Nav.Link>
    <Nav.Link href="/Uploadcontent"><FaListUl/> Uploadcontent</Nav.Link>
    <Nav.Link href=""><FaRibbon/> Signed in as <u>{localStorage.getItem('fullname')}</u></Nav.Link>
    <Nav.Link href="/userdetails"><FaUserCog/> Users</Nav.Link>
    <Nav.Link href="/createpromo"><FaTelegramPlane/> Create Campaign</Nav.Link>
      <Button Link to="/logout" className="btn btn-primary" onClick={this.logout}><FaShareSquare/> Sign out</Button>
    
    </Form>
    
  </Navbar.Collapse>
          
         



    }
    else if (localStorage.getItem('token')  && localStorage.getItem('userType') === 'Customer')  {
       menu =

         <Navbar.Collapse id="responsive-navbar-nav">
                   <Navbar.Brand href="/dashboard">
          <img src="/images/txtlogo.png" className="d-inline-block align-top" alt="logo" />

        </Navbar.Brand>
         <Nav className="mr-auto">
           

         </Nav>
         <Form inline>
         <Nav.Link href={"/myprofile/" + id}><FaRibbon/> Signed in as: <u>{localStorage.getItem('fullname')}</u></Nav.Link>
           <Nav.Link href="/Uploadcontent"><FaCartPlus/> UploadContent</Nav.Link>
           <Nav.Link href="/promotions"> <FaMedapps/> Promotions</Nav.Link>
           <Button Link to="/logout" className="btn btn-primary" onClick={this.logout}> Sign out</Button>
         
         </Form>
       </Navbar.Collapse>
    }
    else
    {
       menu=
       
       <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="/">
          <h3 style={{color:"#a018a0",fontWeight:"bolder",marginTop:"2px"}}>E-<span style={{color:"#51227F"}}>content</span></h3>

        </Navbar.Brand>
       <Nav  className="mr-auto">
         <NavDropdown style={{color:"black",fontWeight:"bold"}}title="Company" id="basic-nav-dropdown">
         <NavDropdown.Item href="/aboutfounder"><FaUserGraduate/> About Us</NavDropdown.Item>
           <NavDropdown.Item href="/aboutfounder"><FaRegSmile/> Why Choose Us?</NavDropdown.Item>
           <NavDropdown.Item href="/Aboutgadgetshop"><FaUsers/>Our Team</NavDropdown.Item>
           <NavDropdown.Item href="/Aboutgadgetshop"><FaTelegram/>Carrer With Us</NavDropdown.Item>

         </NavDropdown>
         <NavDropdown style={{color:"black",fontWeight:"bold"}} title="Services" id="basic-nav-dropdown" >
           <NavDropdown.Item href="/howitwork"><FaServicestack/>Services & Pricing</NavDropdown.Item>
           <NavDropdown.Item href="/howitwork"><FaAngellist/>Offers</NavDropdown.Item>
           <NavDropdown.Item href="/termsandconditions"><FaCcVisa/> Pricing Plans</NavDropdown.Item>
           <NavDropdown.Item href="/termsandconditions"><FaNewspaper/> Terms & Conditions</NavDropdown.Item>

         </NavDropdown>
         
         
       </Nav>
       <Form inline>
      
         <Button style={{backgroundColor:"#51227F"}}href="/login" className="btn btn-primary" >Sign in<FaSignInAlt/></Button>
       
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
