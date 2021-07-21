import { Component } from 'react'
import { FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaCartPlus, FaUsers, FaRibbon, FaInfo, FaShareSquare, FaPlusCircle, FaRegEye, FaListUl, FaMedapps, FaTelegramPlane, FaUserCog, FaCaretRight, FaRegSmile, FaArrowAltCircleRight, FaRegHandPointRight } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown } from 'react-bootstrap'
import wallpaper from './up2.jpg'

toast.configure()
class Uploadcontent extends Component {

    state = {
        title: "",
        file: "",
        description: "",
        Categories: "",
        Price: "",


    }
    fileHandler = (e) => {
        this.setState({
            file: e.target.files[0]
        }
        )
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    uploadhere = (e) => {
        e.preventDefault(); // prevents from reloading page
        const data = new FormData()
        data.append("title", this.state.title)
        data.append("file", this.state.file)
        data.append("Categories", this.state.Categories)
        data.append("description", this.state.description)
        data.append("price", this.state.price)

        alert()
        axios.post("http://localhost:90/content/insert", data)
            .then((response) => {
                toast(response.data.message)
            })
            .catch((error) => {
                toast(error.message)
            })
    }

    render() {
        return (
            <section className="Form my-4 mx-5 pt-5 pb-5">
                <div className="container">
                    <div className="row no-gutters shadow" style={{ background: '#f2e4fd', borderRadius: '3px' }}>
                        < div className="col-lg-6">

                            <img src={wallpaper} alt="Loading Image..." className="img-fluid" style={{ marginTop: '10px' }} />

                        </div>
                        <div className="col-lg-6">


                            <h1 className="font-weight-bold py-4" style={{ color: "#a018a0" }}>Upload</h1>
                            <h5 style={{ color: "black", fontSize: "18px" }}>Fill all the details of Your content</h5>
                            <form className="py-4">
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="fullname">Title</label>
                                        <input type="text" className="form-control"
                                            id="heading"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.changeHandler} required />
                                    </div>
                                    <hr />
                                    <div className="col-lg-5">
                                        <label htmlFor="heading">Choose a File here</label>
                                        <input type="file"
                                            className="form-control"
                                            id="video"
                                            name="file"
                                            value={this.state.file}
                                            onChange={this.changeHandler} required />
                                    </div>
                                    <hr />
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="content">Description</label>
                                        <input type="text" className="form-control"
                                            id="content_description"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.changeHandler} required />
                                    </div>
                                </div>

                                <hr />
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="categories">Categories  &nbsp;&nbsp;&nbsp;</label>
                                        {/* <input type="text" placeholder="Categories" name="Categories"
                                            value={this.state.Categories}
                                            onChange={this.changeHandler} required /> */}
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                Dropdown Button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item value={this.state.Categories}
                                                    onChange={this.changeHandler}>Entertainment</Dropdown.Item>
                                                <Dropdown.Item value={this.state.Categories}
                                                    onChange={this.changeHandler}>Teacher</Dropdown.Item>
                                                <Dropdown.Item value={this.state.Categories}
                                                    onChange={this.changeHandler}>Student</Dropdown.Item>
                                                <Dropdown.Item value={this.state.Categories}
                                                    onChange={this.changeHandler}>Motivation</Dropdown.Item>
                                                <Dropdown.Item value={this.state.Categories}
                                                    onChange={this.changeHandler}>Relax</Dropdown.Item>
                                                <Dropdown.Item value={this.state.Categories}
                                                    onChange={this.changeHandler}>Music</Dropdown.Item>
                                                <Dropdown.Item value={this.state.Categories}
                                                    onChange={this.changeHandler}>Physics</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <hr />

                                    <div className="col-lg-5">
                                        <label htmlFor="fullname">Cost</label>
                                        <input type="text" className="form-control" id="Price" name="Price" value={this.state.Price} onChange={this.changeHandler} placeholder="value of your content." required />
                                    </div>
                                </div>
                                <hr />
                                <div className="col-lg-7 py-4">
                                    <button style={{ backgroundColor: "#51227F", color: "#FFFFFF", fontWeight: "bold", marginTop: "5px" }} id="UploadContent" type="submit" onClick={this.uploadhere} className="btn btn-primary"> Upload <FaRegHandPointRight /> </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>


            </section >


        )
    }
}
export default Uploadcontent


















