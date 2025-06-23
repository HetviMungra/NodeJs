import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import 'bootstrap/dist/css/bootstrap.min.css';
gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Comfortable rooms",
    img: "/motion/presenting-img-1.jpg",
    borderColor: "#000",
    textColor: "black",
    borderRadius: "15px 50px 15px 15px",
    shadow: "0 10px 15px rgba(13, 110, 253, 0.4)"
  },
  {
    title: "Online education",
    img: "/motion/presenting-img-2.jpeg",
    borderColor: "#000",
    textColor: "#000",
    borderRadius: "15px 15px 50px 15px",
    shadow: "0 10px 15px rgba(0,0,0,0.3)"
  },
  {
    title: "Strong community",
    img: "/motion/presenting-img-3.jpg",
    borderColor: "#000",
    textColor: "#000",
    borderRadius: "50px 15px 15px 15px",
    shadow: "0 10px 15px rgba(0,0,0,0.3)"
  },
];

const seminarSpeaker = {
  bgColor: "#09a407",
  textColor: "white",
  borderRadius: "50px",
  shadow: "0 5px 10px rgba(9, 164, 7, 0.4)",
  text: "Seminar Speaker"
};

export default function Presenting() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for cards - responsive
      gsap.from(".card-stack > div", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".card-stack",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          markers: false
        }
      });

      // Animation for text section - responsive
      gsap.from(".text-section", {
        duration: 1,
        x: () => window.innerWidth > 992 ? 50 : 0, // Only horizontal on large screens
        y: () => window.innerWidth <= 992 ? 30 : 0, // Vertical on small screens
        opacity: 0,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".text-section",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          markers: false
        }
      });

      // Seminar Speaker Badge Alternate Left to Right 2 times
      gsap.fromTo(
        ".seminar-badge",
        { x: 0 },
        {
          x: 50,
          repeat: 1,
          yoyo: true,
          duration: 0.8,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".seminar-badge",
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (

   <div className="presenting-pages">
     <div className="main-container">
      <div
        ref={containerRef}
        className="container-fluid py-5 mt-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="row align-items-center justify-content-center">
          {/* Left Card Stack - full width on mobile, half on desktop */}
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <div className="position-relative" style={{ height: "420px" }}>
              <div className="card-stack position-relative d-flex flex-column mx-auto"
                style={{ width: "100%", maxWidth: "350px", height: "420px" }}>
                {cardData.map((card, index) => {
                  const rotateAngles = [-4, -1, 5];
                  const topOffsets = [5, 120, 200];
                  const leftOffsets = [0, 100, -35];
                  return (
                    <div
                      key={card.title}
                      className="position-absolute bg-white d-flex flex-column overflow-hidden "
                      style={{
                        maxWidth: "240px",
                        height: "280px",
                        border: `5px solid ${card.borderColor}`,
                        borderRadius: card.borderRadius,
                        boxShadow: card.shadow,
                        top: topOffsets[index],
                        left: leftOffsets[index],
                        transform: `rotate(${rotateAngles[index]}deg)`,
                        cursor: "default",
                      }}
                    >
                      <div className="p-3 flex-shrink-0">
                        <h6
                          className="mb-0 fw-bold"
                          style={{ color: card.textColor, userSelect: "none" }}
                        >
                          {card.title}
                        </h6>
                      </div>
                      <img
                        src={card.img}
                        alt={card.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  );
                })}

                {/* Seminar Speaker badge - position adjusted for mobile */}
                <div
                  className="seminar-badge d-flex align-items-center position-absolute mx-auto mx-lg-0"
                  style={{
                    bottom: "-60px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: seminarSpeaker.bgColor,
                    color: seminarSpeaker.textColor,
                    borderRadius: seminarSpeaker.borderRadius,
                    boxShadow: seminarSpeaker.shadow,
                    padding: "0.25rem 0.9rem",
                    fontSize: "0.85rem",
                    gap: "0.5rem",
                    userSelect: "none",
                    width: "200px",
                    maxWidth: "250px",
                  }}
                >

                  <img
                    src={"/motion/arrow.jpg"}
                    alt="Speaker"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid white",
                      flexShrink: 0,
                    }}
                  />
                  <span>{seminarSpeaker.text}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Section - full width on mobile, half on desktop */}
          <div className="col-lg-6 col-12">
            <div
              className="text-section mt-5 py-2 px-lg-0"
              style={{
                maxWidth: "600px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              <div className="d-flex align-items-center mb-3" style={{ gap: "0.8rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "2px solid #000",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                  aria-hidden="true"
                >
                  🌍
                </div>

                <h3
                  className="m-0"
                  style={{
                    fontWeight: "700",
                    fontSize: "clamp(1.5rem, 4vw, 1.9rem)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Presenting{" "}
                  <span
                    style={{
                      // backgroundColor: "#fffb82",
                      borderRadius: "4px",
                      padding: "0 6px",
                    }}
                  >
                    <b>ourselves</b>
                  </span>
                </h3>
              </div>

              <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#222" }}>
                We are an organization that conducts seminars for professionals and executives. Open
                seminars are held as face-to-face events in Germany, Austria, Switzerland, the Netherlands
                and Belgium.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#222" }}>
                In-person courses in English and other foreign languages are held all over the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}