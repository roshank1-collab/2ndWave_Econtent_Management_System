import React from 'react'
import { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import axios from 'axios'
import ReactPlayer from 'react-player'
class Category extends Component {
    state = {


        alldata: [],
        item: this.props.match.params.item,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }

    }
    componentDidMount() {
        axios.get('http://localhost:90/content/catagories/' + this.state.item).then(
            (response) => {
                this.setState({
                    alldata: response.data.catagories

                })
                console.log(this.state.alldata)
            }
        ).catch(
            error => {

            }
        )
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <center><h1>{this.state.item}</h1></center>
                    {
                        this.state.alldata.map((item) => {
                            return (
                                // this.state.alldata['categories']
                                < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', backgroundImage: "linear-gradient(#EFEFBB, #D4D3DD)" }}>
                                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                                    <ReactPlayer width='250xp' height='250px' controls
                                        url='https://youtu.be/7sDY4m8KNLc'
                                    />
                                    <Card.Body>
                                        <Card.Title>{item.heading}</Card.Title>
                                        <Card.Text>
                                            {item.content_description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Text>
                                            {item.price}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <Button className="btn btn-danger-gradiant mt-3  border-0 px-3 py-2" style={{ border: 'none', backgroundImage: "linear-gradient(#C04848, #480048)" }}>BUY Now</Button>
                                    </Card.Body>
                                </Card>
                            )

                        })
                    }

                </div>

            </div >
        )
    }

}

export default Category