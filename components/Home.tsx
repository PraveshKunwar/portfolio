import React from "react";
import "../src/index.css";

const Home: React.FC = () => {
  return (
    <div className="home-section">
      <div className="home-grid-container">
        <section id="home-about-me">
          <h2>About Me:</h2>
          <p className="home-paragraph">
            Hi, my name is Pravesh Kunwar, and I'm currently a student at the
            University of Michigan in Ann Arbor! I'm currently a CS Major, with
            plans of doing an Electrical Engineering Minor! I am eager to learn
            and explore new technologies, and I thrive in environments where
            innovation and collaboration are encouraged. I love the challenge of
            solving complex problems and enjoy working on projects that make a
            meaningful impact in any area that is involved.
          </p>
        </section>
        <section id="home-classes">
          <h2>Relevant Courses:</h2>
          <p className="home-classes-courses">
            <b>MATH 115</b>: Calculus I, <b>MATH 116</b>: Calculus II,{" "}
            <b>ECON 102</b>: Principle Econ II, <b>EECS 183</b>: Elementary
            Programming Concepts, <b>EECS 203</b>: Discrete Math,{" "}
            <b>EECS 280</b>: Programming and Intro Data Structures,{" "}
            <b>EECS 281</b>: Data Structures and Algorithms, <b>EECS 370</b>:
            Intro to Computer Orginization, <b>EECS 376</b>: Foundations of
            Computer Science, <b>*EECS 481</b>: Software Engineering,{" "}
            <b>*EECS 484</b>: Database Systems, <b>*EECS 485</b>: Web Systems
          </p>
        </section>
      </div>
      {/*
      <section id="home-skills">
        <h2>Skills:</h2>
        <h4>Here are the languages and tools that I've used!</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
                className="tooltip"
              >
                {skill.language}
              </div>
              <div
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((
                    (e.currentTarget.parentNode as HTMLElement).querySelector(
                      ".tooltip"
                    ) as HTMLElement
                  ).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((
                    (e.currentTarget.parentNode as HTMLElement).querySelector(
                      ".tooltip"
                    ) as HTMLElement
                  ).style.opacity = "0")
                }
              >
                {skill.svg}
              </div>
            </div>
          ))}
        </div>
      </section>
      */}
    </div>
  );
};

export default Home;
