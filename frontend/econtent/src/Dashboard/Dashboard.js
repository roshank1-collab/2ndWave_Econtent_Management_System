import { Component } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Subscribe from "./Channels/Subscribe";
import DashboardUpperPart from "./DashboardUpperPart";
import Footer from "../Footer/footer"

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardUpperPart />                
                <Subscribe />
                <Footer/>
            </div>

        )
    }
}

export default Dashboard;