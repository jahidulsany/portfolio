import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className:
      "text-white lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "text-white lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "text-white lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "text-white lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a project comparable to Stack Overflow",
    description: "Dev Overflow",
    className: "text-white md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "text-white lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Facehook",
    des: "A social media app with features like posts, reactions, comments, profile, etc.",
    img: "/facehook.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "",
  },
  {
    id: 2,
    title: "Filmpire",
    des: "An AI powered movie app with React and Redux, including filtered and pagination features along with authentication.",
    img: "/filmpire.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Cryptoket",
    des: "An NFT Marketplace related to NFT seller, hot bids, details of NFT profile, checkout and so on.",
    img: "/cryptoket.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "",
  },
  {
    id: 4,
    title: "EduConnect",
    des: "A collaborative platform for dynamic and interactive learning.",
    img: "/educonnect.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Jahidul sany was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jahidul's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jahidul is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Jahidul sany was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jahidul's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jahidul is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Jahidul sany was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jahidul's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jahidul is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Jahidul sany was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jahidul's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jahidul is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Jahidul sany was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jahidul's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jahidul is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const experiencesData = [
  {
    title: "The Advanced Web Design and Development",
    location: "Sylhet, Bangladesh",
    description:
      "After completing six months of intensive studying, I graduated, marking the initial step into the world of development and designing frontends for numerous projects. During this time, I independently built my first websites. While I secured an internship opportunity, I, unfortunately, had to decline it due to preparations for studying abroad.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "The Complete Full-stack JavaScript Development",
    location: "Dhaka, Bangladesh",
    description:
      "Due to the impact of Covid-19, I was unable to pursue my plans for studying abroad. Instead, I seized the opportunity to enroll in a comprehensive 10-month Complete Web Development bootcamp course, where I delved into the intricacies of JamStack and MERN stack technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Next Level Web Development",
    location: "London, UK",
    description:
      "After earning my MSc from the University of Greenwich, I made the decision to enroll in the most advanced full-stack course, where I honed my skills to the next level. I delved into revolutionary technologies such as Next.js, TypeScript, Redux, and more. Right now, I am actively seeking a front-end developer role.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/link.svg",
  },
  {
    id: 3,
    img: "/twit.svg",
  },
];
