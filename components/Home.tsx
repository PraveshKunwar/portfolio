import React, { useState } from "react";
import "../src/index.css";
import { courses } from "../data/Courses";

const Home: React.FC = () => {
  const initialCourseCount = 5;
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

  return (
    <div
      className="home-section"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        className="home-grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <section
          id="home-about-me"
          style={{
            borderRadius: "12px",
            padding: "1.5rem",
            transition: "border 0.3s ease",
            border: "2px solid transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "2px solid white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "2px solid transparent";
          }}
        >
          <h2 style={{ color: "white" }}>About Me:</h2>
          <p
            className="home-paragraph"
            style={{
              color: "white",
            }}
          >
            Hi, my name is Pravesh Kunwar, and I'm currently a student at the
            University of Michigan in Ann Arbor! I'm currently a CS Major, with
            plans of doing an Electrical Engineering Minor! I am eager to learn
            and explore new technologies, and I thrive in environments where
            innovation and collaboration are encouraged. I love the challenge of
            solving complex problems and enjoy working on projects that make a
            meaningful impact in any area that is involved.
          </p>
        </section>

        <section
          id="home-classes"
          style={{
            borderRadius: "12px",
            padding: "1.5rem",
            transition: "border 0.3s ease",
            border: "2px solid transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "2px solid white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "2px solid transparent";
          }}
        >
          <h2 style={{ color: "white" }}>Education:</h2>
          <p
            className="home-education"
            style={{
              color: "white",
            }}
          >
            <b>University of Michigan - Ann Arbor</b>
            <br />
            <b id="home-edu-dates">Jan. 2024 - May. 2026</b>
            <br />
            <b>Oakland Community College</b>
            <br />
            <b id="home-edu-dates">Jun. 2022 - Aug. 2023</b>
            <br />
            <b>Relevant Courses</b>
            <br />
            {courses
              .slice(0, showAllCourses ? courses.length : initialCourseCount)
              .map((course, index) => (
                <span key={index}>
                  {course}
                  {index <
                    (showAllCourses ? courses.length : initialCourseCount) -
                      1 && ", "}
                </span>
              ))}
          </p>
          {courses.length > initialCourseCount && (
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              style={{
                background: "none",
                border: "none",
                color: "#4f80ff",
                cursor: "pointer",
                padding: "0",
                marginTop: "0.5rem",
                fontWeight: "600",
              }}
            >
              {showAllCourses ? "Show Less" : "Read More"}
            </button>
          )}
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
