import { Component } from 'react'
import { FaRegHandPointRight } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import wallpaper from './up3.jpg'

toast.configure()
class Uploadcontent extends Component {


    state = {
        title: "",
        ppt:"",
        video: "",
        description: "",
        Categories: "",
        Price: "",
        id: this.props.match.params.id,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }


    }
    fileHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        }
        )
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
    
        })
    }
 

    uploadhere = (e) => {
        e.preventDefault(); // prevents from reloading page
        const data = new FormData()
        data.append("title", this.state.title)
        data.append("video", this.state.video)
        data.append("categories", this.state.Categories)
        data.append("description", this.state.description)
        data.append("Price", this.state.Price)
        data.append("ppt",this.state.ppt)

        // alert(this.state.id)
        axios.post("http://localhost:90/content/insert/" + this.state.id, data)
            .then((response) => {
                // alert(response.data.message)
                // toast.success(response.data.message)
                toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 })
                // window.location.reload()
            })
            .catch((error) => {
                // alert(error)
                // toast(error.message)
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
                                            placeholder = "Write title"
                                            value={this.state.title}
                                            onChange={this.changeHandler} required />
                                    </div>
                                    <hr />
                                    <div className="col-lg-5">
                                        <label htmlFor="heading">Choose a thumbnail video</label>
                                        <input type="file"
                                            className="form-control"
                                            name="video"
                                            onChange={this.fileHandler} required />
                                    </div>
                                    <hr />
                                    <hr />
                                    <div className="col-lg-5">
                                        <label htmlFor="heading">Choose a ppt here</label>
                                        <input type="file"
                                            className="form-control"
                                            name="ppt"
                                            onChange={this.fileHandler} required />
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
                                            placeholder = "Write decription"
                                            onChange={this.changeHandler} required />
                                    </div>
                                </div>

                                <hr />
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="categories">Categories  &nbsp;&nbsp;&nbsp;</label>
                                        <select className="form-control" name="Categories" onChange={this.changeHandler}>
                                            <option selected>Select Categories </option>
                                            <option value="Math">math</option>
                                            <option value="Nepali">Nepali</option>
                                            <option value="English">English</option>
                                            <option value="Science">Science</option>
                                            <option value="Computer Science">Computer Science</option>
                                            <option value="Programming">Programming</option>
                                        </select>
                                    </div>
                                    <hr />

                                    <div className="col-lg-5">
                                        <label htmlFor="fullname">Cost</label>
                                       
                                     <input type="number" value={this.state.inputtxt}   className="form-control w-100" min="0" step="1" name="Price" value={this.state.Price} onChange={this.changeHandler}  placeholder="value of your content." required />
                                     NPR
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


















