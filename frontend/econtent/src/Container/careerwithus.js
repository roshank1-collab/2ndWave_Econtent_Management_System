import { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from '../Dashboard/DashboardUpperPart/images/econtent.jpeg'
import wallpaper2 from '../Dashboard/DashboardUpperPart/images/second.jpeg'
import wallpaper3 from '../Dashboard/DashboardUpperPart/images/edu.jpeg'


import { FaCheckCircle, FaOpencart, FaLinkedin, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile } from 'react-icons/fa'
import BeforeLogin from './beforeloginpage';


class CareerWithUs extends Component {
    render() {
        return (
            <div>
                <div className=" container mt-4 mb-4 shadow">
                    <div className="row">
                        <h2 style={{ color: '#51127F', fontWeight: 'bolder', marginTop: '10px' }}>Join our <span style={{ color: '#BF3A89', fontWeight: 'bolder', marginTop: '10px' }}>team</span></h2>
                        <div className="col-md-6 mt-3">
                            <p>
                                We understand that our people are the key to our success. Our work environment fosters collaboration, communication, and information sharing. We offer state-of-the-art infrastructure, including advanced network servers, modern workstations, videoconferencing, teleconferencing, and more. We provide technical and communication skills training, mentoring, and coaching to empower our employees to reach their fullest potential and feel part of the team. We’re looking for talented and motivated candidates with skills and experience in software development, database analytics, software testing, IT management, and business processes. Verisk Nepal is an equal opportunity employer.

                                If you’re interested in joining our dynamic, collaborative team, please send your resume to us.
                            </p>
                            <Button className="mb-4" style={{ backgroundColor: '#BF3A89', border: 'none' }} variant="primary">Apply Now</Button>
                        </div>
                        <div className="col-md-6">

                            <img src="../images/usingcomputer.png" alt="bgroup" width="100%" className="img-fluid" />

                        </div>
                    </div>
                </div>

            </div>



        )
    }
}

export default CareerWithUs;
