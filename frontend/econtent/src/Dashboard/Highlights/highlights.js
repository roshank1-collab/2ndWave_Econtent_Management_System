import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { toast } from 'react-toastify'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
toast.configure();




export default class Highlight extends Component {
    state = {
        channels: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        rate: "",
        ratedtopersonid: "",
        previousratednumber: ""
    }

    ratingChanged = (id, newRating) => {
        // this.state.ratedtopersonid = id
        this.setState({
            ratedtopersonid: id
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
            url: "http://localhost:90/ratingchannel/" + id,
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
            url: "http://localhost:90/ratingchannel/update/" + id,
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


    //load initallly with saved data
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

        axios.get('http://localhost:90/getrating/' + localStorage.getItem('ratedtopersonid'), this.state.config)
            .then((responsee) => {
                console.log("get responseeeee")
                console.log(responsee)
                this.setState({
                    previousratednumber: responsee.data.RatedNumber
                })
            })
            .catch((err) => {
                console.log(err.responsee)
            })
        // axios({
        //     method: 'get',
        //     url: "http://localhost:90/getrating/" + this.state.ratedtopersonid,
        //     headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        // }).then((response) => {                  
        //     this.setState({
        //         rate: response.data
        //     })
        //     toast.error(this.state.rate)
        // }).
        //     catch((err) => {
        //         console.log(err.response)
        //     })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            // fade: true,
            // cssEase: 'linear',
            arrows: true,
            slidesToScroll: 1,
            centerMode: true,
            // adaptiveHeight: true,
            // variableWidth: true,
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll
                            : 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container-fluid" style={{ marginTop: "100px", marginBottom: "100px" }}>
                <Button style={{ fontFamily: 'Arial (sans-serif)', backgroundColor: '#BF3A89', border: 'none' }}> Highlights</Button>
                <Slider {...settings} >
                    {
                        this.state.channels.map((items) => {
                            return (
                                <div>
                                    <Card style={{ width: '12rem', height: 'auto', marginTop: '10px', textAlign: 'center' }}>
                                        <Card.Img
                                            variant="top"
                                            src={"http://localhost:90/" + items.Profie_Picture} alt="Image Loading...." style={{ borderRadius: '50%', border: '2px groove darkblue', width: '8rem', height: '8rem', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '4px' }}
                                        />
                                        <Card.Body>
                                            <Card.Text style={{ fontSize: '15px', fontWeight: 'bolder' }}>{items.First_name}</Card.Text>
                                            <Card.Text style={{ fontSize: '12px' }}>
                                            </Card.Text>
                                            <ReactStars
                                                // value='3.5'
                                                count={5}
                                                onChange={this.ratingChanged.bind(this, items._id)}
                                                size={24}
                                                isHalf={true}
                                                a11y = {true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                                style={{ marginRight: 'auto', marginLeft: 'auto', display: 'block', textAlign: 'center' }}
                                            />
                                            {/* <div className="col-sm-9 text-secondary">
                                                <label>Previous rated : {items._id}</label>
                                            </div> */}
                                            {/* <p>
                                                {this.state.previousratednumber}
                                            </p> */}
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div >
        );
    }
}