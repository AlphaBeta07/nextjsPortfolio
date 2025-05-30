export const projects = [
  {
    id: 1,
    name: "3d Portfolio",
    technologies: ["React-three/fiber", "Three.js", "Leva", "Howler"],
    description: `This project showcases a virtual room filled with numerous interactive objects. Click on these objects to engage with them—change the lighting and theme, play a game of Mario, listen to music, view my projects, and much more.`,
    githubLink: "https://github.com/AlphaBeta07/3D-Portfolio-Website",
    liveAppLink: "https://anishlandage3d.netlify.app",
    imagePath: "/assets/projects/threejs.png",
  },
  {
    id: 2,
    name: "Portfolio",
    technologies: ["AI", "Machine Learning", "NextJS", "Typescript", "ShadCN"],
    description: `This portfolio website showcases my work, skills, and projects in a clean and easy-to-navigate format. It highlights my experience, achievements, and technical expertise, offering a clear view of my capabilities and previous work.`,
    githubLink: "https://github.com/AlphaBeta07/portfolio",
    liveAppLink: "https://anishlandage.netlify.app",
    imagePath: "/assets/projects/portfolio.JPG",
  },
  {
    id: 3,
    name: "Esp8266 Drone",
    technologies: ["Cpp","Blynk"],
    description: `Developed a drone that is built using a NodeMCU microcontroller and features wireless control via the Blynk app. It offers real-time flight maneuvering through smartphone-based joystick inputs over Wi-Fi.`,
    githubLink: "https://github.com/numanjvd82/nextjs-ai-toolkit",
    //liveAppLink: "https://wilderness-weather-station.netlify.app",
    imagePath: "/assets/projects/drone.png",
  },
];

export const experienceSectionText = ``;

export type Experience = {
  id: number;
  companyName: string;
  duration: string;
  roles: string[];
  tags: string[];
  details?: {
    imagePaths?: string[];
    description: string;
    companyWebsite?: string;
  };
};

export const experiences: Experience[] = [
  {
    id: 1,
    companyName: "ThreadCounty",
    duration: `January 2025`,
    roles: ["Founder","Full stack Developer"],
    tags: ["NextJS", "NodeJS", "HTML", "Javascript", "Python"],
    details: {
      //companyWebsite: "https://www.operationalsoftware.co",
      description: `As a Full Stack Developer at Operational Software, I specialized in creating bespoke features using TypeScript, ReactJS, NodeJS, CSS, and a variety of other technologies. My role involved handling both front-end and back-end development, ensuring seamless integration and robust functionality across the entire stack.`,
    },
  }
];

export const socials = {
  linkedin: "https://linkedin.com/in/anish-landage-774511298",
  github: "https://www.github.com/AlphaBeta07",
};
