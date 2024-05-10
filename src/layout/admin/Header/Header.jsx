import React from 'react'
import '../../site/Header/Header.css'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div>
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
              <Link class="nav-link active" aria-current="page" to='/admin' >Dashboard</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='/admin/products'>Products</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='/admin/add'>Add</Link>
            </li>
            <li class="nav-item dropdown">
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default Header