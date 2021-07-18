import { Component } from "react"
import '../App.css'
import { Link } from 'react-router-dom'
import { FaFly, FaInternetExplorer, FaMonero, FaPhoneSquareAlt,FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare,FaInstagramSquare } from "react-icons/fa";
class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer-1">
                <div className="main-footer widgets-dark typo-light">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                    <h5 className="widget-title" style={{ color: "#ffffff", }}>E- Content<span></span></h5>
                                   
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
                                            <div className="thumb-content"><a href="#">About us</a></div> <br/>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a target="_blank" href="#">Careers</a></div> <br/> 
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a target="_blank" href="#">Terms & conditions</a></div><br/> 
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#">FAQ</a></div> <br/> 
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a target="_blank" href="#" target="_blank">Contact us</a></div>
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
                                            <button type="submit" className="btn btn-primary"> Subscribe </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">

                                <div className="widget no-box">
                                    <h5 className="widget-title">Contact Us<span></span></h5>

                                    <p><Link to="www.gmail.com" target="_blank" title="glorythemes">info@econtentweb.com</Link></p>
                                    <ul className="social-footer2">
                                        <li className=""><Link title="youtube" target="_blank" to="https://www.youtube.com/"><FaYoutubeSquare /></Link></li>
                                        <li className=""><Link to="https://www.facebook.com/" target="_blank" title="Facebook"><FaFacebookSquare /></Link></li>
                                        <li className=""><Link to="https://twitter.com" target="_blank" title="Twitter"><FaTwitterSquare /></Link></li>
                                        <li className=""><Link title="instagram" target="_blank" to="https://www.instagram.com/"><FaInstagramSquare /></Link></li>
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
