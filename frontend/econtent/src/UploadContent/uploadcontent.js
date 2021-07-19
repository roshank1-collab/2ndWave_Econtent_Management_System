import { Component } from "react"
import '../App.css'
import { Link } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import axios from 'axios'
class UploadContent extends Component {
    state = {
        channels: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    upload = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/content/insert", this.state.config)
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {
                console.log(error.response)
            })


    }
    render() {

        return (

            <section className="Form my-4 mx-5 pt-5 pb-5">
                <div className="container">
                    <div className="row no-gutters shadow" style={{ background: 'white', borderRadius: '3px' }}>

                        <div className="col-lg-4"></div>

                        <div>



                        </div>
                    </div>

                </div>


            </section >
        )
    }
}

export default UploadContent;