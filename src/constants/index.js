import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    flask,
    vue,
    wrss,
    python,
    nokia,
    carrent,
    portfolio,
    codewars,
    threejs,
    kubernetes,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "VR Developer",
      icon: mobile,
    },
    {
      title: "Python Developer",
      icon: backend,
    },
    {
      title: "Team Leader",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Vue",
      icon: vue,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "flask",
      icon: flask,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Faculty Students Council President",
      company_name: "WRSS WEAIiIB AGH UST",
      icon: wrss,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Mar 2023",
      points: [
        "Coordinating a team of 37 people.",
        "Planing and managing the organization's budget - negotiated 36% budget increase with the Faculty Dean.",
        "Active participation in the education quality assurance system (giving opinions on study programmes, initiating and coordinating changes).",
        "Co-organization and coordination of projects aimed at the student community - more than 60 during my whole activity.",
        "Collaboration with more than 30 companies a.o. Nvidia, Qualtrics, Cytiva, Sabre, Assa Abloy.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Nokia",
      icon: nokia,
      iconBg: "#383E56",
      date: "Oct 2021 - Present",
      points: [
        "Developing and maintaining web applications using Vue.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "VR Developer",
      company_name: "Nokia",
      icon: nokia,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Developing and maintaining VR application initially using Unity and then Unreal Engine and other related technologies.",
        "Collaborating with multiple departments and developers on innovative solutions to create a tool that uses VR and AR in everyday work.",
        "Promotion of the developed application during technology conferences and various exhibitions.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Online portfolio",
      description:
        "Web platform on which an online cv is presented, consisting of react components, tailwinds and javascript code. It is composed of interactive 3d models prepared thanks to the threejs library and a connected email box allowing contact with the developer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/IdryssPukke/OnlinePortfolio",
    },
    {
      name: "Video Analizer",
      description:
        "An online application that extracts information from the streams using a scraper and then, using various microservices, analyses the image using the YOLO model in search of the specified requirements.",
      tags: [
        {
          name: "deep learing",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/IdryssPukke/video-analiser",
    },
    {
      name: "Code Wars",
      description:
        "My solutions to challenges from the Code Wars website, written in Python, JavaScript and SQL.  They nicely show the level of my programming skills.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "prolog",
          color: "pink-text-gradient",
        },
      ],
      image: codewars,
      source_code_link: "https://github.com/IdryssPukke/python",
    },
  ];
  
  export { services, technologies, experiences, projects };