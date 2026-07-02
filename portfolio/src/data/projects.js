import ecommerce from "../assets/images/ecommerce.png";
import portfolio from "../assets/images/portfolio.png";

const projects = [
  {
    id: 1,
    title: "Modern E-Commerce",
    description:
      "A complete MERN Stack e-commerce application with authentication, admin dashboard, Cloudinary image upload, order management, and responsive UI.",
    image: ecommerce,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind",
    ],
    github: "https://github.com/Ankit7n/E-Commerce",
    live: "https://e-commerce-sable-psi.vercel.app/",
  },

  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with React and Tailwind CSS featuring responsive design, animations, and reusable components.",
    image: portfolio,
    technologies: ["React", "Tailwind", "Vite"],
    github: "https://github.com/Ankit7n/Portfolio",
    live: "https://portfolio-ankitdev7n.vercel.app",
  },

  // {
  //   id: 3,
  //   title: "Todo App",
  //   description:
  //     "A task manager with JWT authentication, CRUD operations, dashboard, and responsive interface.",
  //   image: "/projects/taskmanager.png",
  //   technologies: ["React", "Node", "MongoDB", "Express"],
  //   github: "https://github.com/yourusername/taskmanager",
  //   live: "https://taskmanager.vercel.app",
  // },
];

export default projects;
