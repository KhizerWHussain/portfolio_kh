import React from "react";
import { Field, ErrorMessage } from "formik";

interface ContactFormProp {
  isSubmitting: boolean;
}

const ContactForm = ({ isSubmitting }: ContactFormProp) => {
  return (
    <div className="flex flex-col flex-1 gap-4 w-full md:w-1/2 lg:w-1/2">
      <div className="flex flex-col gap-[2px]">
        <Field
          type="text"
          id="name"
          name="name"
          className="w-full p-3 rounded-md bg-gray-700 text-gray-100 outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your name"
          required={true}
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-sm mt-2"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <Field
          type="email"
          id="email"
          name="email"
          className="w-full p-3 rounded-md bg-gray-700 text-gray-100 outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your email"
          required={true}
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm mt-2"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <Field
          id="message"
          name="message"
          as="textarea"
          // value={formData.message}
          className="w-full p-3 h-32 rounded-md bg-gray-700 text-gray-100 outline-none focus:ring-2 focus:ring-primary"
          placeholder="Write your message"
          required={true}
        />
        <ErrorMessage
          name="message"
          component="div"
          className="text-red-500 text-sm mt-2"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-gray-100 p-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
      >
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
