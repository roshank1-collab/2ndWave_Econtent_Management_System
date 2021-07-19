import axios from "axios"
import { Component } from "react"
import { Link } from 'react-router-dom'
// import './Profile.css'

class Profile extends Component {

    state = {
        First_name: "",
        Last_name: "",
        Dob: "",
        gender: "",
        address: "",
        Phone_number: "",
        institution_name: "",
        Email: "",
        Profie_Picture: "",
        institution_ID: "",
        Password: "",
        id: this.props.match.params.id,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    //load with content
    componentDidMount() {
        axios.get('http://localhost:90/user/singleuser/' + this.state.id, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    First_name: response.data.data[0].First_name,
                    Last_name: response.data.data[0].Last_name,
                    Dob: response.data.data[0].Dob,
                    gender: response.data.data[0].gender,
                    address: response.data.data[0].address,
                    Phone_number: response.data.data[0].Phone_number,
                    institution_name: response.data.data[0].institution_name,
                    Email: response.data.data[0].Email,
                    Password: response.data.data[0].Password,
                    Profie_Picture: response.data.data[0].Profie_Picture,
                    institution_ID: response.data.data[0].institution_ID
                })
            }).catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "10px" }}>
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img className="card-img-top" src={"http://localhost:90/" + this.state.Profie_Picture} alt="Image Loading...." className="rounded-circle" width={150} style={{ width: '20rem' }} />
                                        <div className="mt-3">
                                            <h4>{this.state.First_name} {this.state.Last_name}</h4>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img className="card-img-top" src={"http://localhost:90/" + this.state.institution_ID} alt="Image Loading...." className="rounded-circle" width={150} style={{ width: '20rem' }} />
                                        <div className="mt-3">
                                            <h6>Institution Name</h6>
                                            <h2>{this.state.institution_name}</h2>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex flex-column align-items-center text-center">
                                    <Link to={'/profileupdate/' + this.state.id}>
                                        <button className="btn btn-success">Update</button>
                                    </Link>

                                    <button className="btn btn-danger" style={{ marginTop: "10px", marginBottom: "10px" }}>Delete Account</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.First_name}
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Last_name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">DOB</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Dob}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Phone_number}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.address}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Gender</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.gender}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Institution Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.institution_name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Password</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.Password}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Website Markup</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>One Page</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Mobile Template</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Backend API</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Website Markup</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>One Page</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Mobile Template</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <small>Backend API</small>
                                            <div className="progress mb-3" style={{ height: 5 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
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

export default Profile;