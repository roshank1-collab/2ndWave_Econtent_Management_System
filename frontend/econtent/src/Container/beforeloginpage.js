
import { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from '../Dashboard/DashboardUpperPart/images/econtent.jpeg'
import wallpaper2 from '../Dashboard/DashboardUpperPart/images/second.jpeg'
import wallpaper3 from '../Dashboard/DashboardUpperPart/images/edu.jpeg'
import './home.css'


import { FaAngellist,FaRocketchat,FaRegSmile} from 'react-icons/fa'


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
                

              
                <h4 style={{ color: "#51227F", fontWeight: "bolder", marginTop: "10px", textAlign: 'center' }}>Partnership & <span style={{ color: "#a018a0" }}>Accreditations</span></h4> <br />
                <div className="container">
                    <div className="row">

                        <div className="col-md-3"><img src="./images/campus.png" style={{height:'50px', width:'200px'}} className="img-fluid" alt="background" /></div>
                        <div className="col-md-3"><img src="./images/wow.png" style={{height:'50px', width:'200px'}} className="img-fluid" alt="background" /></div>
                        <div className="col-md-3"><img src="./images/econtent.png" style={{height:'50px', width:'200px'}} className="img-fluid" alt="background" /></div>
                        <div className="col-md-3"><img src="./images/softwarica.png" style={{height:'50px', width:'200px'}} className="img-fluid" alt="background" /></div>
                    </div>
                </div>

                <br />

                <div class="container-fluid mb-5" style={{backgroundColor:"rgba(179, 179, 182, 0.17)"}}>
    <div class="text-center mt-5">
        <h1>Our Services</h1>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="box">
                <div class="our-services settings">
                    <div class="icon"><FaRegSmile/> </div>
                    <h4>Settings</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none',marginTop:"60px" }}>Read more</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services speedup">
                <div class="icon"><FaRegSmile/> </div>
                    <h4>Speedup</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services privacy">
                <div class="icon"><FaRegSmile/> </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="box">
                <div class="our-services backups">
                <div class="icon"><FaRegSmile/> </div>
                    <h4>Backups</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services ssl">
                <div class="icon"><FaRegSmile/> </div>
                    <h4>SSL secured</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <div class="our-services database">
                <div class="icon"><FaRegSmile/> </div>
                    <h4>Database</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
    </div>
</div>


                <div style={{ backgroundColor: "#F5EEFC" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" style={{ height: '400px' }}>
                                <p className="text-dark" style={{ marginTop: '180px' }}>
                                    “A service is any activity or benefit that are being an offer to another that is essentially intangible and does not result in the ownership of anything.”.
                                    
                                </p>
                                <a href="/register" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none' }}>Join us >></a>
                            </div>
                            <div className="col-md-6">
                                <img classN="card-img-top" src="./images/servicelady.png" className="img-fluid mt-5" alt="Card image cap" />
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default BeforeLogin;



