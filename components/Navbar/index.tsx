"use client";

import "./style.scss";

import { Arrow } from "@/public/icons/arrow";

const scroll = (props: string) => {
  const section = document.querySelector(`.${props}`);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Navbar() {
  return (
    <main>
      <div className="navbar">
        <div className="navbar-hack">
          <div className="navbar-content">
            <div className="navbar-left">
              <a href="/">
                <p>
                  nesyth<span>.</span>dev
                </p>
              </a>
            </div>
            <div className="navbar-right">
              <p onClick={() => scroll("skills")}>Skills</p>
              <span>|</span>
              <p onClick={() => scroll("projects")}>Portfolio</p>
              <span>|</span>
              <p onClick={() => scroll("contact")}>Contact</p>
            </div>
          </div>
        </div>
        <div className="separator" />
      </div>
      <Arrow onClick={() => scroll("skills")} />
    </main>
  );
}

export default Navbar;
