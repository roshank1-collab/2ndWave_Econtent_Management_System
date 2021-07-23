import { Component } from "react"
import '../App.css'
import { Link } from 'react-router-dom'
import { FaFly, FaHandPointer, FaInternetExplorer, FaMonero, FaPhoneSquareAlt, FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Footer extends Component {

    state = {
        email: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    subscribe = (e) => {
        e.preventDefault()
        axios.post('http://localhost:90/user/subscribe/website/notification/' + this.state.email, this.state)
            .then((response) => {
                console.log(response)
                if (response.data.message == "User has subscribed the website!!") {
                    toast.success("You have made a smart decision")
                    // toast.success(response.data.message)
                }
                else if (response.data.message == "You have already Subscribed the website!!") {
                    toast.error("Bhayo kya bhayo. Kati subscribe garira!!!")
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    render() {
        return (
            <footer id="footer" className="footer-1 text-white">
                <div className="main-footer widgets-dark typo-dark">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                <ul className="thumbnail-widget">
                                    <h3 className="widget-title" style={{ color: "white", fontWeight: "bolder", marginTop: "2px" }}>E-content <span></span></h3>

                                    <p>
                                        <FaFly /> Kathmandu, Nepal <br /> <br />
                                        <FaInternetExplorer /> www.econtentweb.com <br /> <br />
                                        <FaMonero /> info@econtentweb.com <br /><br />
                                        <FaPhoneSquareAlt /> 01-958385583
                                    </p>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Reference Link<span></span></h5>
                                    <ul className="thumbnail-widget">
                                        <p>
                                            <li>
                                                <div className="thumb-content"><a target="_blank" href="/aboutus">About Us</a></div> <br />
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a target="_blank" href="/careerwithus">Careers</a></div> <br />
                                            </li>
                                        
                                            <li>
                                                <div className="thumb-content"><a target="_blank" href="/contactus">Contact Us</a></div> <br />
                                            </li>
                                            <li>
                                                <div className="thumb-content"><a href="/terms">Terms & Conditions </a></div> <br />
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
                                            <input type="text" className="form-control" placeholder="Email address" name="email" value={this.state.email} onChange={this.changeHandler} required /><br />
                                            <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bolder" }} type="submit" className="btn " onClick={this.subscribe}> Subscribe<FaHandPointer /> </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">

                                <div className="widget no-box">
                                    <h5 className="widget-title">Contact Us<span></span></h5>

                                    <p><Link to="www.gmail.com" target="_blank" title="glorythemes">info@econtentweb.com</Link></p>
                                    <ul className="social-footer2">
                                        <Link title="youtube" target="_blank" to="https://www.youtube.com/"><FaYoutubeSquare style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
                                        <Link to="https://www.facebook.com/" target="_blank" title="Facebook"><FaFacebookSquare style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
                                        <Link to="https://twitter.com" target="_blank" title="Twitter"><FaTwitterSquare style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
                                        <Link title="instagram" target="_blank" to="https://www.instagram.com/"><FaInstagramSquare style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
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