import React from 'react'

export default function LimitedEdition() {
  return (
    <div>  <section className="limited-edition container-lg mt-5 px-3 px-md-0 mb-5">
    <h3 className="fw-semibold mb-3 text-center"><span className="text-danger fw-semibold">Limited </span>Edition</h3>
    <p className="text-center opacity-75 mb-4">Once it’s gone, It’s gone.</p>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="countdown d-flex gap-3 text-danger fw-semibold fs-6">
        <div><span className="d-block countdown-number">02d</span>Days</div>
        <div><span className="d-block countdown-number">13h</span>Hours</div>
        <div><span className="d-block countdown-number">22m</span>Minutes</div>
      </div>
      <div className="carousel-controls d-flex gap-2 align-items-center">
        <button className="btn btn-light rounded-circle shadow-sm" id="prevLimitedEdit">&larr;</button>
        <button className="btn btn-danger rounded-circle" id="nextLimitedEdit">&rarr;</button>
      </div>
    </div>

    <div className="row g-4">
      {/* <!-- Limited product cards --> */}
      <div className="col-12 col-md-3">
        <div className="card rounded-4 shadow-sm limited-card border-danger border">
          <img src="/image/l-1.jpeg " alt="Chroma Surge Jacket" className="card-img-top rounded-top-4" />
          <div className="card-body p-3">
            <small className="text-danger d-block mb-1" style={{fontSize: "0.85rem"}}>Only 50 made</small>
            <h6 className="card-title mb-1">Chroma Surge Jacket</h6>
            <div className="text-danger fw-semibold"> $110</div>  
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="card rounded-4 shadow-sm limited-card border-light border">
          <img src="/image/l-2.jpeg" alt="Vivid Blueprint Shirt" className="card-img-top rounded-top-4" />
          <div className="card-body p-3">
            <small className="text-muted d-block mb-1" style={{fontSize: "0.85rem"}}>Final Drop</small>
            <h6 className="card-title mb-1">Vivid Blueprint Shirt</h6>
           <div className="text-danger fw-semibold">$52</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="card rounded-4 shadow-sm limited-card border-danger border">
          <img src="/image/L-3.jpeg" alt="Heritage Wave Hat" className="card-img-top rounded-top-4" />
          <div className="card-body p-3">
            <small className="text-danger d-block mb-1" style={{fontSize: "0.85rem"}}>Almost sold out</small>
            <h6 className="card-title mb-1">Heritage Wave Hat</h6>
            <div className="text-danger fw-semibold">$38</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="card rounded-4 shadow-sm limited-card border-danger border">
          <img src="/image/l-4.jpeg" alt="Graffiti Canvas Cargo Pants" className="card-img-top rounded-top-4" />
          <div className="card-body p-3">
            <small className="text-danger d-block mb-1" style={{fontSize: "0.85rem"}}>Only 3 Left</small>
            <h6 className="card-title mb-1">Graffiti Canvas Cargo Pants</h6>
            <div className="text-danger fw-semibold">$95</div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
