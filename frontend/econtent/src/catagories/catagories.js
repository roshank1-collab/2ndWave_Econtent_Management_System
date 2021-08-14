import React from 'react'
import { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import axios from 'axios'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import ReactStars from "react-rating-stars-component";
toast.configure()

class Category extends Component {
    state = {


        alldata: [],
        item: this.props.match.params.item,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        rate: "",
        ratedtocontentid: "",
        previousratednumber: ""

    }

    ratingChanged = (contentid, newRating) => {
        // this.state.ratedtopersonid = id
        this.setState({
            ratedtocontentid: contentid
        })
        // localStorage.setItem('ratedtopersonid', id) 
        // console.log("ratedtopersonid")
        // console.log(this.state.ratedtopersonid)       
        this.state.rate = newRating
        var body = {
            rate: newRating
        }
        // toast.success(this.state.rate)
        // toast.error(id)        
        axios({
            method: "post",
            url: "http://localhost:90/ratingcontent/" + contentid,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
            data: body
        }
            // "http://localhost:90/ratingchannel/" + id, {}, this.state.config, newRating
        )
            .then((response) => {
                console.log(response)
                // toast.success(response.data.message, { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            })
            .catch((err) => {
                console.log(err.response)
                // toast.error({ err })
            })

        axios({
            method: "put",
            url: "http://localhost:90/ratingcontent/update/" + contentid,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
            data: body
        }
            // "http://localhost:90/ratingchannel/" + id, {}, this.state.config, newRating
        )
            .then((response) => {
                console.log(response)
                // toast.success(response.data.message, { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            })
            .catch((err) => {
                console.log(err.response)
            })
    };

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

    singlecontentbuy = (id) => {
        window.location.href = "/buycontent/" + id
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <center><h1>{this.state.item}</h1></center>
                    {
                        this.state.alldata.map((item) => {
                            return (
                                < Card className="cloudy-knoxville-gradient" style={{ width: '310px', margin: '10px', backgroundImage: "linear-gradient(#EFEFBB, #D4D3DD)" }}>
                                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                                    <ReactPlayer width='250xp' height='250px' controls
                                        url='https://youtu.be/7sDY4m8KNLc'
                                    />
                                    <Card.Body>
                                        <Card.Title><h3><center>{item.heading}</center></h3></Card.Title>
                                        <Card.Text>
                                            <label><b><i>Description : &nbsp;</i></b></label>
                                            {item.content_description}
                                        </Card.Text>
                                        <hr />
                                        <Card.Text>
                                            <label><b><i>Genre : &nbsp;</i></b></label>
                                            {item.categories}
                                        </Card.Text>
                                        <hr />
                                        <Card.Text>
                                            <label><b><i>Price : &nbsp;</i></b></label>
                                            {item.price}
                                        </Card.Text>
                                        <hr />

                                        <Card.Text>
                                            <label><b><i>Posted on : &nbsp;</i></b></label>
                                            {item.postedAt}
                                        </Card.Text>
                                    </Card.Body>
                                    <ReactStars
                                        // value='3.5'
                                        count={5}
                                        onChange={this.ratingChanged.bind(this, item._id)}
                                        size={24}
                                        isHalf={true}
                                        a11y={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                        style={{ marginRight: 'auto', marginLeft: 'auto', display: 'block', textAlign: 'center' }}
                                    />

                                    <Card.Body>
                                        <Button className="btn btn-danger-gradiant mt-3  border-0 px-3 py-2" style={{ border: 'none', backgroundImage: "linear-gradient(#C04848, #480048)" }} onClick={this.singlecontentbuy.bind(this, item._id)}>BUY Now</Button>
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