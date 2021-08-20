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
    message: "",
    
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  showErrorMessage(element){
    document.getElementById(element).classList.remove("hidden"); 
    setTimeout(() => {
      document.getElementById(element).classList.add("hidden"); 
    }, 3000);
  }

  handleValidation(){
    let formIsValid=true;
      if(!this.state.name){
        this.showErrorMessage('nameError');   
        formIsValid=false;
      }

      if(!this.validateEmail(this.state.email)){
        this.showErrorMessage('emailError');   
        formIsValid=false;
      }

      if(!this.state.subject){
        this.showErrorMessage('subjectError');   
        formIsValid=false;
      }

      if(!isFinite(String(this.state.phone))){
        this.showErrorMessage('phoneError');   
        formIsValid=false;
      }
      
      if(!this.state.message){
        this.showErrorMessage('messageError');
        formIsValid=false;
      }     
      return formIsValid; 
    }

     validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

  submitMessage = (e) => {
    e.preventDefault(); // prevents from reloading page
    if(this.handleValidation()===false){
      return false;
    }
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
              <img src="../images/contact1.jpg" style={{ marginTop:'5px',height:"500px"}}/>
            
              <h4 style={{marginTop:'4%'}}><span className='purplecolor'>Let us begin a </span><span className="pinkcolor">conversation</span></h4>
             </div>
             <form>
               <div className="row" style={{marginTop:'10px'}}>
                 <div className="col-md-4">
                 <input className="form-control" required="true" type="text" name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name" />
                   <span style={{color:"red"}} id="nameError" ref="nameError" className="hidden">Please enter name</span>
                 </div>
                 <div className="col-md-4">
                 <input className="form-control" type="email" required="true" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email address" />
                 <span style={{color:"red"}} id="emailError" className="hidden">Please enter valid email</span>
                 </div>
               </div>
               <div className="row" style={{marginTop:'10px'}}>
                 <div className="col-md-4">
                 <input className="form-control" type="text" name="phone" value={this.state.phone} onChange={this.changeHandler} placeholder="Phone" />
                 <span style={{color:"red"}} id="phoneError" className="hidden">Please enter valid phone number</span>
                 </div>
                 <div className="col-md-4">
                 <input className="form-control" type="text" name="subject" value={this.state.subject} onChange={this.changeHandler} placeholder="subject" />
                 <span style={{color:"red"}} id="subjectError" className="hidden">Please enter subject</span>
                 </div>
                 <div class="form-group col-md-8">
                  <textarea className="form-control mt-3" id="message" rows="3" placeholder = "message" name="message" value={this.state.message} onChange={this.changeHandler}></textarea>
                  <span style={{color:"red"}} id="messageError" className="hidden">Please enter message</span>
                </div>
               </div>
               <button type="submit" style={{background:'rgb(191, 58, 137)'}} className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2" onClick={this.submitMessage}><span> Send Message</span></button>

             </form>
             <div className="row" style={{marginTop:'25px'}}>
              <div className="map" style={{width:'65%',float:'left'}}>
              <iframe style={{border:"0", width:"100%",height:"400px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.471317566644!2d85.3302047!3d27.7059272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74ebef82ad0e5c15!2sSoftwarica+College+Of+IT+%26+E-Commerce!5e0!3m2!1sen!2snp!4v1542042644421"></iframe>
              </div>
              <div className="map" style={{width:'35%',float:'right'}}>
              <h5><span className='purplecolor'>E-</span><span className="pinkcolor">content</span></h5>
               <span style={{fontWeight:'bold',color:'#000'}}>Contact address </span>: <span style={{color:'#000'}}>Lazimpat, Kathmandu </span><br></br>
                <span style={{fontWeight:'bold',color:'#000'}}>Phone number</span>: <span style={{color:'#000'}}> +977-015556256 </span><br></br>
                <span style={{fontWeight:'bold',color:'#000'}}>E-mail us</span>: <span style={{color:'#000'}}> contact@gmail.com </span><br></br>
                <span style={{fontWeight:'bold',color:'#000'}}>Working hours: </span>: <span style={{color:'#000'}}>Sun to fri: 10 am - 4 pm </span>
              </div>
             </div>
              
             
              <div className="col-lg-12 shadow mt-3">
                <div className="card mt-4 border-0 mb-4">
                  <div className="row">
                    {/* <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail pl-0">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                        </div>
                        <div className="">
                          <h6 classNameName="font-weight-medium">Address</h6>
                          <p className="">Koteswar, Bagmati
                            <br /> Kathmandu, Nepal</p>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Phone</h6>
                          <p className="">01-93939393
                            <br /> 01-93939393</p>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Email</h6>
                          <p className="">
                            info@econtent.com
                            <br /> www.econtent.com
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
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
