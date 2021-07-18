import { Component } from 'react'
import { FaAngellist,FaNewspaper,FaServicestack,FaTelegram,FaSignInAlt,FaCartPlus,FaUsers,FaRibbon,FaInfo, FaShareSquare,  FaPlusCircle, FaRegEye, FaListUl, FaMedapps, FaTelegramPlane,FaUserCog,FaCaretRight,FaRegSmile,FaArrowAltCircleRight,FaRegHandPointRight } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class Uploadcontent extends Component {

    state = {
        Heading: "",
        Video: "",
        Content_description: "",
        Categories: "",
        Price: "",
        

    }
    fileHandler = (e) => {
        this.setState({
            Video: e.target.files[0],
            Categories: e.target.files[0]
        }
        )
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitUser = (e) => {
        e.preventDefault(); // prevents from reloading page
        const data = new FormData()
        data.append("Heading", this.state.Heading)
        data.append("Video", this.state.Video)
        data.append("Content_description", this.state.Content_description)
        data.append("Price", this.state.price)
       


        axios.post("http://localhost:90/User/Uploadcontent", data)
            .then(
                (response) => {
                    toast(response.data.message)
                }
            )
            .catch(
                (error) => {
                    toast(error.message)
                }
            )

    }


    render() {
        return (
            <section className="Form my-4 mx-5 pt-5 pb-5">
                <div className="container">
                    <div className="row no-gutters shadow" style={{ background: '#f2e4fd', borderRadius: '3px' }}>
                        <div className="col-lg-5">

                        <img src="./images/up2.jpg" alt="Uploadcontent" className="img-fluid" style={{ marginTop: '100px' }} /> 

                        </div>
                        <div className="col-lg-7"> 


                            <h1 className="font-weight-bold py-4" style={{ color: "#a018a0" }}>UploadContent</h1>
                            <h5 style={{color:"black",fontSize:"18px"}}>Fill all the details of Your content</h5>
                            <form className="py-4">
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="fullname">Heading</label>
                                        <input type="text" className="form-control" 
                                        id="heading" 
                                        name="heading" 
                                        value={this.state.heading}
                                         onChange={this.changeHandler} required />
                                    </div>
                                    <div className="col-lg-5">
                                        <label htmlFor="heading">Video</label>
                                        <input type="file" 
                                        className="form-control"
                                         id="video" 
                                         name="video" 
                                         value={this.state.video}
                                          onChange={this.changeHandler} required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="content">content_description</label>   <input type="text" className="form-control" 
                
                                        id="content_description" 
                                        name="content_description" 
                                        value={this.state.heading}
                                         onChange={this.changeHandler} required />
                                    </div>
                                   
                                </div>


                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="categories">categories </label>
                                        <input type="file" placeholder="Categories" name="Categories" onChange={this.fileHandler} required />
                                    </div>
                                    <div className="col-lg-5">
                                        <label htmlFor="fullname">Price</label>
                                        <input type="text" className="form-control" id="Price" name="Price" value={this.state.Price} onChange={this.changeHandler} required />
                                    </div>
                                </div>

                                

                               
                                
                                <div className="col-lg-7 py-4">
                                    <button style={{backgroundColor:"#51227F",color:"#FFFFFF",fontWeight:"bold", marginTop:"5px"}} id="UploadContent" type="submit" onClick={this.submitUser} className="btn btn-primary"> UploadContent <FaRegHandPointRight/> </button>
                                </div>
                            </form>



                        </div>

                    </div>
                </div>


            </section>


        )
    }
}
export default Uploadcontent


















