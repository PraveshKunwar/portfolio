import React from "react";
import { Card, Typography, Box, Stack, IconButton, Avatar } from "@mui/joy";
import booksData from "../data/books.json";

interface Books {
  name: string;
  author: string;
  description: string;
  rating: string;
  url: string;
  link: string;
}

const Books: React.FC = () => {
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
      {Array.isArray(booksData.books) ? (
        (booksData.books as Books[]).map((book, index) => (
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
            }}
          >
            <Stack spacing={2}>
              <IconButton
                href={book.link}
                component="a"
                target="_blank"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              >
                <Avatar src={book.url} />
              </IconButton>
              <Typography level="h2" sx={{ fontWeight: "bold" }}>
                {book.name}
              </Typography>
              <Typography level="body-md" color="neutral">
                By: {book.author}
              </Typography>
              <Box>
                <Typography level="body-sm" sx={{ fontWeight: "bold" }}>
                  Review:
                </Typography>
                <Typography level="body-sm" color="neutral">
                  <i>{book.description}</i>
                </Typography>
                <Typography level="body-sm" sx={{ fontWeight: "bold" }}>
                  Rating: {book.rating}
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
export default Books;
