import React from 'react'

export default function Footer() {
  return (
    <div><footer className="footer-wrapper">
    <div className="container-fluid">
      <div className="d-flex justify-content-between footer-container flex-wrap">
        {/* <!-- Left side --> */}
        <div className="d-flex flex-column flex-shrink-0" style={{minWidth: "180px"}}>
          <div className="footer-logo">VYBE</div>
          <div className="footer-tagline">Streetwear made for your vibe.</div>
          <div className="social-icons" aria-label="Social media links">
            {/* <!-- Twitter (represented by X icon) --> */}
            <a href="#" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
            </a>
            {/* <!-- Instagram icon --> */}
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* <!-- YouTube icon --> */}
            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            {/* <!-- TikTok icon --> */}
            <a href="#" aria-label="TikTok">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
          <div className="footer-bottom">&copy; 2025 VYBE. All rights reserved.</div>
        </div>

        {/* <!-- Navigation --> */}
        <div className="d-flex flex-column mx-4" style={{minWidth: "150px"}}>
          <div className="footer-section-title">Navigation</div>
          <ul className="footer-links list-unstyled mb-0">
            <li><a href="#hero-section">Home</a></li>
            <li><a href="#shop-vibe">Shop</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Limited Editions</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* <!-- Customer Support --> */}
        <div className="d-flex flex-column mx-4" style={{minWidth: "170px"}}>
          <div className="footer-section-title">Customer Support</div>
          <ul className="footer-links list-unstyled mb-0">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping &amp; Delivery</a></li>
            <li><a href="#">Returns &amp; Exchanges</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        {/* <!-- Contact Us --> */}
        <div className="d-flex flex-column mx-4" style={{minWidth: "220px"}}>
          <div className="footer-section-title">Contact us</div>
          <ul className="footer-contact list-unstyled mb-0">
            <li className="contact-item">
              {/* <!-- Email icon --> */}
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:support@vybe.com" className="text-decoration-none text-dark">support@vybe.com</a>
            </li>
            <li className="contact-item">
              {/* <!-- Phone icon --> */}
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+13235550199" className="text-decoration-none text-dark">+1 (323) 555-0199</a>
            </li>
            <li className="contact-item">
              {/* <!-- Clock icon --> */}
             <i className="fa-solid fa-headphones"></i>
              <span>Mon–Fri, 9AM–6PM (PST)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer></div>
  )
}
