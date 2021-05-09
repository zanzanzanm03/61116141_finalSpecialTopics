import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link href="/" class="d-flex align-items-center mb-3 mb-md-0  me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Nathakorn</span>
      </Link>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link href="/" class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link href="/detail" class="nav-link link-dark">detail</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link link-dark">Products</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link link-dark">cart</Link></li>
      </ul>
    </header>
  );
  }
}

export default Header;