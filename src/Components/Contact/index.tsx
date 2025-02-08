"use client";
import React from "react";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("./form"), { ssr: true });
const Information = dynamic(() => import("./info"), { ssr: true });
import emailjs from "emailjs-com";
import { Form, Formik } from "formik";
import { string, object } from "yup";

type formDataState = {
  name: string;
  email: string;
  message: string;
};

const validationSchema = object({
  email: string().email("invalid email").required("email is required"),
  name: string().required("name is required"),
  message: string().required("message is required"),
});

const Contact = () => {
  const ServiceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const handleSubmit = async ({ email, message, name }: formDataState) => {
    try {
      const result = await emailjs.send(
        ServiceKey,
        templateId,
        {
          to_name: "Khizer",
          to_email: "khizwaseem@gmail.com",
          reply_to: email,
          from_name: name, // Sender's name from form data
          message: message,
        },
        publicKey
      );
      if (result && result.status === 200) {
        alert("Message sent successfully!");
      }
    } catch (error: any) {
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
          <Formik
            enableReinitialize={false}
            isInitialValid={false}
            validateOnChange={true}
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { resetForm, setSubmitting }) => {
              setSubmitting(true);
              handleSubmit({
                name: data.name,
                email: data.email,
                message: data.message,
              });
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form
                noValidate={true}
                autoComplete="off"
                className="flex flex-1"
              >
                <ContactForm isSubmitting={isSubmitting} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
