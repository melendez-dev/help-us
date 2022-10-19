import { Box, Grid, Typography, Container } from "@mui/material";
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
            <Typography variant="h1-bold" color="#D8705D">
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
          <Typography variant="p" color={colorText}>
            {desc}
          </Typography>
        </ComponentCustom>
      </Grid>
    </Box>
  );
}
