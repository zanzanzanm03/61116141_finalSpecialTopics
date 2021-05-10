import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link to="/" class="d-flex align-items-center mb-3 mb-md-0  me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">NathakornTravel</span>
      </Link>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link to="/detail" class="nav-link link-dark">Detail-location</Link></li>
        <li class="nav-item"><Link to="/product" class="nav-link link-dark">AddLocation</Link></li>
        <li class="nav-item"><Link to="/cart" class="nav-link link-dark">cart</Link></li>
      </ul>
      
    </header>
  );
  }
}

export default Header;