import { Component } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Subscribe from "./Channels/Subscribe";
import DashboardUpperPart from "./DashboardUpperPart";
import SimpleSlider from "./Channels/SlickSlider";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardUpperPart />
                {/* <SimpleSlider/> */}
                <Subscribe />
            </div>

        )
    }
}

export default Dashboard;