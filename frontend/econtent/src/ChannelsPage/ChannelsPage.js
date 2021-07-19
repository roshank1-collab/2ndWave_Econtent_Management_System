import { Card, Button, Col } from "react-bootstrap";
import axios from 'axios'
import { Component } from "react";
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
                console.log(response)
                this.setState({
                    channels: response.data.allchannel
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    subscribecount = (id) => {
        axios.post("http://localhost:90/channel/subscribe/" + id, {}, this.state.config)
            .then((response) => {
                console.log(response)
                localStorage.setItem('statusOfSubscription', response.data.statusOfSubscription)
                console.log(localStorage.getItem('statusOfSubscription'))

                var statusOfSubscription = localStorage.getItem('statusOfSubscription')
                // alert(localStorage.getItem('statusOfSubscription'))

                if (response.data.statusOfSubscription === "Subscribed Successfully") {
                    toast.success('Subscribed', { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
                    // alert("Subscribed")
                    // window.location.reload(true);
                }
                else if (response.data.statusOfSubscription === "You have already Subscribed this user") {
                    toast.error('Already Subscribed', { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
                }
            })
            .catch((error) => {
                console.log(error.response)
            })


    }

    render() {

        // if (localStorage.getItem('statusOfSubscription') === "Subscribed Successfully") {
        //     var subscribeButtonChanged =
        //         <Button variant="outline-danger" className="btn">UnSubscribe
        //         </Button>
        // }
        // else if (localStorage.getItem('statusOfSubscription') === "You have already Subscribed this user") {
        //     var subscribeButtonChanged =
        //         <Button variant="outline-danger disabled" className="btn">UnSubscribe
        //         </Button>
        // }
        // else {
        //     <Button variant="outline-danger" className="btn" onClick={this.subscribecount.bind(this, items._id)}>Subscribe
        //     </Button>
        // }

        return (
            <div className="container" style={{ background: "white" }}>
                <center>
                    <h1 style={{ color: "#51127F", marginTop: "40px" }}>Channels</h1>
                </center>

                <div className="row">
                    {
                        this.state.channels.map((items) => {
                            return (
                                <div className="card" style={{ width: '310px', margin: '10px' }}>
                                    <img className="card-img-top" src={"http://localhost:90/" + items.Profie_Picture} alt="Image Loading...." style={{ width: '250xp', height: '250px' }} />
                                    <div className="card-body">
                                        <i><h4 className="card-title"> {items.First_name}</h4></i><br />
                                        <p><h5>{items.institution_name}</h5></p>
                                        <Button variant="outline-danger" className="btn" onClick={this.subscribecount.bind(this, items._id)}>Subscribe
                                        </Button>
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