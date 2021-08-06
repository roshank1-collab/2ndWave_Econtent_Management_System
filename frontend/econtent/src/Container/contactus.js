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
               
             </form>
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
