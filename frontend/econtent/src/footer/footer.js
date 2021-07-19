import { Component } from "react"
import '../App.css'
import { Link } from 'react-router-dom'
import { FaFly,FaHandPointer, FaInternetExplorer, FaMonero, FaPhoneSquareAlt,FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare,FaInstagramSquare } from "react-icons/fa";

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer-1 text-white">
                <div className="main-footer widgets-dark typo-dark">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginTop: "2px" }}>E-<span style={{ color: "#51227F" }}>content</span></h3>
                                   
                                    <p>
                                    <FaFly/> Kathmandu, Nepal <br/> <br/> 
                                    <FaInternetExplorer/> www.econtentweb.com <br/> <br/> 
                                    <FaMonero/> info@econtentweb.com <br/><br/> 
                                    <FaPhoneSquareAlt/> 01-958385583
                                    </p>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Company<span></span></h5>
                                    <ul className="thumbnail-widget">
                                   <p>
                                        <li>
                                        <div className="thumb-content"><a target="_blank" href="#">About Us</a></div> <br/> 
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a target="_blank" href="#">Careers</a></div> <br/> 
                                        </li>
                                        <li>
                                        <div className="thumb-content"><a href="#">FAQ</a></div> <br/>  
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a target="_blank" href="#">Contact Us</a></div> <br/> 
                                        </li>
                                        <li>
                                        <div className="thumb-content"><a href="#">Terms & Conditions </a></div> <br/>  
                                        </li>
                                        
                                       
                                        </p>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Subscribe us<span></span></h5>
                                    <p>Get notification of our newly launched updates and offers.</p>
                                    <form>
                                        <div className="form-group">

                                            <input type="text" className="form-control" placeholder="Email address" name="email" required /><br />
                                            <button style={{backgroundColor:"#51227F",color:"white",fontWeight:"bolder"}}type="submit" className="btn "> Subscribe<FaHandPointer/> </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">

                                <div className="widget no-box">
                                    <h5 className="widget-title">Contact Us<span></span></h5>

                                    <p><a href="www.gmail.com" target="_blank" title="glorythemes">info@econtentweb.com</a></p>
                                    <ul className="social-footer2">
                                        <Link title="youtube" target="_blank" to="https://www.youtube.com/"><FaYoutubeSquare style={{color:"Red",fontSize:"29px",marginRight:"7px"}}/></Link>
                                        <Link to="https://www.facebook.com/" target="_blank" title="Facebook"><FaFacebookSquare style={{color:"blue",fontSize:"29px",marginRight:"12px"}}/></Link>
                                       <Link to="https://twitter.com" target="_blank" title="Twitter"><FaTwitterSquare style={{color:"#0077c0",fontSize:"29px",marginRight:"12px"}} /></Link>
                                        <Link title="instagram" target="_blank" to="https://www.instagram.com/"><FaInstagramSquare  style={{color:"#C13584",fontSize:"29px",marginRight:"12px"}} /></Link>
                                    </ul>
                                    <ul className="social-footer2">

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>
                                    © 2020 - 2021 E-Content. Designed and Developed By 2nd Wave</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;