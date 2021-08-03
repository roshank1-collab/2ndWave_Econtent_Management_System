import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React, { Component } from "react";

const mapStyles = {
    position: 'relative',
    width: '600px',
    height: '600px'
};

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        };
    }
    componentDidMount() {


        // finding out if a user's geolocation is available or not.
        if ("geolocation" in navigator) {
            console.log("Available")
        }
        else {
            console.log("Not Available")
        }
        // finding out if a user's geolocation is available or not.

        // //Get the current position of the user 
        // navigator.geolocation.getCurrentPosition(function (position) {
        //     console.log("Latitude is :", position.coords.latitude);
        //     console.log("Longitude is :", position.coords.longitude);
        // });
        // //Get the current position of the user 



        // to get the complete position of the user with error handling
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position)
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
        // to get the complete position of the user with error handling
    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 27.753103853811897,
                        lng: 85.3258675397603
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'We are here.'}
                    />                   
                </Map>
            </div>
        )
    }
}

// export default Location;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDk-k9sTzO8_0xmP4tC7SmRRW-RvpS__Cc'
})(Location);