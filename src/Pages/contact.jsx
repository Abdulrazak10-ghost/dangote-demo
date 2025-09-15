import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import Footer from "../Components/Footer.jsx";
import "../Components/Contact.css";
import bgImage from "../assets/background2.JPG";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Dangote Refinery. We will respond shortly.");
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // only one open at a time
  };

  // Scroll animations
  const sectionsRef = useRef([]);
  useEffect(() => {
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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="contact-hero fade-in"
        style={{ backgroundImage: `url(${bgImage})` }}

      >
        <div className="hero-overlay">
          <h1>Contact Dangote Refinery</h1>
          <p>Building Africa’s Energy Future, One Barrel at a Time.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="contact-section slide-in"
      >
        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Address</h3>
            <p>Dangote Petroleum Refinery & Petrochemicals</p>
            <p>Lekki Free Zone, Ibeju-Lekki, Lagos, Nigeria</p>
          </div>
          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <h3>Phone</h3>
            <p>General: +234 800 123 4567</p>
            <p>Investors: +234 800 987 6543</p>
          </div>
          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>info@dangoterefinery.com</p>
            <p>careers@dangoterefinery.com</p>
          </div>
          <div className="info-box">
            <FaClock className="info-icon" />
            <h3>Business Hours</h3>
            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 2:00 PM</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-media fade-in">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="form-section slide-in"
      >
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="partnership">Partnership</option>
            <option value="investment">Investment</option>
            <option value="media">Media</option>
            <option value="careers">Careers</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>

      {/* FAQs Section */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="faq-section slide-in"
      >
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {[
            {
              q: "Where is Dangote Refinery located?",
              a: "It is located at the Lekki Free Zone, Ibeju-Lekki, Lagos, Nigeria.",
            },
            {
              q: "What is the production capacity?",
              a: "The refinery has a capacity of 650,000 barrels per day, making it the largest in Africa.",
            },
            {
              q: "How can I apply for a job?",
              a: "Job applications can be sent to careers@dangoterefinery.com.",
            },
            {
              q: "How do I partner with Dangote Refinery?",
              a: "Submit your partnership proposal through the contact form or email info@dangoterefinery.com.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openFAQ === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>
                {faq.q}
                <span className="faq-icon">
                  {openFAQ === index ? <FaMinus /> : <FaPlus />}
                </span>
              </h3>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        className="map-section fade-in"
      >
        <iframe
          title="Dangote Refinery Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9382967625736!2d3.9934!3d6.4254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7f2c38a6a55%3A0xd3b691b6ff3b0a3f!2sDangote%20Refinery!5e0!3m2!1sen!2sng!4v1698851542345!5m2!1sen!2sng"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}
