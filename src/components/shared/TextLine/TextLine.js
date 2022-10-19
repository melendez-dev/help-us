import { Box, Typography } from "@mui/material";
export default function TextLine({ text, color, fontColor = "#fff" }) {
  console.log("fontColor", fontColor);
  return (
    <Box
      mt={5}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h2-bold"
          color={fontColor}
          style={{
            backgroundColor: color,
            padding: "10px",
          }}
        >
          {text}
        </Typography>
      </Box>
      <Box
        style={{
          width: "60%",
          height: "5px",
          backgroundColor: color,
          marginLeft: "20px",
        }}
      ></Box>
    </Box>
  );
}
