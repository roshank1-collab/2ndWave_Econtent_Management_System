import axios from "axios";
import { Component } from "react";
import { Table, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'
toast.configure()

class Buycontent extends Component {

    state = {
        id: this.props.match.params.id,
        alldata: [],
        userid: ""
    }

    componentDidMount() {
        axios.get('http://localhost:90/content/singleInfodata/' + this.state.id)
            .then((response) => {
                console.log(response)
                localStorage.setItem('itemselected', response.data.data._id)
                this.setState({
                    alldata: response.data.data,
                    userid: response.data.data.userid
                })
                // toast.success(localStorage.getItem('itemselected'))
                // toast.success(this.state.userid)
            })
            .catch((err) => {
                console.log(err.message)
                toast.error(err.message)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <center style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <h1>
                            Information
                        </h1>
                    </center>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.alldata.heading}</td>
                                <td>{this.state.alldata.categories}</td>
                                <td>{this.state.alldata.content_description}</td>
                                <td>{this.state.alldata.price}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>
                                    total amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.alldata.price}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                {/* <div className="row"> */}
                <Link to={"/paywithkhalti/" + this.state.userid} style={{ marginRight: "10px" }}>
                    <Button style={{ background: "#56328C", marginBottom: "16px", fontSize: "30px" }}>
                        Pay with Khalti
                    </Button>
                </Link>

                <Link to={"/paywithesewa/" + this.state.userid}>
                    <Button style={{ background: "#41A124", marginBottom: "16px", fontSize: "30px" }}>
                        Pay with E-Sewa
                    </Button>
                </Link>

                {/* </div> */}
            </div>
        )
    }
}

export default Buycontent;