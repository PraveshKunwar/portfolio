import React from "react";
import { Card, Typography, Box, Stack, Link } from "@mui/joy";
import Rating from "@mui/material/Rating";
import booksData from "../data/books.json";

interface Books {
  name: string;
  author: string;
  description: string;
  rating: number; // Updated to number for Rating component
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
              <Box
                component="img"
                src={book.url}
                alt={book.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "4px 8px",
                  borderRadius: "12px",
                }}
              >
                <Rating
                  name="read-only"
                  value={book.rating}
                  precision={0.5}
                  readOnly
                />
              </Box>
              <Typography
                level="h2"
                sx={{ fontWeight: "bold", color: "white", mt: 1 }}
              >
                {book.name}
              </Typography>
              <Typography level="body-md" sx={{ color: "white" }}>
                By: {book.author}
              </Typography>

              {/* Book Description */}
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
              </Box>

              {/* "View More" Link */}
              <Link
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#4f80ff",
                  textDecoration: "none",
                  fontWeight: "500",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                View More
              </Link>
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
