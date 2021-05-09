import './App.css';
import Header from './components/Header'
import Footer  from './components/Footer'
import Productlist from './components/Productlist'
import React,{ Component } from 'react';
class App extends Component {
  render(){
  return (
    <div >
        <Header/>
        <Productlist/>
        <Footer/>
    </div>
  );
  }
}

export default App;