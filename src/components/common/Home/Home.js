import { useState } from "react";
import { Slide } from "react-slideshow-image";
import { TextField, Box, Typography, Button, Container } from "@mui/material";
export default function Home() {
  const images = [
    "/images/SlidersHome/slide_one.png",
    "/images/SlidersHome/slide_two.png",
    "/images/SlidersHome/slide_three.png",
  ];
  // create a interator of images
  return (
    <Box
      style={{
        position: "relative",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          zIndex: 10,
          left: "50%",
        }}
      >
        <Typography variant="h1-bold" color="#ffff">
          adfgfdws
        </Typography>
      </Box>
			<Slide duration={4000}>

			</Slide>
    </Box>
  );
}
