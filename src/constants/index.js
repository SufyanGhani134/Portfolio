import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Developer",
      icon: web,
    },
    {
      title: "Front-End Developer",
      icon: mobile,
    },
    {
      title: "JS Developer",
      icon: backend,
    },
    {
      title: "Three.js Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "HTML/CSS",
      company_name: "Devsinc",
      icon: tailwind,
      iconBg: "#E6DEDD",
      date: "Feb 2023",
      points: [
        "Successfully completed hands-on exercises and projects during the training that involved creating well-structured and semantically correct web pages using HTML.",
        "Gained proficiency in using CSS to style and enhance the visual presentation of web pages, including layout, typography, colors, and responsive design.",
        "Explored CSS frameworks like Bootstrap or Foundation to streamline the implementation of responsive layouts and components.",
        "Developed an understanding of best practices in HTML and CSS coding, and provided constructive feedback to improve code quality, maintainability, and adherence to web standards.",
      ],
    },
    {
      title: "Javascript Developer",
      company_name: "Devsinc",
      icon: javascript,
      iconBg: "#383E56",
      date: "March 2023",
      points: [
        "Successfully completed hands-on exercises and projects during the training that involved writing JavaScript code to add interactivity and functionality to web pages.",
        "Gained proficiency in core JavaScript concepts such as variables, data types, operators, control structures, loops, functions, and error handling.",
        "Acquired knowledge and skills to enhance user experiences by implementing interactive features, such as form validation, dynamic content updates, event handling, and DOM manipulation using JavaScript.",
        "Developed an understanding of best practices in JavaScript coding and provided constructive feedback to improve code quality, readability, and maintainability.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Devsinc",
      icon: reactjs,
      iconBg: "#383E56",
      date: "April 2023 - May 2023",
      points: [
        "Successfully completed hands-on projects and exercises during the training that involved building web applications using React.js",
        "Gained proficiency in creating components, managing state, and implementing interactivity in React applications.",
        "Learned how to effectively communicate and work together to understand project requirements and deliver high-quality React applications.",
        "Acquired knowledge of related technologies often used alongside React, such as React Router for handling navigation and Redux for state management..",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sufyan proved me wrong.",
      name: "Omer",
      designation: "Colleague",
      company: "Devsinc",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sufyan does.",
      name: "Shahroz",
      designation: "Colleague",
      company: "Devsinc",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Sufyan consistently demonstrates a strong work ethic, attention to detail, and a genuine passion for learning.",
      name: "Ali",
      designation: "Trainer",
      company: "Devsinc",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Magic Quote Generator",
      description:
        "a feature-rich application that offers users the ability to generate, store, and display their personal quotes. With a sign-in and login functionality, users can securely access their account and add their own quotes, which are stored in local storage. Additionally, the app fetches data from an API to display a collection of random quotes, providing users with a constant source of inspiration and motivation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react router",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://earnest-otter-cc8f7e.netlify.app/",
    },
    {
      name: "Movie Search App",
      description:
        "a user-friendly web application that utilizes an API to fetch and store movie data locally. With a built-in search bar, users can effortlessly explore movie information including ratings, genre, plot, and poster. By minimizing the need for continuous API requests, the application provides a seamless browsing experience, empowering users to find and access specific films of interest efficiently.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "html/css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://fascinating-dasik-6ca211.netlify.app/",
    },
    {
      name: "New Vision Softcom & Consultancy Web Page",
      description:
        "The test project showcases the design and layout skills of the developer and demonstrates a visually appealing and well-structured webpage for the company. The project demonstrates proficiency in HTML and CSS, including responsive design principles and attention to detail in creating an engaging and professional web presence for New Vision Softcom & Consultancy.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "responsiveness",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://sunny-baklava-8de5ba.netlify.app/project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };