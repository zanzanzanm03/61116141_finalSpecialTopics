import Header from '../components/Header';
import Footer  from '../components/Footer';
import Productlist from '../components/Productlist';
import React,{ Component } from 'react';
import axios from 'axios';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={product: ""}
    }
    componentDidMount(){
        axios.get("http://localhost:3001/product").then(res=>{
            console.log(res.data)
            {this.setState({product:res.data})}
        })
    }
  render(){
  return (
    <div >
        <Header/>
        <Productlist product={this.state.product}/>
        <Footer/>
    </div>
  );
  }
}


export default Home;