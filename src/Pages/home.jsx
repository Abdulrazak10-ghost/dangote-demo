import { useState, useEffect, useRef } from "react";
import "../Components/Home.css";
import { FaIndustry, FaGlobeAfrica, FaLightbulb, FaLeaf, FaHandshake, FaChartLine, FaQuoteLeft } from "react-icons/fa";
import Footer from "../Components/Footer.jsx";

import Slide1 from "../assets/background1.jpg";
import Slide2 from "../assets/background2.jpg";
import Slide3 from "../assets/background3.jpg";
import InnovationImg from "../assets/background3.jpg";

export default function Home() {
  const slides = [
    {
      image: Slide1,
      title: "Dangote Petroleum Refinery",
      subtitle: "Powering Africa’s Future with World-Class Refining Capacity",
    },
    {
      image: Slide2,
      title: "Energy Independence",
      subtitle: "Reducing reliance on fuel imports for a stronger economy",
    },
    {
      image: Slide3,
      title: "Industrial Excellence",
      subtitle: "Building the largest single-train refinery in the world",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Scroll reveal logic
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("active");
        } else {
          el.classList.remove("active"); // remove if you want it to re-trigger
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Carousel Section */}
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <section className="refinery-section">
        <div className="refinery-container">
          <h2 className="reveal fade-up">Our Vision & Importance</h2>
          <p className="intro reveal fade-up">
            Dangote Petroleum Refinery is not just a plant; it is Africa’s bold
            step toward energy security, economic growth, and industrial
            transformation.
          </p>

          <div className="refinery-grid">
            <div className="refinery-card reveal fade-up">
              <FaIndustry className="refinery-icon" />
              <h3>Industrial Growth</h3>
              <p>
                With cutting-edge facilities, we aim to create jobs, empower
                industries, and position Nigeria as a global refining hub.
              </p>
            </div>
            <div className="refinery-card reveal fade-up">
              <FaGlobeAfrica className="refinery-icon" />
              <h3>Energy Security</h3>
              <p>
                Our refinery reduces dependency on imports, ensuring Africa’s
                energy needs are met locally with world-class standards.
              </p>
            </div>
            <div className="refinery-card reveal fade-up">
              <FaLightbulb className="refinery-icon" />
              <h3>Vision for the Future</h3>
              <p>
                We envision a sustainable, self-reliant Africa powered by
                innovation, excellence, and strategic industrial investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Innovation */}
      <section className="innovation-section">
        <div className="innovation-text reveal slide-left">
          <h2>Driving Business Innovation</h2>
          <p>
            At Dangote Refinery, innovation is at the core of our operations. We
            embrace advanced technologies, efficient energy practices, and
            strategic business models that not only enhance productivity but
            also ensure sustainability for generations to come.
          </p>
          <p>
            By combining world-class infrastructure with African ingenuity, we
            are setting new standards in the global energy sector while creating
            opportunities for businesses and communities alike.
          </p>
        </div>
        <div className="innovation-image reveal slide-right">
          <img src={InnovationImg} alt="Business Innovation" />
        </div>
      </section>

      {/* Economic Impact */}
      <section className="impact-section">
        <h2 className="reveal fade-up">Economic Impact</h2>
        <div className="impact-grid">
          <div className="impact-card reveal fade-up">
            <FaChartLine className="impact-icon" />
            <h3>Job Creation</h3>
            <p>Thousands of jobs for Nigerians and Africans in multiple sectors.</p>
          </div>
          <div className="impact-card reveal fade-up">
            <FaIndustry className="impact-icon" />
            <h3>Industrial Boost</h3>
            <p>Strengthening local industries by supplying raw materials.</p>
          </div>
          <div className="impact-card reveal fade-up">
            <FaGlobeAfrica className="impact-icon" />
            <h3>Economic Growth</h3>
            <p>Reducing imports, increasing exports, and growing GDP.</p>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="sustainability-section">
        <h2 className="reveal fade-up">Sustainability</h2>
        <div className="sustainability-grid">
          <div className="sustainability-card reveal fade-up">
            <FaLeaf className="sustainability-icon" />
            <h3>Green Practices</h3>
            <p>We implement eco-friendly refining processes for the planet.</p>
          </div>
          <div className="sustainability-card reveal fade-up">
            <FaLightbulb className="sustainability-icon" />
            <h3>Energy Efficiency</h3>
            <p>Using modern technology to reduce energy waste significantly.</p>
          </div>
          <div className="sustainability-card reveal fade-up">
            <FaGlobeAfrica className="sustainability-icon" />
            <h3>Future Generations</h3>
            <p>Building a cleaner, more sustainable Africa for tomorrow.</p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="partnership-section">
        <h2 className="reveal fade-up">Global Partnerships</h2>
        <div className="partnership-grid">
          <div className="partnership-card reveal fade-up">
            <FaHandshake className="partnership-icon" />
            <h3>Collaboration</h3>
            <p>Working with world leaders to ensure efficiency and standards.</p>
          </div>
          <div className="partnership-card reveal fade-up">
            <FaGlobeAfrica className="partnership-icon" />
            <h3>Global Reach</h3>
            <p>Supplying fuel and products across Africa and beyond.</p>
          </div>
          <div className="partnership-card reveal fade-up">
            <FaIndustry className="partnership-icon" />
            <h3>Innovation Sharing</h3>
            <p>Exchanging ideas and expertise for continuous growth.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <h2 className="reveal fade-up">Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card reveal fade-up">
            <FaQuoteLeft className="quote-icon" />
            <p>"The refinery has brought hope to millions of Nigerians."</p>
            <h4>- Community Leader</h4>
          </div>
          <div className="testimonial-card reveal fade-up">
            <FaQuoteLeft className="quote-icon" />
            <p>"A major milestone in Africa’s journey to energy security."</p>
            <h4>- Energy Expert</h4>
          </div>
          <div className="testimonial-card reveal fade-up">
            <FaQuoteLeft className="quote-icon" />
            <p>"It’s not just business, it’s transformation of a continent."</p>
            <h4>- International Analyst</h4>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
