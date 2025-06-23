import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Seminar.css';
gsap.registerPlugin(ScrollTrigger);

// Import images
import imgProject from '/motion/arrow.jpg';
import imgCommunication from '/motion/book-1.jpeg';
import imgPresentation from '/motion/laptop.jpeg';
import imgSales from '/motion/bag.webp';
import imgLaw from '/motion/microchip.jpeg';
import imgPersonal from '/motion/mobile.webp';

export default function Seminar() {
  const cardsRef = useRef([]);

useEffect(() => {
  const ctx = gsap.context(() => {
    
    // Animate each card individually with ScrollTrigger (responsive)
    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: window.innerWidth < 768 ? 20 : 30, // Slightly different for mobile
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });
    });

  }, cardsRef);

  return () => ctx.revert();
}, []);


   

  // Seminar topics data for cards
  const seminarTopics = [
    { img: imgProject, lessons: 26, title: 'Project management', bg: 'blue' },
    { img: imgCommunication, lessons: 34, title: 'Communication training' },
    { img: imgPresentation, lessons: 16, title: 'Presentation training' },
    { img: imgSales, lessons: 56, title: 'Sales training' },
    { img: imgLaw, lessons: 78, title: 'Law and data protection' },
    { img: imgPersonal, lessons: 42, title: 'Personal development' },
  ];

  return (
    <Container fluid className="seminar-container p-0">
      <Row className="g-0">
        <Col xs={12} className="yellow-bg">
          <Container className="py-5">
            <Row className="justify-content-center">
              <Col xs={12} md={10} lg={8} className="text-center text-md-start mb-4 mb-md-5">
                <h2 className="seminar-title">
                  <span className="highlight-dark ">Seminar topics</span>
                  {/* <img 
                    className="decor-paper ms-2" 
                    src="https://img.icons8.com/ios/30/000000/paper.png" 
                    alt="paper icon" 
                  /> */}
                </h2>
              </Col>
            </Row>

            <Row className="g-3 g-md-4 justify-content-center">
              {seminarTopics.map(({ img, lessons, title, bg }, i) => (
                <Col key={i} xs={12} sm={6} lg={4} className="mb-3 mb-md-0">
                  <div
                    className={"lessbox topic-card h-100 p-3 d-flex flex-column position-relative"}
                    ref={(el) => (cardsRef.current[i] = el)}
                  >
                    <img 
                      src={img} 
                      alt={title} 
                      className="img-fluid rounded w-100" 
                      style={{ height: '200px', objectFit: 'fill' }}
                    />
                    <small className="lessons-count mt-2">{lessons} lessons</small>
                    <h3 className="mt-2 mb-4">{title}</h3>
                    <Button 
                      variant={bg === 'blue' ? 'dark' : 'outline-dark'} 
                      className="btn-circle position-absolute"
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                      </svg>
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="mt-4 mt-md-5">
              <Col xs={12} className="text-center">
                <Button variant="dark" size="lg" className="px-5 py-2">
                  More topics
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}