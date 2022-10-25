import { Box, Typography } from "@mui/material";
export default function TextLine({ text, color, fontColor = "#fff" }) {
  console.log("fontColor", fontColor);
  return (
    <Box
      mt={5}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        style={{
          backgroundColor: color,
          padding: "10px",
        }}
      >
        <Typography variant="h2-bold" color={fontColor} style={{}}>
          {text}
        </Typography>
      </Box>
      <Box
        style={{
          height: "5px",
          backgroundColor: color,
          marginLeft: "20px",
          // take the rest width
          flex: 1,
        }}
      ></Box>
    </Box>
  );
}
