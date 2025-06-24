import React from 'react'

export default function ShopVibe() {
  return (
    <div><section className="shop-vibe   text-white">
    <div className="container-lg  mt-5 py-5 px-3 px-md-0 rounded-4" style={{backgroundColor: "#373e44"}}>
      <h3 className="fw-semibold mb-3 text-center">Shop the Vibe</h3>
      <p className="opacity-75 text-center mb-5">Discover collections crafted to express every facet of your unique style.</p>
      <div className="row g-4 d-flex justify-content-around">
        <div className="col-6 col-md-3 d-flex justify-content-between  flex-column overflow-hidden position-relative shop-card shop-card-silent">
          <img src="/image/shop-1.jpg" alt="Silent Statement" className="w-100 rounded-5 p-2"/>
         
          <img src="/image/shop-2.jpeg" alt="Frosted Edge" className="w-100 rounded-5 p-2"/>
          
        </div>

        <div className="col-6 col-md-3 d-flex align-items-center overflow-hidden position-relative shop-card shop-card-neon">
          <img src="/image/shop-6.jpeg" alt="Neon Nights" className="w-100 rounded-5"/>
          
        </div>

        <div className="col-6 col-md-3  overflow-hidden position-relative shop-card shop-card-neon">
          <img src="/image/shop-4.jpeg" alt="Neon Nights" className="w-100 rounded-5 p-2"/>
          
        
          <img src="/image/shop-5.jpeg" alt="Muted Energy" className="w-100 rounded-4 p-2"/>
          
        </div>
      </div>
    </div>
  </section></div>
  )
}
