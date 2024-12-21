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
          MATH 115: Calculus I, MATH 116: Calculus II, ECON 102: Principle Econ
          II, EECS 183: Elementary Programming Concepts, EECS 203: Discrete
          Math, EECS 280: Programming and Intro Data Structures, EECS 281: Data
          Structures and Algorithms, EECS 370: Intro to Computer Orginization,
          EECS 376: Foundations of Computer Science, EECS 481: Software
          Engineering, EECS 485: Web Systems, EECS 492: Introduction to
          Artificial Intelligence
        </p>
      </section>
      <section id="home-skills"></section>
    </div>
  );
};

export default Home;
