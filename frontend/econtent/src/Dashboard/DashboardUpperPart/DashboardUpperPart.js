import { Component } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from './images/econtent.jpeg'
import wallpaper2 from './images/second.jpeg'
import wallpaper3 from './images/edu.jpeg'

import { FaOpencart, FaLinkedin, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile } from 'react-icons/fa'
class DashboardUpperPart extends Component {
    render() {
        return (
            <>
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
                            <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="#features"> Buy Content <FaOpencart /></a>
                            <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="/allchannel">Channels <FaUsers /></a>
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
                            <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="#features"> Buy Content <FaOpencart /></a>
                            <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="/allchannel">Channels <FaUsers /></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "600px" }}>
                        <img
                            className="d-block w-100"
                            src={wallpaper3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{ color: "white" }}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                            <p style={{ color: "white" }}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                            <a style={{ backgroundColor: "#a018a0", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="#features"> Buy Content <FaOpencart /></a>
                            <a style={{ backgroundColor: "#51227F", fontWeight: "bolder", color: "white" }} class="btn  btn-lg px-4 me-sm-3" href="/allchannel">Channels <FaUsers /></a>
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default DashboardUpperPart;