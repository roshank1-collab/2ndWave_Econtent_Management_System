import { Component } from "react"
import Subscribe from "./Subscribe/Subscribe";
import DashboardUpperPart from "./DashboardUpperPart/DashboardUpperPart";

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