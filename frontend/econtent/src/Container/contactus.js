import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import Location from '../location/Location';
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
          if (response.data.message == "Your message has been sent successfully.") {

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
      <div className="contact3 py-2 container">
        <div className="row no-gutters">
          <div className="container shadow">
          <div className="row">
          <div className="col-md-12 contactus">
          <img src="../images/banner.jpg" style={{ marginTop:'5px' }}/>
            <h4 style={{marginTop:'5%'}}><span className='purplecolor'>Let us begin a </span><span className="pinkcolor">conversation</span></h4>
          </div>
          <form >
               <div className="row" style={{marginTop:'10px'}}>
                 <div className="col-md-4">
                 <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name" />
                 </div>
                 <div className="col-md-4">
                 <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email address" />
                 </div>
               </div>
               <div className="row" style={{marginTop:'10px'}}>
                 <div className="col-md-4">
                 <input className="form-control" type="text" name="phone" value={this.state.phone} onChange={this.changeHandler} placeholder="Phone" />
                 </div>
                 <div className="col-md-4">
                 <input className="form-control" type="text" name="subject" value={this.state.phone} onChange={this.changeHandler} placeholder="subject" />
                 </div>
                 <div class="form-group col-md-8">
                  <label for="message">Message</label>
                  <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
               </div>
               <button type="submit" style={{background:'rgb(191, 58, 137)'}} className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2" onClick={this.submitMessage}><span> Send Message</span></button>
             </form>
             <div className="row" style={{marginTop:'25px'}}>
             <div className="map" style={{width:'65%',float:'left'}}>
              <iframe style={{border:"0", width:"100%",height:"400px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.471317566644!2d85.3302047!3d27.7059272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74ebef82ad0e5c15!2sSoftwarica+College+Of+IT+%26+E-Commerce!5e0!3m2!1sen!2snp!4v1542042644421"></iframe>
              </div>             </div>
          </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <h4>We are here.</h4>
          </div>
          <div>
            <Location />
          </div>
        </div> */}
        {/* <Link to="/location">
          <button>We are here</button>
        </Link> */}

      </div>



    )
  }
}

export default ContactUs;
