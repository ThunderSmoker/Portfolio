import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    gdsc,
    redux,
    tailwind,
    nodejs,
    mongodb,
    spiffy,
    onlineshopee,
    contsaga,
    git,
    figma,
    express,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    django,
    jobit,
    tripguide,
    threejs,
    wrexa
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      title: "Cloud Team Executive",
      company_name: "GDSC WCE",
      icon: gdsc,
      iconBg: "#fff",
      date: "Septemper 2022 - May 2023",
      points: [
        "Learning and teaching various Google Cloud Platform services to my team with enthusiasm.",
        "Collaborated with cross-functional teams including designers, managers, and other developers to create high-quality projects.",
        "Conducted series for teaching DevOps starting from Docker and Git.",
        "Participated in Hackathons and helped juniors to learn and build projects.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full stack Developer Intern",
      company_name: "Wrexa LLC",
      icon: wrexa,
      iconBg: "#ffffff",
      date: "April 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Aradhya, you are good developer with versatile knowledge of different programming languages. Experience is quite surface level but can figure out solution for advanced problems as well..",
      name: "Prajwal Shah",
      designation: "President",
      company: "Codechef WCE Chapter",
      image: "https://media.licdn.com/dms/image/D5603AQFhHGRmlzTAmA/profile-displayphoto-shrink_400_400/0/1662789555053?e=1691625600&v=beta&t=lV_ly_PXrJfqPsXz1q3xzg5UhgLL2eb4jxYCROAqWac",
    },
    {
      testimonial:
        "Aradhya as a developer is versatile I can say, if any specific language is required for development then he will learn it and build it. A trustworthy developer , anyone can rely on him for any kind of work.",
      name: "Datta Gangji",
      designation: "President",
      company: "WCE WLUG",
      image: "https://media.licdn.com/dms/image/D5603AQEIXikMHyqpDQ/profile-displayphoto-shrink_400_400/0/1677207736288?e=1691625600&v=beta&t=dI7Yxcotlz9VK4ArDNwyYD3qaoMW68PiE8CKFNsmyEk",
    },
    {
      testimonial:
        "Best fronted developer with amazing grasping power 💪.He can manage many tasks and complete them within a short period of time.Aradhya can complete hard tasks on time successfully",
      name: "Jyotiraditya Patil",
      designation: "Chair",
      company: "IEEE WCE Chapter",
      image: "https://media.licdn.com/dms/image/D5603AQEd0m3f56SgKA/profile-displayphoto-shrink_400_400/0/1673584040696?e=1691625600&v=beta&t=LVymZYreEnWCAIbFYnfk36SlTOxMJ6OdyA6LEIRvPN0",
    },
  ];
  
  const projects = [
    {
      name: "Spiffy Videchat",
      description:
        "A fully functional MERN Stack google meet clone using firebase as Database, socket.io & webRTC for real Time Communication and Google Cloud Platform's gcloud engine for deployment of backend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
      ],
      image: spiffy,
      source_code_link: "https://github.com/ThunderSmoker/Spiffy-Videochat",
      demo_link: "https://spiffy-home.netlify.app/"
    },
    {
      name: "Container Saga",
      description:
        "Login page and leaderboard for wargames of finding flags inside docker containers held by WCEWLUG for its megaevent METAMORPHOSIS 2k23. Developed using React.js and used glassmorphism.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "UI/UX",
          color: "red-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: contsaga,
      source_code_link: "https://github.com/ThunderSmoker",
      demo_link:"https://container-saga.wcewlug.org"
    },
    {
      name: "Online Shopee",
      description:
        "A MERN stack based shoe selling e-commerce website. It has authentication system for user login and signup and a products home page with cart and checkout functionality.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: onlineshopee,
      source_code_link: "https://github.com/ThunderSmoker/Online-shopee",
      demo_link:"https://online-shopee.netlify.app"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };