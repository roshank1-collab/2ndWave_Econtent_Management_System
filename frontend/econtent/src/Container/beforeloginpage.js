
import { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from '../Dashboard/DashboardUpperPart/images/econtent.jpeg'
import wallpaper2 from '../Dashboard/DashboardUpperPart/images/second.jpeg'
import wallpaper3 from '../Dashboard/DashboardUpperPart/images/edu.jpeg'
import './home.css'
import Script from "react-load-script";
import { FcBusinessman,FcBusinesswoman,FcLike } from "react-icons/fc";

import { FaAngellist,FaRocketchat,FaChalkboardTeacher,FaRegSmile,FaRegSmileBeam, FaUsers, FaUserClock, FaUpload, FaMoneyCheckAlt, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaHandsHelping, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook } from 'react-icons/fa'


class BeforeLogin extends Component {
    render() {
        return (
            <div>
              
               <div className='container-fluid' style = {{padding : '8px'}}>
                <Carousel fade>
                    <Carousel.Item style={{height:"500px"}}>
                        <img
                            className="d-block w-100"
                            src={wallpaper1} 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 style={{color:"white",fontFamily:"roboto",fontWeight:"bold"}}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                            <p  style={{color:"white",fontFamily:"roboto",fontSize:"18px"}}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                            <a style={{backgroundColor:"#a018a0",fontWeight:"bolder", color:"white",fontFamily:"roboto"}} class="btn  btn-lg px-4 me-sm-3" href="/aboutus">Explore <FaAngellist/></a>
                                    <a style={{backgroundColor:"#51227F",fontWeight:"bolder", color:"white",fontFamily:"roboto"}} class="btn  btn-lg px-4 me-sm-3" href="/contactus">Contact <FaRocketchat/></a>
                        </Carousel.Caption> 
                    </Carousel.Item>
                    <Carousel.Item style={{height:"500px"}}>
                        <img
                            className="d-block w-100"
                            src={wallpaper2} 
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{color:"black",fontFamily:"roboto",fontWeight:"bold"}}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                            <p  style={{color:"black",fontFamily:"roboto",fontSize:"18px"}}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                            <a style={{backgroundColor:"#a018a0",fontWeight:"bolder", color:"white",fontFamily:"roboto"}} class="btn  btn-lg px-4 me-sm-3" href="/aboutus">Explore <FaAngellist/></a>
                                    <a style={{backgroundColor:"#51227F",fontWeight:"bolder", color:"white",fontFamily:"roboto"}} class="btn  btn-lg px-4 me-sm-3" href="/contactus">Contact <FaRocketchat/></a> </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:"500px"}}>
                        <img
                            className="d-block w-100"
                            src={wallpaper3} 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 style={{color:"white",fontFamily:"roboto",fontWeight:"bold"}}>The more that you read, the more things you will know, the more that you learn, the more places you’ll go.</h3>
                        <p  style={{color:"white",fontFamily:"roboto",fontSize:"19px"}}>Live as if you were to die tomorrow. Learn as if you were to live forever.</p>
                        <a style={{backgroundColor:"#a018a0",fontWeight:"bolder", color:"white",fontWeight:"bold",fontFamily:"roboto"}} class="btn  btn-lg px-4 me-sm-3" href="/aboutus">Explore <FaAngellist/></a>
                                    <a style={{backgroundColor:"#51227F",fontWeight:"bolder", color:"white",fontFamily:"roboto"}} class="btn  btn-lg px-4 me-sm-3" href="/contactus">Contact <FaRocketchat/></a>  </Carousel.Caption>
                        
                    </Carousel.Item>
                </Carousel>
            </div>
                

              
                <h4 style={{ color: "#51227F", fontWeight: "bolder", marginTop: "10px", textAlign: 'center',fontSize:"30px" }}>Partnership & <span style={{ color: "#a018a0" }}>Accreditations</span></h4> <br />
                <div className="container">
                    <div className="row">

                        <div className="col-md-3"><img src="./images/campus.png" style={{height:'40px', width:'150px'}} className="img-fluid" alt="background" /></div>
                        <div className="col-md-3"><img src="./images/wow.png" style={{height:'40px', width:'150px'}}  className="img-fluid" alt="background" /></div>
                        <div className="col-md-3"><img src="./images/econtent.png" style={{height:'40px', width:'150px'}}  className="img-fluid" alt="background" /></div>
                        <div className="col-md-3"><img src="./images/softwarica.png" style={{height:'40px', width:'150px'}}  className="img-fluid" alt="background" /></div>
                    </div>
                </div>

                <br />

                <div class="container-fluid mb-5" style={{backgroundColor:"#ADADC9"}}>
    <div class="text-center mt-5" style={{marginTop:"20px"}}>
        <h1 style={{ color: "#a018a0", fontWeight: "bolder",fontSize:"30px" }}>Our<span style={{ color: "#51227F", fontWeight: "bold",fontSize:"35px",marginLeft:"1px"}}>Services</span> </h1>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="box">
                <div class="our-services settings">
                    <div class="icon"><FaRegSmile style={{fontSize:"57px"}}/> </div>
                    <h5 style={{fontWeight:"bold",color:"#51227f"}}>We're free</h5>
                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site for both buyers and sellers.</p>

                    <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none',marginTop:"60px" }}>Read more</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services speedup">
                <div class="icon"><FaUsers style={{fontSize:"57px"}}/> </div>
                <h5 style={{fontWeight:"bold",color:"#51227f"}}>We're unbiased</h5>
                        <p>Under normal conditions, the site is similarly responsive and effective to all types of users. We play a role for both the vendor and the buyer while keeping the comfort of the E-content users in mind.</p>
                    <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none',marginTop:"60px" }}>Read more</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services privacy">
                <div class="icon"><FaHandsHelping style={{fontSize:"57px"}}/> </div>
                <h5 style={{fontWeight:"bold",color:"#51227f"}}>We guide you</h5>
                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site for both buyers and sellers.</p>
                        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none',marginTop:"60px" }}>Read more</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="box">
                <div class="our-services backups">
                <div class="icon"><FaUserClock style={{fontSize:"57px"}}/> </div>
                <h5 style={{fontWeight:"bold",color:"#51227f"}}>Creation of user account</h5>
                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site for both buyers and sellers.</p>
                    <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none',marginTop:"60px" }}>Read more</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services ssl">
                <div class="icon"><FaUpload style={{fontSize:"57px"}}/> </div>
                <h5 style={{fontWeight:"bold",color:"#51227f"}}>Upload content/Sell</h5>
                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide the finest site for both buyers and sellers.</p>
                    <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none',marginTop:"60px" }}>Read more</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services database">
                <div class="icon"><FaMoneyCheckAlt style={{fontSize:"57px"}}/> </div>
                <h5 style={{fontWeight:"bold",color:"#51227f"}}>Get amount directly to your account</h5>
                        <p>We offer to create a channel for users via which they may subscribe to another user and send messages or buy their content for free. As usual, we strive to provide.</p>
                    
                    <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none',marginTop:"60px" }}>Read more</a>
                </div>
            </div>
        </div>
    </div>
</div>

{/* animated site */}

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="./images/two.jpeg" class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                   

                        <div class="col-12">
                            <div class="mt-4 pt-2 text-right">
                                <a href="javascript:void(0)" class="btn btn-info" >Read More <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                 
                </div>
       

                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img style={{height:"400px"}}src="./images/four.jpeg" class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
     

                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="./images/three.jpeg"class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
               
            </div>
      
        </div>
      

        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div class="section-title ml-lg-5">
            <h4 style={{ color: "black", fontWeight: "bolder", marginTop: "10px", textAlign: 'center',fontSize:"35px" }}>Abouts <span style={{ color: "#a018a0" }}>Us</span></h4> <br />
                <h4 class="title mb-4">
                Any material available on the Web. Online content includes text, images, animations, music and videos. <br />
                    make your life easier.
                </h4>
                <p class="text-muted mb-0" style={{fontSize:"25px"}}>Education is the social institution through which society provides its members with important knowledge, including basic facts, job skills, and cultural norms values. One of the most important benefits of education is that it improves personal lives and helps the society to run smoothly.</p>
                <div class="row">
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-play h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Latest Context</a></h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-file-download h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Buy Content</a></h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-user h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Get Support</a></h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-image h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Develop Yourself</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
</div>
{/* testominal */}






                <div style={{ backgroundColor: "#ADADC9" }}>
           <div className="container">        
<Carousel >
  <Carousel.Item interval={1000} style={{color:"black"}}>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src="./images/blaci.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
    <div class="carousel-caption">
                   <FcBusinessman style={{fontSize:"70px"}}/> <p style={{color:"black",fontFamily:"Apple Chancery, cursive",fontSize:"20px"}}>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p>
                    <div id="image-caption" style={{fontFamily:"Georgia, serif",color:"black",fontWeight:"bolder"}}>.....Nick Doe</div>
                </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000} style={{color:"black"}}>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src="./images/blaci.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
    <div class="carousel-caption">
                   <FcBusinesswoman style={{fontSize:"70px"}}/> <p style={{color:"black",fontFamily:"Apple Chancery, cursive",fontSize:"20px"}}>I'm pleased to be a part of e-content family. My all effort of making ppt, video ,slides are worthy which could now be used by the another reader. I am happy to be a part of this platform.  </p>
                    <div id="image-caption" style={{fontFamily:"Georgia, serif",color:"black",fontWeight:"bolder"}}>.....Riya Pandey</div>
                </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000} style={{color:"black"}}>
    <img style={{height:"250px"}}
      className="d-block w-100"
      src="./images/blaci.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
    <div class="carousel-caption">
        <FcLike style={{fontSize:"70px"}}/><p style={{color:"black",fontFamily:"Apple Chancery, cursive",fontSize:"20px"}}>Being a techer is was been very difficult to find the platform for some thing like this, where I can actually sell my effortful content to someone interested on it and could earn side money. My efforts are payinf off and i amd glad that I did knew about this site soon. </p>
                    <div id="image-caption" style={{fontFamily:"Georgia, serif",color:"black",fontWeight:"bolder"}}>.....Roshan Koirala</div>
                </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </div>
                </div>



            </div>
        )
    }
}

export default BeforeLogin;



