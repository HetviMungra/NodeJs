import React from 'react'

export default function HeroSection() {
  return (
     <div>
      <section className="hero-section container-lg mt-4 mt-md-5 py-5 px-3 px-md-0">
      <div className="row align-items-center">
        <div className="col-lg-4 text-center text-lg-start">
          <h2 className="fw-semibold hero-text">
            Own the <span className="text-edge">EDGE</span><br />
            Keep the <span className="text-vibe">VIBE</span>
          </h2>
        </div>
        <div className="col-lg-8 position-relative">
          <div className="hero-image-card px-5 pt-4 rounded-4 d-flex flex-column flex-lg-row align-items-center gap-4">
            <img src="/image/hero.png" alt="Model" className="hero-model flex-shrink-0" />
            <div className="hero-content text-white flex-grow-1 px-4 py-3 rounded-4" style={{background: "#f64c53"}}>
              <small className="text-uppercase fw-semibold opacity-75">New Arrivals</small>
              <h3 className="fw-bold mt-2">Where Art Meets your Style</h3>
              <p className="mb-3">Step into the future of streetwear today.</p>
              <button className="btn btn-outline-light rounded-pill py-2 px-4 fw-semibold">
                New Drops <span className="ms-2">&rarr;</span>
              </button>
              <div className="rating d-flex align-items-center gap-2 mt-4">
                <img src="/image/man.png" alt="User1" className="rounded-circle" />
                <img src="/image/woman.png" alt="User2" className="rounded-circle" />
                <img src="/image/profile.png" alt="User3" className="rounded-circle" />
                <small className="opacity-75 p-1">Rated 5 Stars by The Vybe Tribe</small>
              </div>
            </div>
            <div className="featured-product bg-white rounded-4 p-3 text-center shadow">
              <small className="text-muted">Featured Product</small>
              <img src="/image/f-model.jpg" alt="Urban Vanguard Tee" className="img-fluid rounded-3 my-3" />
              <h6 className="fw-bold mb-1">Urban Vanguard Tee</h6>
              <small className="text-muted d-block mb-2">Unmatched comfort.</small>
              <button className="btn btn-danger rounded-pill fw-semibold">$26.72</button>
            </div>
          </div>
        </div>
      </div>
    </section>
     </div>
  )
}
