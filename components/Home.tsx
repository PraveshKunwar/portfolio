import React from "react";
import "../src/index.css";

const Home: React.FC = () => {
  return (
    <div className="home-section">
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
          Programming Concepts, <b>EECS 203</b>: Discrete Math, <b>EECS 280</b>:
          Programming and Intro Data Structures, <b>EECS 281</b>: Data
          Structures and Algorithms, <b>EECS 370</b>: Intro to Computer
          Orginization, <b>EECS 376</b>: Foundations of Computer Science,{" "}
          <b>EECS 481</b>: Software Engineering, <b>EECS 484</b>: Database
          Systems, <b>EECS 485</b>: Web Systems
        </p>
      </section>
      <section id="home-skills"></section>
    </div>
  );
};

export default Home;
