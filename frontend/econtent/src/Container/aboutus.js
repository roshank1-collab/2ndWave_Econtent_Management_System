import { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from '../Dashboard/DashboardUpperPart/images/econtent.jpeg'
import wallpaper2 from '../Dashboard/DashboardUpperPart/images/second.jpeg'
import wallpaper3 from '../Dashboard/DashboardUpperPart/images/edu.jpeg'


import { FaCheckCircle,FaOpencart, FaLinkedin, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile } from 'react-icons/fa'
import BeforeLogin from './beforeloginpage';


class AboutUs extends Component {
    render() {
        return (
            <div>
               <div>
                <Carousel fade>
                    <Carousel.Item style={{height:"600px"}}>
                        <img
                            className="d-block w-100"
                            src={wallpaper1} 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 style={{color:"white"}}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                            <p  style={{color:"white"}}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                            <a style={{backgroundColor:"#a018a0",fontWeight:"bolder", color:"white"}} class="btn  btn-lg px-4 me-sm-3" href="#features">Explore <FaAngellist/></a>
                                    <a style={{backgroundColor:"#51227F",fontWeight:"bolder", color:"white"}} class="btn  btn-lg px-4 me-sm-3" href="/contact">Contact <FaRocketchat/></a>
                        </Carousel.Caption> 
                    </Carousel.Item>
                    <Carousel.Item style={{height:"600px"}}>
                        <img
                            className="d-block w-100"
                            src={wallpaper2} 
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{color:"black"}}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                            <p  style={{color:"black"}}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                            <a style={{backgroundColor:"#a018a0",fontWeight:"bolder", color:"white"}} class="btn  btn-lg px-4 me-sm-3" href="#features">Explore <FaAngellist/></a>
                                    <a style={{backgroundColor:"#51227F",fontWeight:"bolder", color:"white"}} class="btn  btn-lg px-4 me-sm-3" href="/contact">Contact <FaRocketchat/></a>  </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:"600px"}}>
                        <img
                            className="d-block w-100"
                            src={wallpaper3} 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 style={{color:"white"}}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                        <a style={{backgroundColor:"#a018a0",fontWeight:"bolder", color:"white"}} class="btn  btn-lg px-4 me-sm-3" href="#features">Explore <FaAngellist/></a>
                                    <a style={{backgroundColor:"#51227F",fontWeight:"bolder", color:"white"}} class="btn  btn-lg px-4 me-sm-3" href="/contact">Contact <FaRocketchat/></a>  </Carousel.Caption>
                        
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <img src="../images/aback.png" alt="bgroup" width="100%" className="img-fluid"/>
            </div>
            <br/>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-6" style={{float:'left', fontFamily:'lato bold'}}>

                    <h3 className="mt-4 py-3" style={{color:'#BF3A89', fontWeight:'bolder',fontFamily:'Impact, fantasy', marginLeft:'30px'}}>l Who are we ?</h3>
               <p  style={{color:'#51127F', marginLeft:'30px'}}>
               Go back and read the content marketing definition one more time, but this time remove the relevant and valuable. That’s the difference between content marketing and the other informational garbage you get from companies trying to sell you “stuff.” Companies send us information all the time – it’s just that most of the time it’s not very relevant or valuable (can you say spam?). That’s what makes content marketing so intriguing in today’s environment of thousands of marketing messages per person per day.
               </p>

                </div>
                <div className="col-md-6">
                <img src="../images/abg2.png" alt="bgroup" width="100%" className="img-fluid"/>
                </div>
            </div></div>

            <div className="container-fluid">
                <div className="row">
                <div className="col-md-6" style={{float:'left', fontFamily:'lato bold'}}>

                    <h3 className="mt-4 py-3" style={{color:'#BF3A89', fontWeight:'bolder',fontFamily:'Impact, fantasy', marginLeft:'30px'}}>l Why should you go with us?</h3>
               <p  style={{color:'#51127F', marginLeft:'30px'}}>
               <Button variant="outline-danger"><FaCheckCircle/> Latest Content</Button> &nbsp; <Button variant="outline-danger">  <FaCheckCircle/> Beneficial coursework</Button>
               &nbsp;<Button variant="outline-danger"><FaCheckCircle/> Discover anything at a reasonable cost</Button>  <br/>  <br/>&nbsp; <Button variant="outline-danger"><FaCheckCircle/> Dedicated Team</Button>
              &nbsp; <Button variant="outline-danger"><FaCheckCircle/> Implemention in a matter</Button> 
              
               </p>

                </div>
                <div className="col-md-6">
                <img src="../images/benef.png" alt="bgroup"  className="img-fluid"/>
                </div>
            </div></div>


            </div>
        )
    }
}

export default AboutUs;