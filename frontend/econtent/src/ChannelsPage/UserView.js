import { Component } from "react";
import ReactPlayer from 'react-player'
import { Button } from 'react-bootstrap'
import axios from "axios"
import { Link } from 'react-router-dom'


export default class UserView extends Component {

    state = {
        id: this.props.match.params.id,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        allItem: []
    }
    //load with content
    componentDidMount() {
        axios.get('http://localhost:90/content/single/' + this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    allItem: response.data.data
                })
            })
            .catch((err) => {
                alert(err)
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.allItem.map((items) => {
                            return (
                                <div className="card" style={{ width: '310px', margin: "10px" }}>
                                    <ReactPlayer width='250xp' height='250px' controls
                                        url='https://youtu.be/7sDY4m8KNLc'
                                    />
                                    {/* <img className="card-img-top" src={"http://localhost:90/" + items.video} alt="Image Loading...." style={{ width: '250xp', height: '250px', background: "red" }} /> */}
                                    <div className="card-body">
                                        <i><h3 className="card-title"> {items.heading}</h3></i><br />
                                        <label>Description</label>
                                        <p><h5>{items.content_description}</h5></p>
                                        <hr />
                                        <label>Genre</label>
                                        <p><h5>{items.categories}</h5></p>
                                        <Link to={'/buycontent/' + items._id}>
                                            <Button className="btn btn-danger-gradiant mt-3  border-0 px-3 py-2" style={{ border: 'none', backgroundImage: "linear-gradient(#C04848, #480048)" }} >BUY Now</Button>
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
