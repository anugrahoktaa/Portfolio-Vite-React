// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact-container">
                <h2><span className="section-number">03.</span> Get In Touch</h2>
                <p className="contact-subtitle">Have a project in mind or just want to say hello? My inbox is always open.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="name">/name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="email">/email</label>
                    </div>
                    <div className="form-group">
                        <textarea id="message" name="message" rows="5" required></textarea>
                        <label htmlFor="message">/message</label>
                    </div>
                    <button type="submit" className="cta-button glass-card">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;