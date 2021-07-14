import { Component } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Subscribe from "./Channels/Subscribe";

class Dashboard extends Component {
    render() {
        return (
            <Subscribe/>
        )
    }
}

export default Dashboard;