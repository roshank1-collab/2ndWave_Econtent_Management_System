

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
            </div>
            <div class="container">
  <div class="row">
    <div class="col-sm">
    <img src="../images/this.jpg" alt="bgroup" width="100%" className="img-fluid" style={{marginTop:"50px"}}/>
    </div>
    <div class="col-sm" style={{marginTop:"40px"}}>
    <h3 className="mt-4 py-3" style={{color:'#51227F', fontWeight:'bold',fontFamily:'Impact, fantasy', marginLeft:'30px'}}>l About Us ?</h3>
     <p style={{fontSize:"18px",marginLeft:"25px",fontFamily:"roboto"}}>Irrespective of race, creed, and gender, education makes it possible for people to stand out as equal with all the other persons from different walks of life.

Overall, education is the platform that makes it possible to defeat all barriers.

In that respect, here are some powerful education quotes to help us appreciate the power of learning and gaining knowledge.</p>
<p style={{fontSize:"19px",marginLeft:"25px",fontFamily:"roboto"}}>Upon the subject of education … I can only say that I view it as the most important subject which we as a people may be engaged in.-
Learning is like rowing upstream: not to advance is to drop back.Education is the ability to listen to almost anything without losing your temper or your self-confidence.
Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.and we all participated lol.
</p>
    </div>
  </div>
</div>
            <br/>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-6" style={{float:'left', fontFamily:'lato bold'}}>

                    <h3 className="mt-4 py-3" style={{color:'#51127F', fontWeight:'bolder',fontFamily:'Impact, fantasy', marginLeft:'30px'}}>l Who are we ?</h3>
               <p  style={{ marginLeft:'30px',fontSize:"19px"}}>
               Go back and read the content marketing definition one more time, but this time remove the relevant and valuable. That’s the difference between content marketing and the other informational garbage you get from companies trying to sell you “stuff.” Companies send us information all the time – it’s just that most of the time it’s not very relevant or valuable (can you say spam?). That’s what makes content marketing so intriguing in today’s environment of thousands of marketing messages per person per day.
               </p>
               
                </div>
                <div className="col-md-6">
                <img src="../images/khai.png" alt="bgroup" className="img-fluid" style={{marginLeft:"25px",height:"350px",width:"300px" ,marginLeft:'110px'}}/>
                </div>
            </div></div>

            <div className="container-fluid">
                <div className="row">
                <div className="col-md-6" style={{float:'left', fontFamily:'lato bold'}}>

                    <h3 className="mt-4 py-3" style={{color:'#51127F', fontWeight:'bolder',fontFamily:'Impact, fantasy', marginLeft:'30px'}}>l Why should you go with us?</h3>
               <p  style={{color:'#51127F', marginLeft:'30px'}}>
               <Button variant="outline-danger"><FaCheckCircle/> Latest Content</Button> &nbsp; <Button variant="outline-danger">  <FaCheckCircle/> Beneficial coursework</Button>
               &nbsp;<Button variant="outline-danger"><FaCheckCircle/> Discover anything at a reasonable cost</Button>  <br/>  <br/>&nbsp; <Button variant="outline-danger"><FaCheckCircle/> Dedicated Team</Button>
              &nbsp; <Button variant="outline-danger"><FaCheckCircle/> Implemention in a matter</Button> 
              
               </p>

                </div>
                <div className="col-md-6">
                <img src="../images/ho.jpg" alt="bgroup" style={{height:"300px",marginLeft:"110px"}} className="img-fluid"/>
                </div>
            </div></div>


            </div>
        )
    }
}

export default AboutUs;
