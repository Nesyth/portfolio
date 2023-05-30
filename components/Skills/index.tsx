import "./style.scss";

interface SkillsArray {
  frontend: string[];
  backend: string[];
  others: string[];
}

function Skills() {
  const skillsArray: SkillsArray = {
    frontend: [
      "React",
      "Redux",
      "JavaScript ES6",
      "TypeScript",
      "Three.js",
      "Tailwind",
      "ChakraUI",
      "React Testing Library",
      "HTML",
      "CSS",
      "SCSS",
    ],
    backend: [
      "Node.js",
      "Express",
      "WebSockets",
      "NoSQL",
      "MongoDB",
      "Mocha",
      "Chai",
    ],
    others: [
      "Firebase",
      "Git",
      "GCP",
      "MVC",
      "OOP",
      "Responsive Design",
      "C++",
    ],
  };

  return (
    <main className="skills">
      <h2>My skills</h2>
      <div className="files">
        <section>
          <div>Frontend</div>
          <div>
            {skillsArray.frontend.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
        </section>
        <section>
          <div>Backend</div>
          <div>
            {skillsArray.backend.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
        </section>
        <section>
          <div>Others</div>
          <div>
            {skillsArray.others.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Skills;
