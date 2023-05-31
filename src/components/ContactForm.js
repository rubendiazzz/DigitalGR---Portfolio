import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // State for form data

  // Function to handle input change
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic goes here...
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} value={formData.name} />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={formData.email} />
      <textarea name="message" placeholder="Message" onChange={handleInputChange} value={formData.message} />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
