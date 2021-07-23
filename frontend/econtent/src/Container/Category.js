import { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import C from '../images/C.jpg';



class Catagory extends Component {
    render() {
        return (
            <div>
               <div class="row" >
  
  <div class="column">
      <img src={C} style={{width:`100%`}}/>
      <div class="description">
          <h4>The content is for educational</h4>
          <p> <a href="" style={{width:`100%`}} >Category</a><span >Posted on: 2021-07-21</span></p>
      </div>
  </div>
  <div class="column1">
      <img src="content.jpg" style={{width:`100%`}}/>
      <div class="description">
          <h4>The content is for educational</h4>
          <p> <a href="" style={{width:`100%`}}>Category</a><span >Posted on: 2021-07-21</span></p>
      </div>
  </div>
  <div class="column">
      <img src="content1.jpg" style={{width:`100%`}} />
      <div class="description">
          <h4>The content is for educational</h4>
          <p> <a href=""style={{width:`100%`}}  >Category</a><span >Posted on: 2021-07-21</span></p>
      </div>
  </div> 
  
<div class="column">
  <img src="content.jpg" style={{width:`100%`}} />
  <div class="description">
      <h4>The content is for educational</h4>
      <p> <a href="" style={{width:`100%`}} >Category</a><span >Posted on: 2021-07-21</span></p>
  </div>
</div>
  <div class="column">
      <img src="content1.jpg" style={{width:`100%`}}/>
      <div class="description">
          <h4>The content is for educational</h4>
          <p> <a href="" style={{width:`100%`}} >Category</a><span >Posted on: 2021-07-21</span></p>
      </div>
  </div>
          <div class="column">
  <img src="content.jpg" style={{width: `100%`}}/>
  <div class="description">
      <h4>The content is for educational</h4>
      <p> <a href="" style={{width:`100%`}}>Category</a><span >Posted on: 2021-07-21</span></p>
  </div>
</div>

</div>
            </div>
        )
    }
}

export default Catagory;