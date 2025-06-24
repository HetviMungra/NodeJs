import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Heading Text
      gsap.from(headingRef.current.querySelectorAll("span"), {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
          
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate Description
      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate Button
      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });


// Yellow Circle ("to")
gsap.to(".to", {
  x: 45, // Only move horizontally
  duration: 1.5,
  repeat: 1,
  yoyo: true,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".to",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

// Blue Circle ("blue-i")
gsap.to(".blue-i", {
  x: -45,
  duration: 1.5,
  repeat: 1,
  yoyo: true,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".blue-i",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});


      // Button Hover Effect (independent of scroll)
      const btn = buttonRef.current;
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power1.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container fluid className="contact-container p-0" ref={containerRef}>
      <Row className="g-0 justify-content-center">
        <Col xs={12} className="contact-bg">
          <Container className="py-5 py-md-6 py-lg-7">
            <Row className="justify-content-center">
              <Col xs={12} md={10} lg={8} className="text-center">
                
                {/* Heading */}
                <div className="contact-inline-line">
                <h1 className="contact-heading mb-4" ref={headingRef}>
                  <span>We're</span>
                  <span className="rounded-image-rect" aria-hidden="true">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLOEhM7O9xTu03XLykX4YRlPv2xRZ5I5Ewg&s"
                      alt="Smiling woman"
                      loading="lazy"
                    />
                  </span>
                  <span>waiting</span>
                  <br className="d-md-none" />
                  <span className="for">for</span>
                  <span  className="word">you </span>
                  <span className="to" aria-hidden="true"> to</span>
                  <span className="blue-i" aria-hidden="true">
                    <i className="fa-solid fa-briefcase" style={{ fontSize: "30px" }}></i>
                  </span>
                  <span  className="word">contact</span>
                  <span className="us" aria-hidden="true">us</span>
                </h1>
                </div>

                {/* Description */}
                <p className="contact-description mb-4 mb-md-5" ref={descriptionRef}>
                  You register online through the website, by mail, or by fax using the registration form. 
                  Registration requires the member's name and full company address or billing address 
                  with phone/fax number and email address.
                </p>

                {/* Button */}
                <Button
                  variant="dark"
                  size="lg"
                  className="register-btn px-4 py-3"
                  ref={buttonRef}
                >
                  Register now
                </Button>

              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
