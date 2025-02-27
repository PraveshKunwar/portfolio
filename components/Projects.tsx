import React from "react";
import { Card, Typography, Box, Stack, IconButton } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as LinkIcon } from "@mui/icons-material";
import projectData from "../data/projects.json";

interface Projects {
  name: string;
  description: string;
  link: string;
  languagesAndTools: string[];
  deployedLink?: string;
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
        backgroundColor: "black",
        color: "white",
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
              backgroundColor: "black",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border 0.3s ease",
              border: "2px solid transparent",
              "@media (max-width: 768px)": {
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
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  display: "flex",
                  gap: 1,
                }}
              >
                <IconButton
                  component="a"
                  href={project.link}
                  target="_blank"
                  sx={{ color: "white" }}
                >
                  <GitHubIcon />
                </IconButton>
                {project.deployedLink && (
                  <IconButton
                    component="a"
                    href={project.deployedLink}
                    target="_blank"
                    sx={{ color: "white" }}
                  >
                    <LinkIcon />
                  </IconButton>
                )}
              </Box>
              <Typography
                level="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: "white",
                }}
              >
                {project.name}
              </Typography>
              <Typography
                level="body-md"
                sx={{
                  fontSize: "1rem",
                  flexGrow: 1,
                  color: "white",
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
                    color: "white",
                  }}
                >
                  Tools & Technologies:
                </Typography>
                <Typography
                  level="body-sm"
                  sx={{
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                >
                  <i>{project.languagesAndTools.join(", ")}</i>
                </Typography>
              </Box>
            </Stack>
          </Card>
        ))
      ) : (
        <Typography level="body-lg" sx={{ color: "white" }}>
          No projects found.
        </Typography>
      )}
    </Box>
  );
};

export default Projects;
