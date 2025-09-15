import { useEffect } from "react";
import Footer from "../Components/Footer.jsx";
import "../Components/About.css";

// React Icons
import { FaHandshake, FaTruck, FaLightbulb, FaLeaf, FaUsers } from "react-icons/fa";
import { FaBolt, FaMoneyBillWave, FaGlobeAfrica, FaMobileAlt } from "react-icons/fa";

// Hero Background
import HeroImage from "../assets/background1.jpg";
import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import Team3 from "../assets/team3.jpg";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpeg";

export default function About() {
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
          el.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="about-hero reveal fade-in"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Delivering trust, speed, and reliability across every mile.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story reveal slide-in-left">
        <div className="about-container">
          <h2>Our Story</h2>
          <p>
            We started with a simple mission: to make deliveries seamless,
            affordable, and reliable. From humble beginnings, we’ve grown into a
            trusted logistics partner, connecting people and businesses across
            cities.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision reveal slide-in-right">
        <div className="mv-container">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To empower individuals and businesses with fast, transparent, and
              secure delivery solutions.
            </p>
          </div>
          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              To become the leading on-demand logistics platform in Africa,
              delivering value beyond borders.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values reveal fade-up">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaTruck className="icon" /> Reliability
          </div>
          <div className="value-card">
            <FaHandshake className="icon" /> Trust
          </div>
          <div className="value-card">
            <FaLightbulb className="icon" /> Innovation
          </div>
          <div className="value-card">
            <FaLeaf className="icon" /> Sustainability
          </div>
          <div className="value-card">
            <FaUsers className="icon" /> Customer-first
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team reveal slide-in-left">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={Team3} alt="Team Member" />
            <h4>Aliko Dangote</h4>
            <p>Founder </p>
          </div>
          <div className="team-member">
            <img src={Team2}  alt="Team Member" />
            <h4> David Bird</h4>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src={Team1}  alt="Team Member" />
            <h4>Edwin Devakumar</h4>
            <p>Tech Lead</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose reveal slide-in-right">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <FaBolt className="icon" /> Fast Deliveries
          </div>
          <div className="why-card">
            <FaMoneyBillWave className="icon" /> Transparent Pricing
          </div>
          <div className="why-card">
            <FaGlobeAfrica className="icon" /> Wide Coverage
          </div>
          <div className="why-card">
            <FaMobileAlt className="icon" /> Tech-enabled Tracking
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners reveal fade-in">
        <h2>Trusted By</h2>
        <div className="partners-logos">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
          
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta reveal fade-up">
        <h2>Ready to Experience Seamless Deliveries?</h2>
        <button>Get Started</button>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
