import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    alert("Message submitted! We'll get back to you soon.");
    setContact({ username: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us anytime!</p>
      </div>

      {/* Grid Container */}
      <div className="contact-container">
        {/* Image */}
        <div className="contact-image">
          <img src="/images/support.png" alt="We are here to help" />
        </div>

        {/* Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Get in Touch</h2>
            <p className="form-subtitle">
              Fill the form below and we'll get back to you shortly.
            </p>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={contact.username}
                onChange={handleInput}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={contact.message}
                onChange={handleInput}
                placeholder="Write your message..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
