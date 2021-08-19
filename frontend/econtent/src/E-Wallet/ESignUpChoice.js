import { Component } from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class ESignUpChoice extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <Link to="/eregister">
                                    <Button variant="primary" style={{
                                        width: "464px", height: "456.33px", fontSize: "50px", backgroundImage: "linear-gradient(#C04848, #480048)"
                                    }}
                                    >
                                        Sign Up with Current Credentails
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <Button variant="primary" style={{
                                    width: "464px", height: "456.33px", fontSize: "50px", backgroundImage: "linear-gradient(#C04848, #480048)"
                                }}>
                                    Sign Up New Credentails
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <Link to="/ewallet">
                                    <Button variant="primary" style={{
                                        width: "464px", height: "456.33px", fontSize: "50px", backgroundImage: "linear-gradient(#C04848, #480048)"
                                    }}
                                    >
                                        SignIn to E-Wallet
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}