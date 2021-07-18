import { Component } from "react"
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import axios from 'axios'
import Subscribe from "./Channels/Subscribe";
import DashboardUpperPart from "./DashboardUpperPart";
import Footer from "../Footer/footer"
=======
import Subscribe from "./Subscribe/Subscribe";
import DashboardUpperPart from "./DashboardUpperPart/DashboardUpperPart";
>>>>>>> bcaef2794d2b46daaf500239ae6a3721210a1d6c

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