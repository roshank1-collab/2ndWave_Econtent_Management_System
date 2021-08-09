import { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaRegSmileBeam, FaRegSmile, FaUsers, FaUserClock, FaUpload, FaMoneyCheckAlt, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaHandsHelping, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook } from 'react-icons/fa'
import './services.css';


class Services extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <video style={{ height: "430px", marginTop: "50px" }} class="video-fluid z-depth-1" autoplay loop controls muted>
                                <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div class="col-sm" style={{ marginTop: "50px" }}>
                            <u><h2 style={{ color: "#51227F", fontWeight: "bolder" }}>E-Content for your comfort</h2></u>
                            <p style={{ fontSize: "18px" }}>Irrespective of race, creed, and gender, education makes it possible for people to stand out as equal with all the other persons from different walks of life.

                                Overall, education is the platform that makes it possible to defeat all barriers.

                                In that respect, here are some powerful education quotes to help us appreciate the power of learning and gaining knowledge.</p>
                                <p style={{ fontSize: "18px" }}>Irrespective of race, creed, and gender, education makes it possible for people to stand out as equal with all the other persons from different walks of life.

Overall, education is the platform that makes it possible to defeat all barriers.

In that respect, here are some powerful education quotes to help us appreciate the power of learning and gaining knowledge.</p>

                        </div>
                    </div>
                </div>


                <section class="section services-section" id="services">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                           
                                <div class="section-title">
                                <h3 style={{ color: '#a018a0', fontWeight: 'bold', fontFamily: 'Impact, fantasy'}}> About <span style={{color:" #51227F", fontWeight: 'bold', fontFamily: 'Impact, fantasy'}}>Us ?</span></h3>
                                    <p style={{ fontSize: "19px",marginLeft:"10px",marginTop:"15px" }}>We believe in and contribute to the provision of content to those in need. We think that education is supposed to be shared, and that those who have worked hard to generate it should be rewarded.
                                    Education, discipline that is concerned with methods of teaching and learning in schools or school-like environments as opposed to various nonformal and informal means of socialization (e.g., rural development projects and education through parent-child relationships).</p>
                              
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-sm-6 col-lg-4">
                                <div class="feature-box-1">
                                    <div class="icon" style={{ fontSize: "30px" }}>
                                        < FaRegSmile />
                                    </div>
                                    <div class="feature-content">
                                        <h5>We're free</h5>
                                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site for both buyers and sellers.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="feature-box-1">
                                    <div class="icon" style={{ fontSize: "30px" }}>
                                        <FaUsers />
                                    </div>
                                    <div class="feature-content">
                                        <h5>We're unbiased</h5>
                                        <p>Under normal conditions, the site is similarly responsive and effective to all types of users. We play a role for both the vendor and the buyer while keeping the comfort of the E-content users in mind.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="feature-box-1">
                                    <div class="icon" style={{ fontSize: "30px" }}>
                                        <FaHandsHelping />
                                    </div>
                                    <div class="feature-content">
                                        <h5>We guide you</h5>
                                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site for both buyers and sellers.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="feature-box-1">
                                    <div class="icon" style={{ fontSize: "30px" }}>
                                        <FaUserClock />
                                    </div>
                                    <div class="feature-content">
                                        <h5>Creation of user account</h5>
                                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site for both buyers and sellers.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="feature-box-1">
                                    <div class="icon" style={{ fontSize: "30px" }}>
                                        <FaUpload />
                                    </div>
                                    <div class="feature-content">
                                        <h5>Upload content/Sell</h5>
                                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site for both buyers and sellers.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-4">
                                <div class="feature-box-1">
                                    <div class="icon" style={{ fontSize: "30px" }}>
                                        <FaMoneyCheckAlt />
                                    </div>
                                    <div class="feature-content">
                                        <h5>Get amount directly to your account</h5>
                                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>




        )
    }
}

export default Services;
