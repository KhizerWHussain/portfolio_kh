import { BsSpeedometer } from "react-icons/bs";
import { FaMobileScreen } from "react-icons/fa6";
import { TiLightbulb } from "react-icons/ti";
import { IoIosRocket } from "react-icons/io";

export const headerLinksArray = [
  {
    id: 1,
    text: "Home",
    slug: "/home",
    to: "hero",
  },
  {
    id: 2,
    text: "About",
    slug: "/about",
    to: "about",
  },
  {
    id: 3,
    text: "Portfolio",
    slug: "/portfolio",
    to: "portfolio",
  },
  {
    id: 4,
    text: "Services",
    slug: "/services",
    to: "services",
  },
  {
    id: 5,
    text: "Contact",
    slug: "/contact",
    to: "contact",
  },
];

export const aboutPropertiesLinks = [
  {
    id: 1,
    title: "Fast",
    description:
      "Fast load times and lag free interaction, my highest priority.",
    icon: <BsSpeedometer fontSize={32} color="white" />,
  },
  {
    id: 2,
    title: "Responsive",
    description: "My layouts will work on any device, big or small.",
    icon: <FaMobileScreen fontSize={32} color="white" />,
  },
  {
    id: 3,
    title: "Intuitive",
    description: "Strong preference for easy to use, intuitive UX/UI.",
    icon: <TiLightbulb fontSize={32} color="white" />,
  },
  {
    id: 4,
    title: "Dynamic",
    description:
      "Websites don't have to be static, I love making pages come to life.",
    icon: <IoIosRocket fontSize={32} color="white" />,
  },
];

// skills images
import NextSvg from "../../assets/svg/next.svg";
import ReactSvg from "../../assets/svg/react.svg";
import NestSvg from "../../assets/svg/nest.svg";
import ExpressSvg from "../../assets/svg/express.svg";
import NodeSvg from "../../assets/svg/node.svg";
import GitSvg from "../../assets/svg/git.svg";
import JsSvg from "../../assets/svg/js.svg";
import MongodbSvg from "../../assets/svg/mongo.svg";

export const skillsData = [
  { icon: NextSvg, name: "Next.js" },
  { icon: ReactSvg, name: "React.js" },
  { icon: NestSvg, name: "Nest.js" },
  { icon: ExpressSvg, name: "Express.js" },
  { icon: NodeSvg, name: "Node.js" },
  { icon: GitSvg, name: "Git" },
  { icon: JsSvg, name: "Javascript" },
  { icon: MongodbSvg, name: "Mongodb" },
];

export const educationDataArray = [
  {
    institute: "Iqra University, Main Campus",
    degree: "Bachelors in Computer Science",
    location: "Karachi",
    completionYear: "2023",
  },
  {
    institute: "SSAT Degree College",
    degree: "Pre-Engineering",
    location: "Karachi",
    completionYear: "2018",
  },
];

export const experienceDataArray = [
  {
    id: 1,
    company: "Tech Verticks",
    durationTime: "Sept 2023 - In Progress",
    job: "Mern Stack Developer",
  },
];

import frontendSvg from "../../assets/svg/frontend.svg";
import BackendSvg from "../../assets/svg/backend.svg";
import JavaSvg from "../../assets/svg/java.svg";

export const servicesDataArray = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using React.js, Next.js, and modern CSS frameworks.",
    icon: frontendSvg,
  },
  {
    title: "Backend Development",
    description:
      "Creating robust and scalable server-side applications with Node.js, Express, Nest.js and MongoDB.",
    icon: BackendSvg,
  },
  {
    title: "Java Development",
    // description: "Developing enterprise-level applications using Java, Spring Boot, and RESTful APIs.",
    description: "Coming Soon",
    icon: JavaSvg,
  },
];

import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

export const footerDataArray = [
  {
    id: 1,
    icon: <RiLinkedinFill color="white" fontSize={20} />,
    link: "https://www.linkedin.com/in/khizer-hussain-65b1171ba/",
  },
  {
    id: 2,
    icon: <TbBrandGithubFilled color="white" fontSize={20} />,
    link: "https://github.com/KhizerWHussain",
  },
  // {
  //   id: 3,
  //   icon: null,
  //   link: "https://www.linkedin.com/in/khizer-hussain-65b1171ba/",
  // },
];
