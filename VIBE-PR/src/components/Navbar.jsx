import React from 'react'

export default function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg py-3 px-3 px-md-5 border-bottom bg-white sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#" style={{ fontFamily: "'Fredericka the Great', cursive" }}>
          VYBE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navMenu">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4 fw-semibold fs-6">
            <li className="nav-item"><a className="nav-link" href="#shop-vibe">Shop</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Collections</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link search-btn p-0" aria-label="Search"><i className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i></button>
          <img src="/image/profile.png" alt="User" className="avatar rounded-circle" />
          <button className="btn btn-danger rounded-pill d-flex align-items-center gap-2" type="button">
            <i className="fa-solid fa-cart-shopping" style={{color: "#ffffff"}}></i>
            1 product
          </button>
        </div>
      </div>
    </nav>
  )
}
