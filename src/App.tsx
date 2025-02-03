import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Card,
  Typography,
  Avatar,
  Box,
  Stack,
  Link as JoyLink,
  Tooltip,
  IconButton,
} from "@mui/joy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";

import Home from "../components/Home";
import Books from "../components/Books";
import Projects from "../components/Projects";
import Misc from "../components/Misc";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "black",
          color: "white",
        }}
        className="card-container"
      >
        <Card
          variant="outlined"
          sx={{
            width: "50%",
            minWidth: "900px",
            margin: "2rem auto",
            padding: "1.5rem",
            boxShadow: "lg",
            borderRadius: "12px",
            backgroundColor: "black",
            color: "white",
            "@media (max-width: 768px)": {
              width: "100%",
              minWidth: "300px",
              margin: "0",
              borderRadius: "0",
              position: "relative",
              top: "auto",
              padding: "1rem",
            },
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Avatar
              src={"/ocean.jpg"}
              alt="Pravesh Kunwar"
              sx={{ width: 100, height: 100 }}
            />
            <Box textAlign="center">
              <Typography
                level="h1"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Pravesh Kunwar
              </Typography>
              <Typography level="body-lg" sx={{ color: "white" }}>
                <b>Fullstack Developer</b>
              </Typography>
              <Typography level="body-sm" sx={{ color: "white" }}>
                Novi, Michigan, United States
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/praveshkunwar/"
                target="_blank"
                sx={{ color: "white" }}
              >
                <LinkedInIcon color="inherit" />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/PraveshKunwar"
                target="_blank"
                sx={{ color: "white" }}
              >
                <GitHubIcon color="inherit" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/pravesh.kunwar/"
                target="_blank"
                sx={{ color: "white" }}
              >
                <InstagramIcon color="inherit" />
              </IconButton>
              <IconButton
                component="a"
                href="https://open.spotify.com/user/31hlradyl4gkqrewv634ekpuf5gm?si=0cd80758da1c4166"
                target="_blank"
                sx={{ color: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  />
                </svg>
              </IconButton>
            </Stack>

            {/* Hobbies or Skills with Tooltips */}
            <Box>
              <Typography
                level="h4"
                textAlign="center"
                sx={{ mt: 1, mb: 1, color: "white" }}
              >
                Hobbies & Interests
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Tooltip title="I love soccer!" variant="soft">
                  <IconButton sx={{ color: "white" }}>
                    <SportsSoccerIcon color="inherit" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="I love coding challenges!" variant="soft">
                  <IconButton sx={{ color: "white" }}>
                    <CodeIcon color="inherit" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Graduating '26!" variant="soft">
                  <IconButton sx={{ color: "white" }}>
                    <SchoolIcon color="inherit" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>

            {/* Navigation Links */}
            <Box>
              <Stack direction="row" spacing={2} justifyContent="center">
                <JoyLink component={Link} to="/" sx={{ color: "white" }}>
                  Home
                </JoyLink>
                <JoyLink component={Link} to="/books" sx={{ color: "white" }}>
                  Books
                </JoyLink>
                <JoyLink
                  component={Link}
                  to="/projects"
                  sx={{ color: "white" }}
                >
                  Projects
                </JoyLink>
                <JoyLink
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white" }}
                >
                  Resume
                </JoyLink>
                <JoyLink component={Link} to="/misc" sx={{ color: "white" }}>
                  Misc
                </JoyLink>
              </Stack>
            </Box>
          </Stack>
        </Card>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/misc" element={<Misc />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
