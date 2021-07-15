import { Component } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper1 from './images/wallpaper1.jpg'
import wallpaper2 from './images/wallpaper2.jpg'
import wallpaper3 from './images/wallpaper3.png'

class DashboardUpperPart extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={wallpaper1} 
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Learn Everything you want</h3>
                            <p>This is our last semester. Let's have fun</p>
                        </Carousel.Caption> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={wallpaper2} 
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Buy, Sell, Read</h3>
                            <p>K hunxa ra padera asto</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={wallpaper3} 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Wanted</h3>
                            <p>Angelina Jolie is the best</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default DashboardUpperPart;