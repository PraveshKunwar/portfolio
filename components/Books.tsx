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
        backgroundColor: "black",
        color: "white",
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
              backgroundColor: "black",
              color: "white",
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
            <Stack spacing={2}>
              <IconButton
                href={book.link}
                component="a"
                target="_blank"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "white",
                }}
              >
                <Avatar src={book.url} />
              </IconButton>
              <Typography
                level="h2"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {book.name}
              </Typography>
              <Typography level="body-md" sx={{ color: "white" }}>
                By: {book.author}
              </Typography>
              <Box>
                <Typography
                  level="body-sm"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Review:
                </Typography>
                <Typography level="body-sm" sx={{ color: "white" }}>
                  <i>{book.description}</i>
                </Typography>
                <Typography
                  level="body-sm"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Rating: {book.rating}
                </Typography>
              </Box>
            </Stack>
          </Card>
        ))
      ) : (
        <Typography level="body-lg" sx={{ color: "white" }}>
          No books found.
        </Typography>
      )}
    </Box>
  );
};

export default Books;
