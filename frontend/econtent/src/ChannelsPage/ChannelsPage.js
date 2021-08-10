import { Card, Button, Col, Row } from "react-bootstrap";
import axios from 'axios'
import { Component } from "react";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Pagination from 'react-bootstrap/Pagination'
toast.configure();

class ChannelsPage extends Component {

    state = {
        channels: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    //load initallly with content
    componentDidMount() {
        axios.get('http://localhost:90/channel/all/' + localStorage.getItem('userid'))
            .then((response) => {
                // console.log(response)
                this.setState({
                    channels: response.data.allchannel
                })
            })
            .catch((err) => {
                // console.log(err.response)
            })
    }

    subscribecount = (id) => {
        axios.post("http://localhost:90/channel/subscribe/" + id, {}, this.state.config)
            .then((response) => {
                // console.log(response)
                localStorage.setItem('statusOfSubscription', response.data.statusOfSubscription)
                // console.log(localStorage.getItem('statusOfSubscription'))

                var statusOfSubscription = localStorage.getItem('statusOfSubscription')
                // alert(localStorage.getItem('statusOfSubscription'))

                if (response.data.statusOfSubscription === "Subscribed Successfully") {
                    toast.success('Subscribed', { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 })
                    // alert("Subscribed")
                    // window.location.reload(true);
                }
                else if (response.data.statusOfSubscription === "You have already Subscribed this user") {
                    toast.error('Already Subscribed', { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 })
                }
            })
            .catch((error) => {
                console.log(error.response)
            })


    }


    render() {

    

        return (
            <div className="container-fluid" style={{ background: "white" }}>
                <center>
                    <h3 style={{ color: "#51127F", marginTop: "40px" }}> All Channels</h3>
                </center>

                <div className="row">
                    {
                        this.state.channels.map((items) => {
                            return (
                                <div className="card" style={{ width: '13rem',height:'auto', marginTop:'5px', marginLeft: '5px', marginTop:'5px', marginBottom:'5px' }}>
                                <img className="card-img-top" src={"http://localhost:90/" + items.Profie_Picture} className="img-fluid" alt="Image Loading...." style={{ width:'13rem', height: '150px', marginLeft:'0px' }} />
                                <div className="card-body">
                                    <p style={{fontSize:'16px',  fontWeight:'bolder'}}> {items.First_name}</p>
                                    <p style={{fontSize:'12px'}}>{items.institution_name}</p>
                                    <br/>
                                    <Button variant="outline-danger btn-sm" className="btn" onClick={this.subscribecount.bind(this, items._id)}>Subscribe
                                    </Button>
                                    <hr />
                                    <Link to={'/viewuser/' + items._id}>
                                        <Button variant="outline-primary" className="btn btn-sm">View
                                        </Button>
                                    </Link>

                                </div>
                            </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ChannelsPage;