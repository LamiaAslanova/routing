import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/' >Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='#'>About</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to='/shop' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </Link>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
              <button class="btn btn-outline-dark" type="submit"><i class="fa-solid fa-cart-shopping"></i> Cart <span>0</span></button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header