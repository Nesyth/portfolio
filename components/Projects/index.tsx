"use client";

import "./style.scss";

import Image, { StaticImageData } from "next/image";

import JumpFrogPhoto from "../../public/images/jumpfrog-thumbnail.webp";
import LTCPhoto from "../../public/images/learntocode-thumbnail.webp";
import SluePhoto from "../../public/images/slue-thumbnail.webp";
import SAMAPhoto from "../../public/images/sama-thumbnail.webp";
import PortolioPhoto from "../../public/images/portfolio-thumbnail.webp";

interface ProjectsObject {
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsObject: ProjectsObject[] = [
  {
    title: "Portfolio",
    description:
      "A simple project powered mainly by React and Three.js. Used mostly as a WebGL testing grounds.",
    image: PortolioPhoto,
    technologies: ["React", "TypeScript", "ThreeJS"],
    liveUrl: "/",
    githubUrl: "https://github.com/Nesyth/portfolio",
  },
  {
    title: "SAMA",
    description: `The primary mission of "Scaffolding Assembly Management Application" is to enable users to monitor and track their progress on various scaffolding tasks. To achieve this, the app integrates multiple components and features, including GPS check-in, real-time chat, and a content management system (CMS) for system administration. Still in development.`,
    image: SAMAPhoto,
    technologies: ["React", "Tailwind", "Node.js", "Express", "WebSockets"],
  },
  {
    title: "Jump, Frog!",
    description:
      '"Jump, Frog!" offers a challenging platforming experience similar to "Jump King" but with a unique frog-themed twist. Players can test their skills and try to achieve the best time possible to reach the highest score.',
    image: JumpFrogPhoto,
    technologies: ["C++", "SDL2"],
    githubUrl: "https://github.com/Nesyth/jump-frog",
  },
  {
    title: "Learn to Code",
    description: `"Learn to Code" is an interactive code learning platform created as part of a university project for the Cloud Solutions Architecture course. The platform is built using React and Tailwind CSS, with Firebase integration for authentication and data storage.`,
    image: LTCPhoto,
    technologies: ["React", "Tailwind", "Firebase"],
    liveUrl: "https://invertible-tree-333516.firebaseapp.com",
    githubUrl: "https://github.com/Nesyth/learn-to-code",
  },
  {
    title: "SLUE",
    description: `"SLUE" is a social media platform that is based on the Spotify API, allowing users to connect, share their musical preferences, and chat with each other. The platform is built using React and utilizes Spotify's API to fetch user profiles, including their favorite artists and tracks.`,
    image: SluePhoto,
    technologies: ["React", "ChakraUI"],
    liveUrl: "https://slue.vercel.app",
    githubUrl: "https://github.com/Nesyth/slue",
  },
];

function Card(props: ProjectsObject) {
  return (
    <article className="card">
      <section className="photo">
        <Image alt="" src={props.image} />
      </section>
      <section className="content">
        <div>
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
          <div className="technologies">
            {/* {props.technologies.map((el, i) => (
            <p key={i}>{el}</p>
          ))} */}
          </div>
        </div>
        <div className="buttons">
          {props.liveUrl && (
            <>
              <a
                className="live"
                href={props.liveUrl}
                aria-label="Go to Live demo"
              >
                Live demo
              </a>
              <span>|</span>
            </>
          )}
          {props.githubUrl && (
            <a
              className="github"
              href={props.githubUrl}
              aria-label="Go to Github"
            >
              Source code
            </a>
          )}
        </div>
      </section>
    </article>
  );
}

function Projects() {
  return (
    <main className="projects">
      <h2>My projects</h2>
      <div className="cards">
        {projectsObject.map((el, i) => (
          <Card {...el} key={i} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
