import React from "react";
import { Card, Typography, Box, Stack, IconButton } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import projectData from "../data/projects.json";

interface Projects {
  name: string;
  description: string;
  link: string;
  languagesAndTools: string[];
}

const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 2,
        padding: 2,
      }}
    >
      {Array.isArray(projectData.projects) ? (
        (projectData.projects as Projects[]).map((project, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              flex: "1 1 calc(33% - 1rem)",
              minWidth: "250px",
              maxWidth: "300px",
              minHeight: "320px",
              padding: "1.5rem",
              boxShadow: "lg",
              borderRadius: "12px",
              position: "relative",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "@media (max-width: 768px)": {
                flex: "1 1 calc(100% - 1rem)",
              },
            }}
          >
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <IconButton
                component="a"
                href={project.link}
                target="_blank"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              >
                <GitHubIcon />
              </IconButton>
              <Typography
                level="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                {project.name}
              </Typography>
              <Typography
                level="body-md"
                color="neutral"
                sx={{
                  fontSize: "1rem",
                  flexGrow: 1,
                }}
              >
                {project.description}
              </Typography>
              <Box>
                <Typography
                  level="body-sm"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  Tools & Technologies:
                </Typography>
                <Typography
                  level="body-sm"
                  color="neutral"
                  sx={{
                    fontSize: "0.9rem",
                  }}
                >
                  <i>{project.languagesAndTools.join(", ")}</i>
                </Typography>
              </Box>
            </Stack>
          </Card>
        ))
      ) : (
        <Typography level="body-lg" color="danger">
          No projects found.
        </Typography>
      )}
    </Box>
  );
};

export default Projects;
