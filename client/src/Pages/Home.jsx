// Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to PetShelter</h1>
          <p>Adopt. Love. Change a life today.</p>
          <button className="btn">Adopt Now</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <div className="about-cards">
          <div className="about-card">
            <i className="fas fa-heart"></i>
            <h3>Compassion</h3>
            <p>We provide loving care to every pet.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-home"></i>
            <h3>Safe Homes</h3>
            <p>Helping pets find their forever families.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-users"></i>
            <h3>Community</h3>
            <p>Join our volunteers and supporters network.</p>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="featured-pets">
        <h2>Meet Our Pets</h2>
        <div className="pets-grid">
          <div className="pet-card">
            <img src="https://place-puppy.com/300x300" alt="Dog" />
            <h3>Buddy</h3>
            <p>2 Years Old - Friendly Dog</p>
          </div>
          <div className="pet-card">
            <img src="https://placekitten.com/300/300" alt="Cat" />
            <h3>Luna</h3>
            <p>1 Year Old - Calm Cat</p>
          </div>
          <div className="pet-card">
            <img src="https://place-puppy.com/301x301" alt="Dog" />
            <h3>Max</h3>
            <p>3 Years Old - Energetic Dog</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Happy Adopters</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Thanks to PetShelter, I found my lifelong friend!"</p>
            <span>- Sarah</span>
          </div>
          <div className="testimonial-card">
            <p>"Amazing experience, caring staff, and adorable pets!"</p>
            <span>- John</span>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section className="contact">
        <h2>Get Involved</h2>
        <p>Volunteer, donate, or adopt today and make a difference!</p>
        <button className="btn">Join Us</button>
      </section>
    </div>
  );
};

export default Home;
