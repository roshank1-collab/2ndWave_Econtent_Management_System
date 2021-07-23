import { Component } from 'react';
import {Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWindows } from 'react-icons/fa';
toast.configure()



class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  
}

changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

submitMessage = (e) => {
    e.preventDefault(); // prevents from reloading page
    axios.post("http://localhost:90/contact/insert", this.state)
        .then(
            (response) => {
              console.log(response)
                if (response.data.message == "Sent") {
               
                  toast.success(response.data.message)
                  
                  window.location.reload()
                }
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
            <div className="contact3 py-5 container-fluid">
  <div className="row no-gutters">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card-shadow">
            <img src="../images/contact.png" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6 mt-5">
          <div className="contact-box ml-3">
            <h1 className="font-weight-light mt-2">Quick Contact</h1>
            <form className="mt-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.changeHandler} placeholder="name" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="email address" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" name="phone" value={this.state.phone} onChange={this.changeHandler} placeholder="phone" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea className="form-control" rows="5" name="message" value={this.state.message} onChange={this.changeHandler} placeholder="message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2" onClick={this.submitMessage}><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card mt-4 border-0 mb-4">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail pl-0">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                  </div>
                  <div className="">
                    <h6 classNameName="font-weight-medium">Address</h6>
                    <p className="">Koteswar, Bagmati
                      <br/> Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Phone</h6>
                    <p className="">01-93939393
                      <br/> 01-93939393</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Email</h6>
                    <p className="">
                      info@econtent.com
                      <br/> www.econtent.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


          
        )
    }
}

export default ContactUs;
