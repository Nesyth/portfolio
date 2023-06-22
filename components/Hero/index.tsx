"use client";

import { useState } from "react";
import "./style.scss";

function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <main className="hero" onMouseEnter={() => setIsAnimated(true)}>
      <h1>
        <p>
          <span
            onAnimationEnd={() => setIsAnimated(false)}
            className={isAnimated ? "hand" : ""}
          >
            👋🏻
          </span>
          &nbsp;Hi, I&apos;m...
        </p>
        <p className="bigger">MIKOŁAJ JAKUBOWSKI.</p>
      </h1>
      <h2>
        <p>
          A tech explorer, boldly venturing into uncharted territories of code.
          With a versatile toolkit of technologies, frameworks, and languages, I
          dance across the digital landscape, seeking out novel challenges to
          conquer.
        </p>
      </h2>
    </main>
  );
}

export default Hero;
