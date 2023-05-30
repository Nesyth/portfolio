import "./style.scss";

import { LinkedInIcon } from "@/public/icons/linkedin_icon";
import { GithubIcon } from "@/public/icons/github_icon";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h2>Got any questions?</h2>
        <h2>A project to discuss?</h2>
      </div>
      <div>
        <div className="text">
          <p>hello@nesyth.dev</p>
          <p>Based in Gdańsk, Poland. 🇵🇱</p>
        </div>
        <div className="icons">
          <a href="https://github.com/Nesyth" aria-label="Find me on Github">
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/mikolaj-jakubowski"
            aria-label="Find me on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
