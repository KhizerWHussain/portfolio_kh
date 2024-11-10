import React from "react";

interface ContactFormProp {
  handleSubmit: (e: React.FormEvent) => void;
  formData: any;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ContactForm = ({
  handleSubmit,
  formData,
  handleInputChange,
}: ContactFormProp) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full md:w-1/2"
    >
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
  );
};

export default ContactForm;
