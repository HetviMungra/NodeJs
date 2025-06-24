import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subscribe Words
      gsap.from(".subscribeword", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Footer Links
      gsap.from(".footer-links li", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Email Input & Send Button
      gsap.from([".email-input", ".btn-send"], {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Social Icons
      gsap.from(".social-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Decorative Circle
      gsap.from(".decorative-images .circle-yellow", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Top Decorative Image
      gsap.from(".small-img-top", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Bottom Decorative Image
      gsap.from(".small-img-bottom", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="footer-section" ref={footerRef}>
      <footer className="footer container-fluid px-4 py-5 mt-5 rounded-4">
        <div className="footer-inner row mx-auto">

          {/* Left Subscribe */}
          <div className="col-md-6 subscribe-section d-flex flex-column justify-content-center px-4 mb-4 mb-md-0">
            <div className="subscribe-headers d-flex flex-wrap align-items-center gap-2 mb-4">
              <div className="subscribeword subscribe-green px-3 py-2 rounded-3 fw-bold fs-5">
                Subscribe
              </div>
              <div className="subscribeword subscribe-black px-3 py-2 rounded-pill border border-white fs-5">
                to our updates
              </div>
            </div>
            <form className="subscribe-form d-flex">
              <input
                type="email"
                className="email-input form-control"
                placeholder="Enter your email"
                aria-label="Email"
                required
              />
              <button type="submit" className="btn-send btn btn-light fw-bold">
                Send
              </button>
            </form>
          </div>

          {/* Right Links & Social */}
          <div className="col-md-6 d-flex flex-column justify-content-between px-4">
            <ul className="footer-links list-unstyled d-flex flex-column gap-2 mb-3">
              {["About", "Programmes", "Resources", "Academy", "Cusiness coaching", "Contact"].map((item, idx) => (
                <li key={idx} className="footer-link-item">
                  <a href="#!" className="text-white text-decoration-none">{item}</a>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center justify-content-between">
              <div className="social-icons d-flex gap-3">
                <a href="#!" className="social-icon text-center text-white rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="social-icon text-center text-white rounded-circle">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="privacy-policy text-white small">Privacy policy</div>
            </div>
          </div>
        </div>

        {/* Decorative Images */}
        <div className="decorative-images d-flex flex-row align-items-center">
          <div className="circle-yellow"></div>
          <div className="small-img-top">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=140&q=80" alt="Building" />
          </div>
          <div className="small-img-bottom">
            <img src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&w=140&q=80" alt="Pencils" />
          </div>
        </div>
      </footer>
              <br />

    </div>
  );
}
