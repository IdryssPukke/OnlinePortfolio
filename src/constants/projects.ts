import { carrent, portfolio, codewars } from "../assets";

export const PROJECTS = [
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
