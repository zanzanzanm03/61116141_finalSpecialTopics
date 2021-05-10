import Header from '../components/Header';
import Footer  from '../components/Footer';
import Productlist from '../components/Productlist';
import React,{ Component } from 'react';
import axios from 'axios';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={product: "",travelsearch: ""}
        this.search = this.search.bind(this);
        this.confirm = this.confirm.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:3001/product").then(res=>{
            console.log(res.data)
            {this.setState({product:res.data})}
        })
    }
   search(e){
      this.setState({travelsearch:e.target.value})
    }
    confirm(){
        const {travelsearch} = this.state;
        axios.get("http://localhost:3001/product/"+ travelsearch).then(res=>{
            {this.setState({product:res.data})}
            console.log(res.data);
        });
        this.setState({travelsearch: ""});
    }

  render(){
  return (
    <div >
        <Header/>
        <Productlist product={this.state.product} search={this.search} onConfirmOrder={this.confirm}/>
        <Footer/>
    </div>
  );
  }
}


export default Home;