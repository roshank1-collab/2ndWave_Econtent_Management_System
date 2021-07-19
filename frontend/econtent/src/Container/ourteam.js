import { Component } from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from '../Dashboard/DashboardUpperPart/images/econtent.jpeg'
import wallpaper2 from '../Dashboard/DashboardUpperPart/images/second.jpeg'
import wallpaper3 from '../Dashboard/DashboardUpperPart/images/edu.jpeg'


import { FaCheckCircle, FaOpencart, FaLinkedin, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile } from 'react-icons/fa'
import { FaFly,FaHandPointer, FaInternetExplorer, FaMonero, FaPhoneSquareAlt,FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare,FaInstagramSquare } from "react-icons/fa";

import BeforeLogin from './beforeloginpage';


class OurTeam extends Component {
    render() {
        return (
            <div>
                <div>
                    <Carousel fade>
                        <Carousel.Item style={{ height: "600px" }}>
                            <img
                                className="d-block w-100"
                                src={wallpaper1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{ color: "white" }}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                                <p style={{ color: "white" }}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                                <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="#features">Explore <FaAngellist /></a>
                                <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="/contact">Contact <FaRocketchat /></a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{ height: "600px" }}>
                            <img
                                className="d-block w-100"
                                src={wallpaper2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{ color: "black" }}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                                <p style={{ color: "black" }}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                                <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="#features">Explore <FaAngellist /></a>
                                <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="/contact">Contact <FaRocketchat /></a>  </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{ height: "600px" }}>
                            <img
                                className="d-block w-100"
                                src={wallpaper3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 style={{ color: "white" }}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                                <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="#features">Explore <FaAngellist /></a>
                                <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="/contact">Contact <FaRocketchat /></a>  </Carousel.Caption>

                        </Carousel.Item>
                    </Carousel>
                    </div>
                    <div className="mt-4 mb-4 text-center">
                        <h2 style={{color:'#51127F', fontWeight:'bolder'}}>Our <span style={{color:'#BF3A89', fontWeight:'bolder'}}>Team</span></h2>
                    </div>
                    <div className="mt-4 mb-4 text-center">
                        <p >We believe in doing business with honesty, integrity and a sincere heart for others. We aren’t going to sell you something you don’t need. We won’t lie to get your business. We will treat you with kindness and respect. The way it should be (and far too often is not). </p>
                    </div>

                <div className="container mt-4 mb-4">
                    <div className="row">
                        <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height:'250px', widht:'100px'}} src="../images/roshan.jpg" />
                        <Card.Body>
                            <Card.Title className="text-center">Roshan Koirala</Card.Title>
                            <Card.Text className="text-center">
                            <FaYoutubeSquare style={{color:"Red"}}/>
                            <FaFacebookSquare style={{color:"blue"}}/>
                            <FaTwitterSquare style={{color:"#0077c0"}}/>
                            <FaInstagramSquare style={{color:"#C13584"}}/>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                    </div>

                    <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height:'250px', widht:'100px'}} src="../images/sujit.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Sujit Prashad Kushuwaha</Card.Title>
                            <Card.Text className="text-center">
                            <FaYoutubeSquare style={{color:"Red"}}/>
                            <FaFacebookSquare style={{color:"blue"}}/>
                            <FaTwitterSquare style={{color:"#0077c0"}}/>
                            <FaInstagramSquare style={{color:"#C13584"}}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>


                    <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height:'250px', widht:'100px'}} src="../images/riya.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Riya Pandey</Card.Title>
                            <Card.Text className="text-center">
                            <FaYoutubeSquare style={{color:"Red"}}/>
                            <FaFacebookSquare style={{color:"blue"}}/>
                            <FaTwitterSquare style={{color:"#0077c0"}}/>
                            <FaInstagramSquare style={{color:"#C13584"}}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    </div>
                    </div>
                    </div>

                    <div className="container mt-4 mb-4">
                    <div className="row">
                        <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height:'250px', widht:'100px'}} src="../images/enjeela.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Enjeela Chaudhary</Card.Title>
                            <Card.Text className="text-center">
                            <FaYoutubeSquare style={{color:"Red"}}/>
                            <FaFacebookSquare style={{color:"blue"}}/>
                            <FaTwitterSquare style={{color:"#0077c0"}}/>
                            <FaInstagramSquare style={{color:"#C13584"}}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-4">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height:'250px', widht:'100px'}} src="../images/shankar.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Shankar Bhandari</Card.Title>
                            <Card.Text className="text-center">
                            <FaYoutubeSquare style={{color:"Red"}}/>
                            <FaFacebookSquare style={{color:"blue"}}/>
                            <FaTwitterSquare style={{color:"#0077c0"}}/>
                            <FaInstagramSquare style={{color:"#C13584"}}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height:'250px', widht:'100px'}} src="../images/usha.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Usha Katwal</Card.Title>
                            <Card.Text className="text-center">
                            <FaYoutubeSquare style={{color:"Red"}}/>
                            <FaFacebookSquare style={{color:"blue"}}/>
                            <FaTwitterSquare style={{color:"#0077c0"}}/>
                            <FaInstagramSquare style={{color:"#C13584"}}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    </div>
                    </div>
                </div>
              
               
        )
    }
}

export default OurTeam;