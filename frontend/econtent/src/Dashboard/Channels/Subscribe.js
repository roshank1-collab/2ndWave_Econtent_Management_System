import { Component } from "react"
import './Subscribe'
import axios from 'axios'
import { Link } from "react-router-dom";


class Subscribe extends Component {
    state = {
        channels: []
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
        axios.post("http://localhost:90/channel/susbcribe/" + id)
            .then((response) => {
                console.log(response)
                if (response.data.message == "Product deleted") {
                    window.location.reload(true);
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
                                        <img className="card-img-top" src={"http://localhost:90/" + items.institution_ID.replace("\\", "/")} alt="Image Loading...." style={{ width: '50xp', height: '50px' }} />
                                        <div className="card-body">
                                            <i><h5 className="card-title"> {items.First_name}</h5></i><br />
                                            <p><label>Last name : </label> {items.Last_name}</p>
                                            <p><label>institution_name : </label> {items.institution_name}</p>
                                            <Link to='/updateproduct'><p><button type="button" className="btn btn-danger"  onClick={this.subscribecount.bind(this, items._id)}>Subscribe</button></p></Link>
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