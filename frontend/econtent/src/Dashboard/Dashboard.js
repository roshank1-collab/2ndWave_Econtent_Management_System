import { Component } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Subscribe from "./Channels/Subscribe";
import DashboardUpperPart from "./DashboardUpperPart";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardUpperPart />
                <Subscribe />
            </div>

        )
    }
}

export default Dashboard;