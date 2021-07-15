import { Component } from "react"
import './Subscribe'
import axios from 'axios'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'
toast.configure();

class Subscribe extends Component {
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
        axios.post("http://localhost:90/channel/susbcribe/" + id, {}, this.state.config)
            .then((response) => {
                console.log(response)
                if (response.data.message == "Subscribed Successfully") {
                    toast.success('Subscribed', { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
                    // alert("Subscribed")
                    // window.location.reload(true);
                }
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h4>You may wanna see</h4>
                    <div className="row">
                        {
                            this.state.channels.map((items) => {
                                return (
                                    <div className="card" style={{ width: '20rem', margin: '10px' }}>
                                        <img className="card-img-top" src={"http://localhost:90/" + items.Profie_Picture} alt="Image Loading...." style={{ width: '250xp', height: '250px' }} />
                                        <div className="card-body">
                                            <center>
                                                <i><h5 className="card-title"> {items.First_name}</h5></i><br />
                                            </center>
                                            <p><label>Last name : </label> {items.Last_name}</p>
                                            <p><label>institution_name : </label> {items.institution_name}</p>
                                            <center>
                                                <p>
                                                    <button type="button" className="btn btn-danger" onClick={this.subscribecount.bind(this, items._id)}>Subscribe</button>
                                                </p>
                                            </center>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Subscribe;