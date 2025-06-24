import React from 'react'

export default function LatestDrops() {
  return (
    <div> <section className="latest-drops container-lg mt-5 px-3 px-md-0">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="fw-semibold"><span className="text-pink-400">Latest</span> Drops</h3>
      <div className="carousel-controls d-flex gap-2 align-items-center">
        <button className="btn btn-light rounded-circle shadow-sm" id="prevLatestDrop">&larr;</button>
        <button className="btn btn-danger rounded-circle" id="nextLatestDrop">&rarr;</button>
      </div>
    </div>
    <div className="row g-3">
        <div className="col-12 col-md-3">
        <div className="filter-menu border border-danger p-4 rounded-4 ">
            <small className="d-block mb-3 text-danger fw-semibold">All</small>
            <ul className="list-unstyled opacity-75 fw-semibold fs-6">
              <li className="mb-2">Graphic Tees</li>
              <li className="mb-2">Hoodies & Sweats</li>
              <li className="mb-2">Outerwear</li>
              <li className="mb-2">Tops</li>
              <li className="mb-2">Bottoms</li>
              <li>Accessories</li>
            </ul>
          </div>
        </div>
    
      
      <div className="col-12 col-md-9">
        <div className="row g-3">
         
          <div className="col-12 col-md-4">
            <div className="card rounded-4 shadow-sm">
              <img src="/image/p-2.jpeg" className="card-img-top w-100 rounded-top-4" alt="Vibe Bloom Crop" />
              <div className="card-body p-3">
                <h6 className="card-title mb-1">Vibe Bloom Crop</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-warning">
                    <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i> 4.0
                  </div>
                  <div className="fw-semibold text-danger">$36</div>
                </div>
              </div>
            </div>
          </div>
           {/* Product Card 2 */}
          <div className="col-12 col-md-4">
            <div className="card rounded-4 shadow-sm">
              <img src="/image/LD-2.jpg" className="card-img-top w-10 rounded-top-4" alt="Icon Cipher Tee" />
              <div className="card-body p-3">
                <h6 className="card-title mb-1">Icon Cipher Tee</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-warning">
                   <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i> 4.9
                  </div>
                  <div className="fw-semibold text-danger">$48</div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Product Card 3 --> */}
          <div className="col-12 col-md-4 ">
            <div className="card rounded-4 shadow-sm border border-danger">
              <img src="/image/LD-3.jpg" className="card-img-top w-100 rounded-top-4" alt="Graffiti Burst Shorts" />
              <div className="card-body p-3">
                <h6 className="card-title mb-1">Graffiti Burst Shorts</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-warning">
                   <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i> 4.8
                  </div>
                  <div className="fw-semibold text-danger">$65</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <small className="text-muted">● ● ●</small>
        </div>
      </div>
    </div>
  </section></div>
  )
}
