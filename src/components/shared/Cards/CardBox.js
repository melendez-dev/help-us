import { Box, Grid, Typography, Container } from "@mui/material";

// redux
import { useSelector } from "react-redux";
export default function CardBox({
  title,
  desc,
  background,
  height,
  width,
  colorText = "#F3F3F3",
  boxShadow = null,
  container = false,
}) {
  const ComponentCustom = container ? Container : Box;
  const movil = useSelector((state) => state.movil.value);
  return (
    <Box
      style={{
        title: title,
        desc: desc,
        background: background,
        height: height,
        width: width,
        borderRadius: "12px",
        marginTop: "30px",
        boxShadow: boxShadow,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ComponentCustom
            style={{
              paddingTop: container ? "20px" : undefined,
            }}
          >
            <Typography variant={movil ? "h3-bold" : "h1-bold"} color="#D8705D">
              {title}
            </Typography>
          </ComponentCustom>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ComponentCustom
          style={{
            marginTop: container ? "10px" : undefined,
          }}
        >
          <Typography variant={movil ? "p-small" : "p"} color={colorText}>
            {desc}
          </Typography>
        </ComponentCustom>
      </Grid>
    </Box>
  );
}
