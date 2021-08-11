import { Component } from "react"
import Subscribe from "./Subscribe/Subscribe";
import DashboardUpperPart from "./DashboardUpperPart/DashboardUpperPart";
import Highlight from "./Highlights/highlights";
import Popularcontent from "./PopularContent/popularcontent";

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <DashboardUpperPart /> 
                <Highlight/>   
                <Popularcontent/>             
                <Subscribe /> 
                
                       
            </div>

        )
    }
}

export default Dashboard;