"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("./form"), { ssr: true });
const Information = dynamic(() => import("./info"), { ssr: true });
import emailjs from "emailjs-com";

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

  const ServiceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        ServiceKey,
        templateId,
        {
          to_name: "Khizer",
          to_email: "khizwaseem@gmail.com",
          reply_to: formData.email,
          from_name: formData.name, // Sender's name from form data
          message: formData.message,
        },
        publicKey
      );

      if (result.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error: any) {
      setFormData({ name: "", email: "", message: "" });
      console.log("error ==>", error);
      if (error.status === 429) {
        alert(
          "Message limit reached. Please contact me directly at khizwaseem@gmail.com."
        );
      } else {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    <div
      className="flex h-screen w-full pl-0 pr-0 md:pl-36 md:pr-36 justify-center items-center bg-thirdly"
      id="contact"
    >
      <div className="w-full p-8 rounded-lg">
        <h1 className="font-bold text-[36px] text-gray-100 text-center mb-8 underline">
          Contact Me
        </h1>
        <div className="w-full h-full flex flex-col md:flex-row lg:flex-row justify-between gap-6">
          <Information />
          <ContactForm
            formData={formData}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
