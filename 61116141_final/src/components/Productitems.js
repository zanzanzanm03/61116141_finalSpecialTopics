import React, {Component} from 'react';
import './Productitems.css';


class Productitems extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {product_name,img, price}= this.props.product;
  return (
    <div>
    <div class="col">
    <div class="card shadow-sm">
    <img className="bd-placeholder-img card-img-top" src={img} />

      <div class="card-body">
        <h1 class='text-center'>{product_name}</h1>
        {/* <p class="card-text">aaaa</p> */}
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary">นำใส่ตะกร้า</button>
            
          </div>
          <small class="text-muted">ราคา {price} bath</small>
        </div>
      </div>
    </div>
  </div>
  </div>

    
  );
  }
}

export default Productitems;