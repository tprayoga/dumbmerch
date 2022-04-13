import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
  <div className="container">
    <a className="navbar-brand" href="#"><strong>DumbMerch</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <i class="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">LAUNCHES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CATEGORIES</a>
        </li>
      </ul>
    
        <form className="d-flex">
        <a className="nav-link" aria-current="page" href="#"><i class="fa-solid fa-user"/></a>
        <a className="nav-link" aria-current="page" href="#"><i class="fa-solid fa-person-walking-arrow-right"/></a>
      </form>
      </div>
  </div>
</nav>
  )
}

export default Navbar