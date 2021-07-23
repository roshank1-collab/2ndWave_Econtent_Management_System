import React from 'react'
import { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import axios from 'axios'
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
                    {
                        this.state.alldata.map((item) => {
                            return (
                                <Card style={{  width: '310px', margin: '10px'  }}>
                                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                                        <Button className="mb-3" style={{ backgroundColor: '#BF3A89', border: 'none' }} variant="primary">BUY Now</Button>
                                    </Card.Body>
                                </Card>
                            )

                        })
                    }

                </div>

            </div>
        )
    }

}

export default Category