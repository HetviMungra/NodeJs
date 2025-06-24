import React from 'react'

export default function CommunityHub() {
  return (
    
    <div> <section className="community-hub container-lg mt-5 px-3 px-md-0">
    <h3 className="fw-semibold text-center mb-2 "><span className="text-pink-400">Community</span> Hub</h3>
    <p className="text-center opacity-75 mb-5">Join the tribe, Express your vibe</p>
    <div className="row  justify-content-around g-4">
      <div className="col-12 col-md-3 community-card p-4 rounded-4 shadow">
        <img src="/image/c-1.jpeg" className="rounded-4 mb-3" style={{width:"100%" ,maxWidth: "320px"}}/>
        <h6 className="fw-semibold ">Be Part of the Inner Circle</h6>
        <p className="opacity-75 ">Get exclusive drops, member-only deals & fresh VYBE content — straight to your inbox.</p>
        <form>
          <input type="email" className="form-control mb-3" placeholder="Email" required />
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="" id="access1" />
            <label className="form-check-label opacity-75" for="access1">I want early access to limited collections</label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="" id="access2" />
            <label className="form-check-label opacity-75" for="access2">I want to buy a VYBE token</label>
          </div>
          <button type="submit" className="btn btn-danger rounded-pill w-100 fw-semibold">Join Membership</button>
        </form>
      </div>
      <div className="col-12 col-md-3 community-card p-4 rounded-4 shadow text-center d-flex flex-column align-items-center">
        <div className="d-flex align-items-center mt-3 gap-3">
          <img src="/image/man.png" alt="Elena Jackson" className="rounded-circle" style={{width:"48px", height:"48px", objectFit:"cover"}} />
          <div className="text-start">
            <h6 className="mb-1 fw-semibold">Elena Jackson</h6>
            <small className="opacity-75">OG Member</small>
            <p className="mb-0 opacity-75" style={{fontSize:"0.85rem"}}>Wearing VYBE makes me feel like I own the streets. #VybzTribe</p>
          </div>
        </div>
                <img src="/image/c-2.jpeg" alt="Community Woman" className="rounded-4 mt-5" style={{width:"100%", maxWidth: "320px", objectFit:"cover"}}/>

      </div>
      <div className="col-12 col-md-3 community-card p-4 rounded-4 shadow">
        <img src="/image/c-1.jpeg" alt="" className="rounded-4 mb-3" style={{width:"100%", maxWidth: "350px"}}/>
        <h5 className="fw-semibold mb-3 ">Upcoming Challenge</h5>
        <p className="opacity-75 mb-5">Style Remix Challenge<br />Show off your unique vibe by mixing and matching your favorite pieces from our latest collection.</p>
        <div className="deadline d-flex justify-content-between opacity-75 mb-3">
          <small><strong>Deadline:</strong> July 15</small>
          <small><strong>Rewards:</strong> Exclusive discount codes</small>
        </div>
        <button className="btn btn-danger rounded-pill w-100 fw-semibold">Join challenge</button>
      </div>
    </div>
    <div className="text-center mt-5">
      <button className="btn btn-danger rounded-pill px-5 py-3 fw-semibold">Join The Vybe Tribe</button>
    </div>
  </section>
  </div>
  )
}
