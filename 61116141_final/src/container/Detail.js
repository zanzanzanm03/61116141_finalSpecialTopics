import Header from '../components/Header';
import Footer  from '../components/Footer';
import React,{ Component } from 'react';
import axios from 'axios';
class Detail extends Component {
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
            <h1>asasds</h1>
        <Footer/>
    </div>
  );
  }
}


export default Detail;