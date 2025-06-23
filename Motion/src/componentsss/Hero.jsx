import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";


export default function Hero() {
  const mainRef = useRef(null);

  useEffect(() => {
    // GSAP intro animation example
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
       

      });
    }, mainRef);
    

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Container fluid className="main-container" ref={mainRef}>

        {/* Navbar */}
        <Navbar expand="lg" className="p-0">
          <Navbar.Brand href="#" className="brand-logo fade-in">Akademia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="fade-in" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center fade-in">
              <Nav.Link href="#">About</Nav.Link>
              <NavDropdown title="Programmes" id="basic-nav-dropdown" menuVariant="light">
                <NavDropdown.Item href="#">Programme 1</NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link href="#">Resources</Nav.Link>
              <Nav.Link>
                <Button variant="outline-dark" className="fw-bold">Get in touch</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Headline */}
        <div className="headline fade-in" aria-label="Find seminars, trainings and trainers">
          <span>Find</span>

          {/* Rounded Rect Image 1 */}
          <span className="rounded-image-rect" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=60"
              alt="Woman smiling"
              loading="lazy"
            />
          </span>
          
          <span>seminars</span>
          <br className="d-md-none" />
         
          <span>trainings</span>

          {/* Yellow circle with ampersand */}
          <span className="circle-yellow" aria-hidden="true">&amp;</span>

          {/* Blue circle backpack icon */}
          <span className="circle-blue" aria-hidden="true" >
           <i class="fa-solid fa-briefcase" style={{fontSize:"30px"}} ></i>
          </span>

          <span>trainers</span>

          {/* Rounded Circle Image 2 */}
          <span className="rounded-image-circle" aria-hidden="true" >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=60"
              alt="Professional woman"
              loading="lazy"
            />
          </span>
        </div>

        {/* Sub text */}
        <p className="sub-text fade-in" aria-live="polite" aria-atomic="true">
          Do you want to learn techniques that will make your day job or starting a new position easier?
        </p>

        {/* Email subscription form */}
        <form className="email-form fade-in" onSubmit={e => e.preventDefault()} aria-label="Subscribe to newsletter">
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
            aria-required="true"
            aria-label="Enter your email"
            required
          />
          <button type="submit" className="send-btn" aria-label="Send email">
            Send
          </button>
        </form>

        {/* Green Brushes */}
        <div className="green-brush brush-left" aria-hidden="true"></div>
        <div className="green-brush brush-right" aria-hidden="true"></div>

        {/* Management pill */}
        <div className="management-pill fade-in" aria-hidden="true">
          Management
        </div>

        {/* Info box bottom left */}
        <aside className="info-box fade-in" aria-live="polite" aria-atomic="true" aria-label="Information">
          <h4>Akademia</h4>
          <ul className="info-list">
            <li>
              <i class="ri-arrow-right-circle-line" style={{color: "green",fontSize:"25px",padding:"10px"}}></i>
               
              Implementation guarantee
            </li>
            <li>
             <i class="ri-arrow-right-circle-line" style={{color: "green",fontSize:"25px",padding:"10px"}}></i>
               Hygiene concept & 3G rule
            </li>
          </ul>
        </aside>

        {/* Circle bottom right with arrow */}
        <div className="circle-explore fade-in" aria-hidden="true">
          <span>
            EXPLORER NOS PRODUCTIONS
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="26"
              height="26"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l-7-7 7-7M19 19l-7-7 7-7" />
            </svg>
          </span>
        </div>

      </Container>
    </div>
  )
}

