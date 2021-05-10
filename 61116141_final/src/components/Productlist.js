import React, {Component} from 'react';
import Productitems from '../components/Productitems';

class Productlist extends Component {
    showProducts(){
        return(
            this.props.product &&
            this.props.product.map(product =>(
                <Productitems key={product._id} product={product}/>
            ))
        );
    }
    render(){
  return (
    
    <div class="album py-5 bg-light">
    <div class="container">
           
    <input 
     key="random1"
     name=""
     placeholder="ค้นหาสถานที่ท่องเที่ยว"
     onChange={this.props.search}
    />
    <button className="btn btn-outline-success" onClick={()=> this.props.onConfirmOrder()}>ค้นหา</button>
    <hr/>
    <br/>    
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {this.showProducts()}
      </div>
    </div>
  </div>

    
  );
    }
}

export default Productlist;