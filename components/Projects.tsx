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
              width: "300px",
              minWidth: "300px",
              padding: "1.5rem",
              boxShadow: "lg",
              borderRadius: "12px",
              position: "relative",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
              <Typography level="h2" sx={{ fontWeight: "bold" }}>
                {project.name}
              </Typography>
              <Typography level="body-md" color="neutral">
                {project.description}
              </Typography>
              <Box>
                <Typography level="body-sm" sx={{ fontWeight: "bold" }}>
                  Tools & Technologies:
                </Typography>
                <Typography level="body-sm" color="neutral">
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
