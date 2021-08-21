import { Component } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SeeSubscription extends Component {
    state = {
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        SeeSubscriptionList: []
    }

    componentDidMount() {
        axios.get("http://localhost:90/subscribe", this.state.config)
            .then((response) => {
                this.setState({
                    SeeSubscriptionList: response.data.data
                })
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <center style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <h1>
                            People who have subscribed you
                        </h1>
                    </center>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>GoTo</th>
                            </tr>
                        </thead>
                        {
                            this.state.SeeSubscriptionList.map((items) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{items.SubscribeBy_Name}</td>
                                            <td>{items.SubscribeBy_Email}</td>
                                            <td>
                                                <button>
                                                    <Link to={'/viewuser/' + items.SubscribeBy_Userid}>
                                                        GoTo
                                                    </Link>
                                                </button>
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