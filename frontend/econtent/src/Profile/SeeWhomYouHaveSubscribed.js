import { Component } from "react";
import { Table, Button } from "react-bootstrap";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
toast.configure()

export default class SeeWhomYouHaveSubscribed extends Component {
    state = {
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        TotalSubscribedToData: []
    }

    componentDidMount() {
        axios.get("http://localhost:90/subscribe", this.state.config)
            .then((response) => {
                this.setState({
                    TotalSubscribedToData: response.data.TotalSubscribedToData
                })
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    UnsubscribeProcess = (id) => {
        axios.delete('http://localhost:90/unsubscribe/' + id, this.state.config)
            .then(response => {
                toast.info(response.data.message)
                if (response.data.message == "Unsubscribed Successfully") {
                    window.location.href = "/subscribedByYou"
                }
            })
            .catch(err => {
                toast.errror(err.response)
            })


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <center style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <h1>
                            People you have subscribed
                        </h1>
                    </center>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>GoTo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            this.state.TotalSubscribedToData.map((items) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{items.SubscribeTo_Name}</td>
                                            <td>{items.SubscribeTo_Email}</td>
                                            <td>
                                                <center>
                                                    <Button variant="primary" >
                                                        <Link to={'/viewuser/' + items.SubscribeTo_Userid} style={{ color: "#ffffff" }}>
                                                            GetIn
                                                        </Link>
                                                    </Button>
                                                </center>
                                            </td>
                                            <td>
                                                <center>
                                                    <Button variant="danger" style={{ color: "#ffffff" }} onClick={this.UnsubscribeProcess.bind(this, items.SubscribeTo_Userid)}>
                                                        Unsubscribe
                                                    </Button>
                                                </center>
                                            </td>

                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </Table>
                </div>
            </div>
        )
    }
}