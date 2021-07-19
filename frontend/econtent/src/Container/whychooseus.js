import { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from '../Dashboard/DashboardUpperPart/images/econtent.jpeg'
import wallpaper2 from '../Dashboard/DashboardUpperPart/images/second.jpeg'
import wallpaper3 from '../Dashboard/DashboardUpperPart/images/edu.jpeg'


import { FaCheckCircle, FaOpencart, FaLinkedin, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile, FaViacoin } from 'react-icons/fa'
import BeforeLogin from './beforeloginpage';


class WhyChooseUs extends Component {
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

                <div>
                    <img src="../images/whychoose.png" alt="bgroup" width="100%" className="img-fluid" />
                </div>
                <div className="container-fluid mt-4">
                    <div className="row shadow mb-3">
                        <p>
                            We assist businesses in developing digital experiences, reaching consumers, and growing. We enjoy what we do.
                        </p>
                        <br/> <br/>
                        <h3 className="shadow" style={{ color: '#BF3A89', fontWeight: 'bolder' }}>1. You talk we  <span style={{color:'#51127F'}}>listen</span></h3>
                        <p>
                            We believe in doing business with honesty, integrity and a sincere heart for others. We aren’t going to sell you something you don’t need. We won’t lie to get your business. We will treat you with kindness and respect. The way it should be (and far too often is not).
                        </p>
                        <br/> <br/> <br/> <br/>
                        <h3 className="shadow" style={{ color: '#BF3A89', fontWeight: 'bolder' }}>2. Take <span style={{color:'#51127F'}}>Initiative</span></h3>
                        <p>
                        We believe in doing business with honesty, integrity and a sincere heart for others. We aren’t going to sell you something you don’t need. We won’t lie to get your business. We will treat you with kindness and respect. The way it should be (and far too often is not).                       
                   </p>
                   <br/> <br/> <br/> <br/>
                   <h3 className="shadow" style={{ color: '#BF3A89', fontWeight: 'bolder'}}>3. Ensure <span style={{color:'#51127F'}}>growth</span></h3>
                        <p>
                        We believe in doing business with honesty, integrity and a sincere heart for others. We aren’t going to sell you something you don’t need. We won’t lie to get your business. We will treat you with kindness and respect. The way it should be (and far too often is not).                   </p>

                        <br/> <br/> <br/> <br/>
                        <h3 className="shadow" style={{ color: '#BF3A89', fontWeight: 'bolder' }}>4. Qualify <span style={{color:'#51127F'}}>our success</span></h3>
                        <p>
                        We believe in doing business with honesty, integrity and a sincere heart for others. We aren’t going to sell you something you don’t need. We won’t lie to get your business. We will treat you with kindness and respect. The way it should be (and far too often is not).                </p>
                        <br/> <br/> <br/> <br/>
                        <h3 className="shadow" style={{ color: '#BF3A89', fontWeight: 'bolder' }}>Let's make you and your <span style={{color:'#51127F'}}>education grow.</span> </h3>
                   <p>
                   Let's talk about it and get your businesses up and running in a healthy and efficient manner.<br/>
                  <br/> <br/>
                   <a href="/register">
                        <Button style={{backgroundColor:'#51127F', border:'none'}} variant="primary"> Explore</Button> </a>
        
                   </p>
                   
                    </div>

                </div>


            </div>
        )
    }
}

export default WhyChooseUs;