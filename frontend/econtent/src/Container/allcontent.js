import axios from "axios"
import { Component } from "react"
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { Button } from 'react-bootstrap'
// import './Profile.css'
import ReactPlayer from 'react-player'
import { toast } from "react-toastify"

toast.configure()

const userid = localStorage.getItem("userid")

class Allcontent extends Component {

    state = {
        contents: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
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
            <div className="container" style={{ marginTop: "10px", marginBottom:'10px' }}>
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
                                      <hr/>

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