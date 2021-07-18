import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'
import { toast } from 'react-toastify'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from "react-bootstrap";
import './Subscribe.css'
toast.configure();

export default class SimpleSlider extends Component {
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
        axios.post("http://localhost:90/channel/susbcribe/" + id, {}, this.state.config)
            .then((response) => {
                console.log(response)
                if (response.data.message == "Subscribed Successfully") {
                    toast.dark('Subscribed', { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
                    // alert("Subscribed")
                    // window.location.reload(true);
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
            slidesToShow: 4,
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
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll
                            : 2
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
            <div className="container" style={{ marginTop: "500px", marginBottom: "100px", padding: '10px' }}>
                <h2> Popular Channels</h2>
                <Slider {...settings} >
                    {
                        this.state.channels.map((items) => {
                            return (
                                <div>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img
                                            variant="top"
                                            src={"http://localhost:90/" + items.Profie_Picture} alt="Image Loading...." style={{ width: '100%' }}
                                        />
                                        <Card.Body>
                                            <Card.Title>{items.First_name}</Card.Title>
                                            <Card.Text>
                                                {items.institution_name}
                                            </Card.Text>
                                            <Button variant="outline-danger" className="btn" onClick={this.subscribecount.bind(this, items._id)}>Subscribe
                                            </Button>
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