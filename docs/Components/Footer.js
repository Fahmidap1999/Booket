// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="Contact">
      <h3>Contact Us</h3>
      <div className="contact-info">
        <p>Phone: +971 50 854 6575</p>
        <p>Address: KALAKKANDATHIL ARCADE, Near Shifa Convention Center, Perithalmanna</p>
      </div>
      <div className="map-container">
      <iframe 
      title="Google Map Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.775165287528!2d76.24654559999999!3d10.980336099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cdccf1bb0f0b%3A0x354f9013c076454b!2sEAGLE%20NEST%20RESIDENCY!5e0!3m2!1sen!2sin!4v1742897128187!5m2!1sen!2sin" width="600"
      height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
      <p>&copy; {new Date().getFullYear()} EAGLE NEST RESIDENCY. All rights reserved.</p>
    </footer>
  )
};

export default Footer;
