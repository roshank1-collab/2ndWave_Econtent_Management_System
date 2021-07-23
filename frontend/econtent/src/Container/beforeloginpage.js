
import { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from '../Dashboard/DashboardUpperPart/images/econtent.jpeg'
import wallpaper2 from '../Dashboard/DashboardUpperPart/images/second.jpeg'
import wallpaper3 from '../Dashboard/DashboardUpperPart/images/edu.jpeg'


import { FaAngellist,FaRocketchat} from 'react-icons/fa'


class BeforeLogin extends Component {
    render() {
        return (
            <div>
               <div className='container-fluid' style = {{padding : '8px'}}>
                <Carousel fade>
                    <Carousel.Item style={{height:"600px"}}>
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
                    <Carousel.Item style={{height:"600px"}}>
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
                    <Carousel.Item style={{height:"600px"}}>
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
                <div style={{ backgroundColor: '#d5eaff' }}>
                    <h4 style={{ color: "#51227F", fontWeight: "bold", marginTop: "5px", textAlign: 'center' }}>Our <span style={{ color: "#a018a0" }}>Services</span></h4> <br />
                    <div className="container">
                        <div className="row">

                            <div className="col-md-3 mb-4">
                                <div className="card" style={{ width: "15rem" }}>
                                    <img className="card-img-top" src="./images/services.png" alt="Card image cap" />
                                    <div className="card-body">

                                        <p className="card-text">When a company provides a service, and the customer has paid for it, there is no transfer of ownership. We cannot transport or store a service.

                                        </p>
                                        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none' }}>Read more</a>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card" style={{ width: "15rem" }}>
                                    <img classN="card-img-top" src="./images/services.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">When a company provides a service, and the customer has paid for it, there is no transfer of ownership. We cannot transport or store a service.</p>
                                        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none' }}>Read more</a>
                                    </div>
                                </div>



                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card" style={{ width: "15rem" }}>
                                    <img classN="card-img-top" src="./images/services.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">When a company provides a service, and the customer has paid for it, there is no transfer of ownership. We cannot transport or store a service.</p>
                                        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none' }}>Read more</a>
                                    </div>
                                </div>



                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card" style={{ width: "15rem" }}>
                                    <img classN="card-img-top" src="./images/services.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">When a company provides a service, and the customer has paid for it, there is no transfer of ownership. We cannot transport or store a service.</p>
                                        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#51227f', border: 'none' }}>Read more</a>
                                    </div>
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



