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
const ratingChanged = (newRating) => {
    console.log(newRating);
};
export default class Highlight extends Component {
    state = {
        channels: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
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
        axios.post("http://localhost:90/channel/subscribe/" + id, {}, this.state.config)
            .then((response) => {
                console.log(response)
                if (response.data.statusOfSubscription === "Subscribed Successfully") {
                    toast.success('Subscribed', { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 })
                    // alert("Subscribed")
                    // window.location.reload(true);
                }
                else if (response.data.statusOfSubscription === "You have already Subscribed this user") {
                    toast.error('Already Subscribed', { position: toast.POSITION.TOP_right, autoClose: 1000 })
                }
            })
            .catch((error) => {
                console.log(error.response)
            })
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
            <div className="container" style={{ marginTop: "100px", marginBottom: "100px" }}>
                <Button style={{ fontFamily: 'Arial (sans-serif)',backgroundColor:'#BF3A89', border:'none' }}> Highlights</Button>
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
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                                style={{marginRight:'auto', marginLeft:'auto', display:'block', textAlign:'center'}}
                                            />,
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