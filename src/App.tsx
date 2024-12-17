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
        }}
      >
        <Card variant="outlined" sx={{ maxWidth: 400, p: 2, mb: 4, mt: 2 }}>
          <Stack spacing={2} alignItems="center">
            <Avatar
              src={"/praveshk.png"}
              alt="Your Name"
              sx={{ width: 100, height: 100 }}
            />
            <Box textAlign="center">
              <Typography level="h3" sx={{ fontWeight: "bold" }}>
                Pravesh Kunwar
              </Typography>
              <Typography level="body-lg" color="neutral">
                CS & EE Minor @University of Michigan
              </Typography>
              <Typography level="body-lg" color="neutral">
                Novi, Michigan, United States
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/praveshkunwar/"
                target="_blank"
              >
                <LinkedInIcon color="inherit" />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/PraveshKunwar"
                target="_blank"
              >
                <GitHubIcon color="inherit" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/pravesh.kunwar/"
                target="_blank"
              >
                <InstagramIcon color="inherit" />
              </IconButton>
              <IconButton
                component="a"
                href="https://leetcode.com/u/PraveshKunwar/"
                target="_blank"
              >
                <CodeIcon color="inherit" />
              </IconButton>
              <IconButton
                component="a"
                href="https://open.spotify.com/user/31hlradyl4gkqrewv634ekpuf5gm?si=0cd80758da1c4166"
                target="_blank"
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
              <Typography level="h4" textAlign="center" sx={{ mt: 1, mb: 1 }}>
                Hobbies & Interests
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Tooltip title="I love soccer!" variant="soft">
                  <IconButton>
                    <SportsSoccerIcon color="inherit" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="I love coding challenges!" variant="soft">
                  <IconButton>
                    <CodeIcon color="inherit" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Graduating '26!" variant="soft">
                  <IconButton>
                    <SchoolIcon color="inherit" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>

            {/* Navigation Links */}
            <Box>
              <Stack direction="row" spacing={2} justifyContent="center">
                <JoyLink component={Link} to="/" color="primary">
                  Home
                </JoyLink>
                <JoyLink component={Link} to="/books" color="primary">
                  Books
                </JoyLink>
                <JoyLink component={Link} to="/projects" color="primary">
                  Projects
                </JoyLink>
                <JoyLink component={Link} to="/misc" color="primary">
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
