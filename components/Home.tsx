import React, { useState } from "react";
import { Card, Typography, Box, Stack, Button } from "@mui/joy";
import { courses } from "../data/Courses";
import "../src/index.css";
const Home: React.FC = () => {
  const initialCourseCount = 5;
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 2,
        padding: 2,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          flex: "1 1 calc(50% - 1rem)",
          minWidth: "250px",
          maxWidth: "600px",
          padding: "1.5rem",
          boxShadow: "lg",
          borderRadius: "12px",
          backgroundColor: "black",
          color: "white",
          transition: "border 0.3s ease",
          border: "2px solid transparent",
          "@media (max-width: 850px)": {
            flex: "1 1 calc(100% - 1rem)",
          },
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = "2px solid white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "2px solid transparent";
        }}
      >
        <Stack spacing={2}>
          <Typography
            level="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            About Me:
          </Typography>
          <Typography
            level="body-md"
            sx={{
              fontSize: "1rem",
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
          </Typography>
        </Stack>
      </Card>

      <Card
        variant="outlined"
        sx={{
          flex: "1 1 calc(50% - 1rem)",
          minWidth: "250px",
          maxWidth: "600px",
          padding: "1.5rem",
          boxShadow: "lg",
          borderRadius: "12px",
          backgroundColor: "black",
          color: "white",
          transition: "border 0.3s ease",
          border: "2px solid transparent",
          "@media (max-width: 850px)": {
            flex: "1 1 calc(100% - 1rem)",
          },
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = "2px solid white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "2px solid transparent";
        }}
      >
        <Stack spacing={2}>
          <Typography
            level="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            Education:
          </Typography>
          <Typography
            level="body-md"
            sx={{
              fontSize: "1rem",
              color: "white",
            }}
          >
            <b>University of Michigan - Ann Arbor</b>
            <br />
            <i id="home-edu-major">B.S Computer Science</i>
            <br />
            <b id="home-dates">Jan. 2024 - May. 2026</b>
            <br />
            <br />
            <b>Oakland Community College</b>
            <br />
            <i id="home-edu-major">Transferred, General Studies</i>
            <br />
            <b id="home-dates">Jun. 2022 - Aug. 2023</b>
            <br />
            <br />
            <b>Relevant Courses</b>
            <br />
            {courses
              .slice(0, showAllCourses ? courses.length : initialCourseCount)
              .map((course, index) => (
                <span key={index} id="home-edu-courses">
                  {course}
                  {index <
                    (showAllCourses ? courses.length : initialCourseCount) -
                      1 && ", "}
                </span>
              ))}
          </Typography>
          {courses.length > initialCourseCount && (
            <Button
              onClick={() => setShowAllCourses(!showAllCourses)}
              sx={{
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
            </Button>
          )}
        </Stack>
      </Card>

      <Card
        variant="outlined"
        sx={{
          flex: "1 1 calc(50% - 1rem)",
          minWidth: "250px",
          maxWidth: "600px",
          padding: "1.5rem",
          boxShadow: "lg",
          borderRadius: "12px",
          backgroundColor: "black",
          color: "white",
          transition: "border 0.3s ease",
          border: "2px solid transparent",
          "@media (max-width: 850px)": {
            flex: "1 1 calc(100% - 1rem)",
          },
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = "2px solid white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "2px solid transparent";
        }}
      >
        <Stack spacing={2}>
          <Typography
            level="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            Experience:
          </Typography>
          <Typography
            level="body-md"
            sx={{
              fontSize: "1rem",
              color: "white",
            }}
          >
            <b>Michigan Hackers</b>
            <br />
            <b id="home-job-titles">
              Software Engineer & Advanced Web Development Team Lead
            </b>
            <br />
            <b id="home-dates">Aug. 2024 - Present</b>
            <br />
            <i id="home-job-desc">
              Teaching students the fundamentals of fullstack development, while
              fostering a collaborative enviornment to create meaningful
              projects.
            </i>
            <br /> <br />
            <b>Michigan Data Science Team</b>
            <br />
            <b id="home-job-titles">Data Analyst</b>
            <br />
            <b id="home-dates">Jan. 2024 - Apr. 2024</b>
            <br />
            <i id="home-job-desc">
              Utilized Spotify’s API to analyze user data, uncovering trends
              like top artists, favorite tracks, and listening patterns,
              providing actionable insights to enhance the music discovery
              experience.
            </i>
          </Typography>
        </Stack>
      </Card>
      <Card
        variant="outlined"
        sx={{
          flex: "1 1 calc(50% - 1rem)",
          minWidth: "250px",
          maxWidth: "600px",
          padding: "1.5rem",
          boxShadow: "lg",
          borderRadius: "12px",
          backgroundColor: "black",
          color: "white",
          transition: "border 0.3s ease",
          border: "2px solid transparent",
          "@media (max-width: 850px)": {
            flex: "1 1 calc(100% - 1rem)",
          },
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = "2px solid white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "2px solid transparent";
        }}
      >
        <Stack spacing={2}>
          <Typography
            level="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            Skills:
          </Typography>
          <Typography
            level="body-md"
            sx={{
              fontSize: "1rem",
              color: "white",
            }}
          >
            <b>Languages</b>
            <br />
            <b id="home-job-titles">
              HTML, CSS, JavaScript, TypeScript, Python, C, C++, SQL
            </b>
            <br /> <br />
            <b>Frameworks</b>
            <br />
            <b id="home-job-titles">React.js, Next.js, Node.js, Vite, Flask</b>
            <br /> <br />
            <b>Libraries</b>
            <br />
            <b id="home-job-titles">
              Tailwind CSS, Sass, Material UI, Bootstrap, MongoDB, Supabase,
              Firebase, SQLite, MySQL, Redux
            </b>
            <br /> <br />
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
};

export default Home;
