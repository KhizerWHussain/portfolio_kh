"use client";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = JSON.stringify(formData);
    try {
      const response = await axios.post("/api/v1/contact", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div
      className="flex h-screen w-full pl-0 pr-0 md:pl-36 md:pr-36 justify-center items-center bg-thirdly"
      id="contact"
    >
      <div className="w-full max-w-lg p-8 rounded-lg">
        <h1 className="font-bold text-[36px] text-gray-100 text-center mb-8 underline">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-100 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-100 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 h-32 rounded-md bg-gray-700 text-gray-100 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Write your message"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary text-gray-100 p-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
