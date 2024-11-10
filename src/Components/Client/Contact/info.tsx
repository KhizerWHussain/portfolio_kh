import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const contacts = [
  {
    type: "Email",
    value: "khizwaseem@gmail.com",
    icon: <AiOutlineMail size={32} color="#e31b6d" />,
  },
  {
    type: "Phone",
    value: "+92 3100024241",
    icon: <AiOutlinePhone size={32} color="#e31b6d" />,
  },
];

const Information = () => {
  return (
    <div className="w-full md:w-1/2 justify-center flex">
      <div className="w-full flex flex-col">
        {contacts.map((info: any, i: number) => (
          <div
            key={i}
            className="flex items-center text-gray-100 p-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            <span className="text-xl mr-3 font-medium">{info.icon}</span>
            <span className="flex-1 text-xl mr-3 font-medium">
              {info.value}
            </span>
          </div>
        ))}
        <p className="cursor-pointer w-full bg-primary text-gray-100 p-3 rounded-md hover:bg-opacity-90 transition-all duration-300">
          <a
            href={process.env.NEXT_PUBLIC_FIREBASE_RESUME_URL as string}
            target="_blank"
            rel="noopener noreferrer"
            download="Khizer Resume.pdf"
          >
            Download my resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Information;
