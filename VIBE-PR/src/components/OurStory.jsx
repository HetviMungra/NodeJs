import React from 'react'

export default function OurStory() {
  return (
    <div> <section className="our-story container-lg mt-5 px-3 px-md-0">
    <h3 className="fw-semibold  mt-5"><span className="text-pink-400">Our </span>Story</h3>
   
    
    <div className="row justify-content-between align-items-center">
      <div className="col-12 col-md-5">
         <p className="opacity-75 mt-3 w-100">
      VYBE started as a passion project — a rebellion against mass
       trends and an embrace of raw, unapologetic style. We design for those who own their vibe and live it loud.
        </p>
        <ul className="timeline list-unstyled opacity-75 fw-semibold">
          <li> <i className="fa-solid fa-wand-magic-sparkles"style={{color:" #dd3308"}}></i> &nbsp;2022 - The Spark</li>
          <li> <i className="fa-brands fa-drupal" style={{color:" #dd3308"}}></i>&nbsp; 2023 - The First Drop</li>
          <li> <i className="fa-solid fa-paintbrush" style={{color:" #dd3308"}}></i>&nbsp; 2024 - The Culture Collab</li>
        </ul>
        <div className="mt-5 d-flex gap-3 align-items-start">
          <img src="/image/story-1.jpeg" alt="Our Story Dance" className="rounded-4" style={{width:"100px", height:"100px",objectFit :"cover"}}/>
          <div>
            <h5 className="fw-semibold">2025 – Going Global</h5>
            <p className="opacity-75" style={{fontSize:"0.9rem"}}>
              Our official site went live. Now, we’re taking VYBE worldwide — one bold fit at a time. The movement has just begun.
            </p>
            <button className="btn btn-outline-danger rounded-pill px-4 py-2 fw-semibold">Read More <span>&rarr;</span></button>
          </div>
        </div>
      </div>
       <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
        <img src="/image/story-2.jpg" alt="Our Story Model" className="rounded-4 img-fluid" style={{height:"500px", objectFit:"cover"}}  />
      </div>
    </div>
   
  </section>
</div>
  )
}
