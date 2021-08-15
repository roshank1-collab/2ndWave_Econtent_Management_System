import axios from "axios"
import { Component } from "react"
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { Button } from 'react-bootstrap'
// import './Profile.css'
import ReactPlayer from 'react-player'
import { toast } from "react-toastify"
import ReactStars from "react-rating-stars-component";
toast.configure()

const userid = localStorage.getItem("userid")

class Allcontent extends Component {

    state = {
        contents: [],
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

        axios.get('http://localhost:90/content/all/')
            .then((response) => {
                console.log(response)
                this.setState({
                    contents: response.data.ContentData
                })
            })
            .catch((err) => {
                alert(err)

            })
    }

    singlecontentbuy = (id) => {
        window.location.href = "/buycontent/" + id
    }



    render() {
        return (
            <div className="container" style={{ marginTop: "10px", marginBottom: '10px' }}>
                <div className="row">
                    {
                        this.state.contents.map((items) => {
                            return (
                                <div className="card" style={{ width: '304px', marginLeft: '20px', marginTop: '5px' }}>
                                    <ReactPlayer width='250xp' height='250px' controls
                                        url='https://youtu.be/7sDY4m8KNLc'
                                    />
                                    {/* <img className="card-img-top" src={"http://localhost:90/" + items.video} alt="Image Loading...." style={{ width: '250xp', height: '250px', background: "red" }} /> */}
                                    <div className="card-body">
                                        <i><h3 className="card-title"> {items.heading}</h3></i><br />
                                        <label>Description</label>
                                        <p><h5>{items.content_description}</h5></p>
                                        <hr />
                                        <label>Genre</label>
                                        <p><h5>{items.categories}</h5></p>
                                        <hr />
                                        <ReactStars
                                            // value='3.5'
                                            count={5}
                                            onChange={this.ratingChanged.bind(this, items._id)}
                                            size={24}
                                            isHalf={true}
                                            a11y={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                            style={{ marginRight: 'auto', marginLeft: 'auto', display: 'block', textAlign: 'center' }}
                                        />
                                        <Button className="btn btn-danger-gradiant mt-3  border-0 px-3 py-2" style={{ border: 'none', backgroundImage: "linear-gradient(#C04848, #480048)" }} onClick={this.singlecontentbuy.bind(this, items._id)}>BUY Now</Button>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>





        )
    }

}

export default Allcontent;