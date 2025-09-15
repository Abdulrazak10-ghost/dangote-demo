import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import {
  FaIndustry,
  FaGasPump,
  FaCog,
  FaBolt,
  FaGlobeAfrica,
  FaLeaf,
  FaShieldAlt,
  FaHandshake,
  FaPlane,
  FaCar,
  FaHome,
} from "react-icons/fa";
import "../Components/Services.css";
import HeroImg from "../assets/background2.jpg";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpeg";

export default function Services() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in, .slide-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="hero-overlay">
          <h1 className="slide-in">World-Class Petroleum Refining & Energy</h1>
          <p className="fade-in">
            Powering industries, fueling economies, and driving the future of
            energy across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Core Refining Services */}
      <section className="core-services fade-in">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaIndustry className="icon" />
            <h3>Crude Oil Refining</h3>
            <p>Transforming crude oil into premium fuels and products.</p>
          </div>
          <div className="service-card">
            <FaGasPump className="icon" />
            <h3>Petroleum Products</h3>
            <p>Gasoline, diesel, kerosene, LPG, and more for industries & homes.</p>
          </div>
          <div className="service-card">
            <FaCog className="icon" />
            <h3>Lubricants & Chemicals</h3>
            <p>High-quality lubricants, base oils, and petrochemicals.</p>
          </div>
          <div className="service-card">
            <FaBolt className="icon" />
            <h3>Energy & Power</h3>
            <p>Electricity generation supporting industrial growth.</p>
          </div>
        </div>
      </section>

      {/* Industrial Applications */}
      <section className="applications slide-in">
        <h2>Industrial Applications</h2>
        <div className="applications-grid">
          <div className="app-card">
            <FaPlane className="icon" />
            <h4>Aviation</h4>
            <p>Supplying world-class jet fuel for global airlines.</p>
          </div>
          <div className="app-card">
            <FaCar className="icon" />
            <h4>Automotive</h4>
            <p>Gasoline, diesel, and lubricants powering vehicles everywhere.</p>
          </div>
          <div className="app-card">
            <FaIndustry className="icon" />
            <h4>Manufacturing</h4>
            <p>Industrial fuels and petrochemicals driving production.</p>
          </div>
          <div className="app-card">
            <FaHome className="icon" />
            <h4>Domestic Use</h4>
            <p>Cooking gas and kerosene meeting household needs.</p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="infrastructure fade-in">
        <h2>Infrastructure & Capacity</h2>
        <div className="infra-content">
          <p>
            Our refinery is one of the world’s largest single-train facilities,
            processing over <strong>650,000 barrels per day</strong>. With
            cutting-edge storage, pipelines, and export terminals, we ensure
            seamless global distribution.
          </p>
          <ul>
            <li>650,000 bpd refining capacity</li>
            <li>State-of-the-art pipelines and storage facilities</li>
            <li>Export-ready terminals with global reach</li>
          </ul>
        </div>
      </section>

      {/* Sustainability */}
      <section className="sustainability slide-in">
        <h2>Sustainability & Innovation</h2>
        <div className="sustainability-content">
          <FaLeaf className="icon big" />
          <p>
            We are committed to environmental responsibility, reducing
            emissions, and integrating clean energy solutions. Innovation drives
            our pursuit of sustainable growth for generations to come.
          </p>
        </div>
      </section>

      {/* Global Supply */}
      <section className="global-distribution fade-in">
        <h2>Global Distribution</h2>
        <p>
          Strategically positioned in Africa, our refinery connects local
          markets to the world. We export refined products across Africa,
          Europe, and Asia, strengthening energy security globally.
        </p>
      </section>

      {/* Quality & Safety */}
      <section className="quality slide-in">
        <h2>Quality & Safety</h2>
        <div className="quality-content">
          <FaShieldAlt className="icon big" />
          <p>
            Certified to global standards, our operations prioritize safety,
            quality, and compliance. Every product meets international
            specifications for reliability and performance.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="partners fade-in">
        <h2>Our Partners</h2>
        <div className="partners-logos">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section slide-in">
        <h2>Partner with Us</h2>
        <p>
          Let’s build the future of energy together. Contact us for bulk supply,
          partnerships, or strategic investments.
        </p>
        <button className="cta-btn"><Link to="/contact">Contact Us</Link></button>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
