import { Box, Typography } from "@mui/material";
// redux
import { useSelector } from "react-redux";
export default function TextLine({ text, color, fontColor = "#fff" }) {
  const movil = useSelector((state) => state.movil.value);
  return (
    <Box
      mt={5}
      style={{
        display: movil ? undefined : "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        style={{
          backgroundColor: color,
          padding: "10px",
          textAlign: movil ? "center" : undefined,
        }}
      >
        <Typography
          variant={movil ? "h3-bold" : "h2-bold"}
          color={fontColor}
        >
          {text}
        </Typography>
      </Box>
      {!movil && (
        <Box
          style={{
            height: "5px",
            backgroundColor: color,
            marginLeft: "20px",
            // take the rest width
            flex: 1,
          }}
        />
      )}
    </Box>
  );
}
