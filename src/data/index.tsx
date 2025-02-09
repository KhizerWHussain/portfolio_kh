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
import NextSvg from "../public/assets/svg/next.svg";
import ReactSvg from "../public/assets/svg/react.svg";
import NestSvg from "../public/assets/svg/nest.svg";
import ExpressSvg from "../public/assets/svg/express.svg";
import NodeSvg from "../public/assets/svg/node.svg";
import GitSvg from "../public/assets/svg/git.svg";
import JsSvg from "../public/assets/svg/js.svg";
import MongodbSvg from "../public/assets/svg/mongo.svg";
import RedisPng from "../public/assets/tech/redis.png";

export const skillsData = [
  { icon: NextSvg, name: "Next.js" },
  { icon: ReactSvg, name: "React.js" },
  { icon: NestSvg, name: "Nest.js" },
  { icon: ExpressSvg, name: "Express.js" },
  { icon: NodeSvg, name: "Node.js" },
  { icon: GitSvg, name: "Git" },
  { icon: JsSvg, name: "Javascript" },
  { icon: MongodbSvg, name: "Mongodb" },
  { icon: RedisPng, name: "Redis" },
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

import frontendSvg from "../public/assets/svg/frontend.svg";
import BackendSvg from "../public/assets/svg/backend.svg";
// import JavaSvg from "../public/assets/svg/java.svg";
// import DotnetSvg from "../public/assets/svg/dotnet.svg";
import DotnetSvg1 from "../public/assets/svg/dotnet (1).svg";
// import DotNetPng from "../public/assets/images/dotnet.png";

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
  // {
  //   title: "Java Development",
  //   // description: "Developing enterprise-level applications using Java, Spring Boot, and RESTful APIs.",
  //   description: "Coming Soon",
  //   icon: JavaSvg,
  // },
  {
    title: "DotNet Development",
    description: "Coming Soon",
    // icon: DotnetSvg,
    icon: DotnetSvg1,
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
];

import FluospeakThumb from "../public/assets/images/fluospeak.png";
import LucidusThumb from "../public/assets/images/lucidus.png";
import TvThumb from "../public/assets/images/techverticks.png";
import SellersRouteThumb from "../public/assets/images/sellersroute.png";
import Shopify_28_Thumb from "../public/assets/images/28.jpg";
import PlanzeeThumb from "../public/assets/images/planzee.png";
import InyeThumb from "../public/assets/images/Inye.png";
import NovaThumb from "../public/assets/images/nova.png";

import Rnative from "../public/assets/tech/React_Native.png";
import Nodejs from "../public/assets/tech/NodeJS.png";
import Monogdb from "../public/assets/tech/MongoDB.png";
import _React from "../public/assets/tech/ReactJS.png";
import WebIcon from "../public/assets/tech/web.png";
import Nextjs from "../public/assets/tech/nextjs-icon.png";
import Nestjs from "../public/assets/tech/Nest.js.png";

import IosIcon from "../public/assets/tech/IOS.png";
import AndroidIcon from "../public/assets/tech/Android.png";

// projects section data here
export const portfolioDataArray = [
  {
    id: 1,
    name: "Fluospeak",
    companyProject: true,
    slug: "fluospeak",
    type: ["frontend, backend"],
    duration: "3-6 months",
    desc: "An English learning app for fluency",
    techUsed: [
      {
        name: "React Native",
        image: Rnative,
      },
      {
        name: "Node.js",
        image: Nodejs,
      },
      {
        name: "Mongodb",
        image: Monogdb,
      },
      {
        name: "React.js",
        image: _React,
      },
    ],
    thumbnail: FluospeakThumb,
    links: [
      {
        url: "https://apps.apple.com/us/app/fluospeak/id6451119605",
        image: IosIcon,
      },
    ],
  },
  {
    id: 2,
    name: "Lucidus",
    companyProject: true,
    slug: "lucidus",
    type: ["frontend"],
    duration: "1 month",
    desc: "Unlock the power of advanced data analytics with NextGen Investigations Data. Our cutting-edge platform provides law enforcement agencies with the tools they need to solve cases faster.",
    thumbnail: LucidusThumb,
    techUsed: [
      {
        name: "Next.js",
        image: Nextjs,
        color: "white",
      },
    ],
    links: [
      {
        url: "https://lucidus-brand-website.vercel.app",
        image: WebIcon,
      },
    ],
  },
  // {
  //   id: 3,
  //   name: "INYE",
  //   companyProject: true,
  //   slug: "inye",
  //   type: "frontend",
  //   thumbnail: "",
  //   links: [
  //     {
  //       url: "",
  //       icon: null,
  //     },
  //   ],
  // },
  {
    id: 4,
    name: "Techverticks",
    companyProject: true,
    desc: "Techverticks company official website",
    slug: "techverticks",
    duration: "3-6 months",
    type: ["frontend", "backend"],
    thumbnail: TvThumb,
    techUsed: [
      {
        name: "Node.js",
        image: Nodejs,
      },
      {
        name: "Mongodb",
        image: Monogdb,
      },
      {
        name: "Next.js",
        image: Nextjs,
      },
      {
        name: "Nest.js",
        image: Nestjs,
      },
    ],
    links: [
      {
        url: "http://techverticks.com",
        image: WebIcon,
      },
    ],
  },
  // {
  //   id: 5,
  //   name: "NMO Academy",
  //   companyProject: true,
  //   slug: "nmo",
  //   type: "frontend",
  //   thumbnail: "",
  //   links: [
  //     {
  //       url: "",
  //       icon: null,
  //     },
  //   ],
  // },
  {
    id: 5,
    name: "Planzee",
    companyProject: true,
    slug: "planzee",
    type: ["backend"],
    duration: "6-8 months",
    desc: "A Social media app similar to facebook",
    techUsed: [
      {
        name: "React Native",
        image: Rnative,
      },
      {
        name: "Node.js",
        image: Nodejs,
      },
      {
        name: "Mongodb",
        image: Monogdb,
      },
      {
        name: "Nest.js",
        image: NestSvg,
      },
    ],
    thumbnail: PlanzeeThumb,
    links: [],
  },
  {
    id: 6,
    name: "Sellers Route",
    companyProject: true,
    slug: "sellers_route",
    type: ["backend"],
    thumbnail: SellersRouteThumb,
    duration: "3-6 months",
    desc: "Manage Sales & Delivery Like a Pro, Sellers Route is a tool designed to boost your sales potential by optimizing your selling process. This simple tool will help you organize your weekly field route, streamline your workflow, and increase the probability of closing deals efficiently. Take control of your sales journey with Sellers Route.",
    techUsed: [
      {
        name: "React Native",
        image: Rnative,
      },
      {
        name: "Node.js",
        image: Nodejs,
      },
      {
        name: "Mongodb",
        image: Monogdb,
      },
      {
        name: "React.js",
        image: _React,
      },
      {
        name: "Nest.js",
        image: Nestjs,
      },
    ],
    links: [
      {
        url: "https://apps.apple.com/us/app/sellers-route/id6479336204",
        image: IosIcon,
      },
    ],
  },
  // {
  //   id: 7,
  //   name: "Planzee",
  //   companyProject: true,
  //   slug: "planzee",
  //   type: "backend",
  //   thumbnail: "",
  //   links: [
  //     {
  //       url: "",
  //       icon: null,
  //     },
  //   ],
  // },
  {
    id: 8,
    name: "28",
    companyProject: true,
    slug: "28_shopify",
    type: ["frontend"],
    duration: "3 months",
    desc: "Cycle-Based Fitness + Wellness Experience",
    thumbnail: Shopify_28_Thumb,
    techUsed: [
      {
        name: "Next.js",
        image: Nextjs,
      },
    ],
    links: [
      {
        url: "https://28.co",
        image: WebIcon,
      },
    ],
  },
  {
    id: 9,
    name: "INYE",
    companyProject: true,
    slug: "inye",
    type: ["frontend"],
    duration: "1 month",
    // desc: "Cycle-Based Fitness + Wellness Experience",
    thumbnail: InyeThumb,
    techUsed: [
      {
        name: "Next.js",
        image: Nextjs,
      },
    ],
    links: [],
  },
  {
    id: 9,
    name: "Nova",
    companyProject: true,
    slug: "nova",
    type: ["backend"],
    duration: "In Progress",
    desc: "A Beauty salon app",
    thumbnail: NovaThumb,
    techUsed: [
      {
        name: "Node.js",
        image: Nodejs,
      },
      {
        name: "ReactNative",
        image: Rnative,
      },
      {
        name: "Mongodb",
        image: MongodbSvg,
      },
      {
        name: "Nest.js",
        image: Nestjs,
      },
    ],
    links: [],
  },
];
