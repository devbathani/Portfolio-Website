"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yqjwlqu", // Replace with your Service ID
        "template_e8fj14a", // Replace with your Template ID
        formData,
        "YjKOzdzK4Dg1k8H2D" // Replace with your User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("An error occurred, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className="max-w-md mx-auto mt-8 space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-md bg-background text-foreground focus:ring-1 focus:ring-primary focus:border-primary"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-md bg-background text-foreground focus:ring-1 focus:ring-primary focus:border-primary"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-md bg-background text-foreground focus:ring-1 focus:ring-primary focus:border-primary"
        required
      />
      <button
        type="submit"
        className="w-full px-4 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
