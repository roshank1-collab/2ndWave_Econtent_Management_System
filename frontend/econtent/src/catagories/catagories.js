import React from 'react'
import { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import axios from 'axios'
class Category extends Component {
    state = {
        item: this.props.match.params.item,
        title: "",
        video: "",
        description: "",
        Categories: "",
        Price: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }


    }
    componentDidMount() {
        axios.get('http://localhost:90//content/catagories/' + this.state.item).then(
            (response) => {
                console.log(response.data)
            }
        ).catch(
            error => {

            }
        )
    }


    render() {
        return (
            <>
                <section className="Form my-4 mx-5 pt-5 pb-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>{this.state.item}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button className="mb-3" style={{ backgroundColor: '#BF3A89', border: 'none' }} variant="primary">BUY Now</Button>
                        </Card.Body>
                    </Card>
                </section>
            </>
        )
    }

}

export default Category