import React, {Component} from 'react';
import './Productitems.css';
import {Link} from 'react-router-dom';

class Productitems extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {location_name,description,img, Province}= this.props.product;
  return (
    <div>
    <div class="col">
    <div class="card shadow-sm">
    <img className="bd-placeholder-img card-img-top" src={img} />

      <div class="card-body">
        <h1 class='text-center'>{location_name}</h1>
        <p class="card-text">{description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <Link to="/Detail">
            <button type="button" class="btn btn-outline-secondary">รายละเอียด</button>
            </Link>
          </div>
          <small class="text-muted">จังหวัด{Province}</small>
        </div>
      </div>
    </div>
  </div>
  </div>

    
  );
  }
}

export default Productitems;